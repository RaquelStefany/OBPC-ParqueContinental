const FALLBACK_VERSE = {
  text: "O justo passa por muitas adversidades, mas o Senhor o livra de todas.",
  reference: "Salmos 34:19",
  version: "NVI",
  sourceUrl: "https://www.bible.com/pt/verse-of-the-day",
  imageUrl: "https://s3.amazonaws.com/static-youversionapi-com/images/base/75749/1280x1280.jpg",
};

const API_BASE = "https://api.youversion.com/v1";
const BIBLE_VERSION_ID = 129;

function getSaoPauloDayOfYear() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  const current = Date.UTC(Number(values.year), Number(values.month) - 1, Number(values.day));
  const firstDay = Date.UTC(Number(values.year), 0, 1);
  return Math.floor((current - firstDay) / 86400000) + 1;
}

async function requestYouVersion(path, appKey, errorCode) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { "X-YVP-App-Key": appKey, Accept: "application/json" },
  });
  if (!response.ok) {
    const error = new Error(`YouVersion respondeu com status ${response.status}`);
    error.code = errorCode;
    error.status = response.status;
    throw error;
  }
  const payload = await response.json();
  return payload.data ?? payload;
}

async function findVerseImage(passageId) {
  const pageUrl = `https://www.bible.com/pt/bible/${BIBLE_VERSION_ID}/${passageId}.NVI`;
  const response = await fetch(pageUrl, { headers: { "User-Agent": "OBPC-ParqueContinental/1.0" } });
  if (!response.ok) return null;
  let html = await response.text();
  html = html.replaceAll("\\u002F", "/").replaceAll("&amp;", "&");
  try { html = decodeURIComponent(html); } catch { /* conteúdo já decodificado */ }
  try { html = decodeURIComponent(html); } catch { /* conteúdo já decodificado */ }
  const match = html.match(/static-youversionapi-com\/images\/base\/(\d+)\/1280x1280\.jpg/i);
  return match
    ? `https://s3.amazonaws.com/static-youversionapi-com/images/base/${match[1]}/1280x1280.jpg`
    : null;
}

export async function getVerseOfTheDay(appKey) {
  if (!appKey) return { ...FALLBACK_VERSE, fallback: true, configured: false };

  try {
    const day = getSaoPauloDayOfYear();
    const selection = await requestYouVersion(
      `/verse_of_the_days/${day}`,
      appKey,
      "VERSE_OF_THE_DAY_REQUEST_FAILED",
    );
    const passageId = selection.passage_id;
    if (!passageId) throw new Error("A API não retornou o identificador do versículo");

    const [passage, imageUrl] = await Promise.all([
      requestYouVersion(
        `/bibles/${BIBLE_VERSION_ID}/passages/${passageId}?format=text`,
        appKey,
        "NVI_PASSAGE_REQUEST_FAILED",
      ),
      findVerseImage(passageId),
    ]);

    return {
      text: passage.content?.trim() || FALLBACK_VERSE.text,
      reference: passage.reference || passageId,
      version: "NVI",
      sourceUrl: "https://www.bible.com/pt/verse-of-the-day",
      imageUrl: imageUrl || FALLBACK_VERSE.imageUrl,
      passageId,
      day,
      fallback: false,
      configured: true,
    };
  } catch (error) {
    console.error("Não foi possível atualizar o Versículo do Dia:", error.message);
    return {
      ...FALLBACK_VERSE,
      fallback: true,
      configured: true,
      fallbackReason: error.code || "UNEXPECTED_YOUVERSION_ERROR",
      upstreamStatus: error.status || null,
    };
  }
}

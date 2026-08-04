import { getVerseOfTheDay } from "./_verse-service.js";

export default async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    return response.status(405).json({ error: "Método não permitido" });
  }

  const verse = await getVerseOfTheDay(process.env.YVP_APP_KEY);
  response.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  return response.status(200).json(verse);
}


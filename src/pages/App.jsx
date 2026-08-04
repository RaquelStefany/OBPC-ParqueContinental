import { useEffect, useState } from "react";
import {
  FiArrowRight,
  FiBookOpen,
  FiCalendar,
  FiChevronUp,
  FiClock,
  FiExternalLink,
  FiHeart,
  FiMapPin,
  FiMaximize2,
  FiMenu,
  FiNavigation,
  FiUsers,
  FiX,
} from "react-icons/fi";
import "../styles/App.css";
import logo from "../assets/img/obpc_logo2.png";
import heroImage from "../assets/img/inicio.webp";
import churchImage from "../assets/img/QuemSomos2.png";
import churchImageTwo from "../assets/img/fotoIgreja.png";
import ufebracImage from "../assets/img/conjuntos/ufebrac.png";
import umasbracImage from "../assets/img/cultos/4.png";
import jubracImage from "../assets/img/conjuntos/jovens.png";
import menibracImage from "../assets/img/cultos/8.png";
import louvorImage from "../assets/img/conjuntos/louvor.png";
import musicosImage from "../assets/img/conjuntos/musicos.png";

const services = [
  {
    day: "Quarta-feira",
    time: "19h30",
    title: "Culto de Ensino",
    text: "Culto de Doutrina dedicado ao estudo e ao aprendizado da Palavra de Deus. Um momento para aprofundar o conhecimento bíblico, esclarecer dúvidas e fortalecer a fé para viver os ensinamentos de Cristo no dia a dia.",
    icon: FiBookOpen,
  },
  {
    day: "Sexta-feira",
    time: "19h30",
    title: "Culto de Círculo de Oração",
    text: "Culto voltado para a conversa com Deus por meio da oração, da adoração e da busca pela Sua presença. Um encontro de fé no qual também oramos por cura, libertação e fortalecimento das almas, dirigido pela UFEBRAC — União Feminina da Igreja O Brasil Para Cristo.",
    icon: FiHeart,
  },
  {
    day: "Domingo",
    time: "08h · 09h · 19h",
    title: "Domingo na igreja",
    text: "O domingo reúne três momentos especiais para toda a igreja: começamos o dia buscando a Deus em consagração, seguimos com o aprendizado na Escola Bíblica Dominical e, à noite, nos reunimos para celebrar em comunhão.",
    slots: [["08h", "Consagração"], ["09h", "Escola Bíblica Dominical"], ["19h", "Culto"]],
    icon: FiUsers,
  },
];

const monthlyServices = [
  { day: "1º domingo", title: "Jovens", text: "Culto liderado pelo departamento de Jovens da igreja, com uma programação preparada para aproximar esta geração de Deus. Um encontro de louvor, Palavra, comunhão e fortalecimento da fé em Cristo." },
  { day: "2º domingo", title: "Santa Ceia", text: "Culto em que relembramos o sacrifício que Jesus fez por nós na cruz. Como igreja, nos unimos em um só espírito para celebrar a comunhão e participar da Santa Ceia do Senhor." },
  { day: "3º domingo", title: "Missões", text: "Culto dedicado à obra missionária dentro e fora da igreja. Um momento para conhecer, apoiar e participar de ações que levam o Evangelho e o cuidado ao próximo, em parceria com o Projeto Missão Desafio.", links: true },
  { day: "4º domingo", title: "Departamento", text: "Cultos alternados liderados pelos diferentes departamentos da igreja. Cada encontro traz uma programação especial, permitindo que crianças, adolescentes, jovens, mulheres e homens sirvam com seus dons." },
  { day: "5º domingo", title: "Família", text: "Culto voltado para o fortalecimento da família à luz da Palavra de Deus. Um encontro para todas as idades, dedicado à união, à oração e ao crescimento espiritual dentro de cada lar." },
];

const departments = [
  {
    name: "UFEBRAC",
    fullName: "União Feminina da Igreja O Brasil Para Cristo",
    description: "A UFEBRAC é o conjunto formado pelas mulheres da igreja. Por meio do louvor, da oração e da comunhão, elas servem a Deus, apoiam a obra e cooperam para o fortalecimento espiritual das mulheres e das famílias.",
    image: ufebracImage,
  },
  {
    name: "UMASBRAC",
    fullName: "União Masculina da Igreja O Brasil Para Cristo",
    description: "A UMASBRAC é o conjunto que reúne os homens da igreja. Seu propósito é servir a Deus com louvor e dedicação, incentivar a comunhão e fortalecer o compromisso dos homens com a Palavra, a família e a obra de Cristo.",
    image: umasbracImage,
  },
  {
    name: "JUBRAC",
    fullName: "Juventude da Igreja O Brasil Para Cristo",
    description: "A JUBRAC é o conjunto de jovens da igreja. Em seus encontros e participações, os jovens desenvolvem seus dons, criam vínculos, crescem no conhecimento da Palavra e compartilham o amor de Cristo com sua geração.",
    image: jubracImage,
  },
  {
    name: "MENIBRAC",
    fullName: "Meninas e Meninos da Igreja O Brasil Para Cristo",
    description: "A MENIBRAC é o conjunto das crianças da igreja. Com alegria e uma linguagem adequada para cada idade, elas aprendem a Palavra de Deus, participam dos louvores e dão seus primeiros passos na caminhada com Cristo.",
    image: menibracImage,
  },
  {
    name: "LOUVOR",
    fullName: "Conjunto de Louvor da OBPC",
    description: "O conjunto de Louvor conduz a igreja em momentos de adoração, preparando cada canção com dedicação e sensibilidade espiritual. Seu propósito é servir a Deus e ajudar a congregação a expressar sua fé por meio da música.",
    image: louvorImage,
  },
  {
    name: "MÚSICOS",
    fullName: "Conjunto de Músicos da OBPC",
    description: "O conjunto de Músicos reúne instrumentistas que colocam seus talentos a serviço da igreja. Com dedicação, unidade e responsabilidade, eles acompanham os louvores e contribuem para cada momento de adoração da congregação.",
    image: musicosImage,
  },
];

const navItems = [
  ["Início", "inicio"],
  ["Versículo do dia", "versiculo-do-dia"],
  ["Quem somos", "quem-somos"],
  ["Cultos", "cultos"],
  ["Agenda", "agenda"],
  ["Departamentos", "departamentos"],
  ["Localização", "localizacao"],
];

const fallbackDailyVerse = {
  text: "O justo passa por muitas adversidades, mas o Senhor o livra de todas.",
  reference: "Salmos 34:19",
  version: "NVI",
  sourceUrl: "https://www.bible.com/pt/verse-of-the-day",
  imageUrl: "https://s3.amazonaws.com/static-youversionapi-com/images/base/75749/1280x1280.jpg",
};

const weeklyMeetings = [
  { day: 0, hour: 8, minute: 0, time: "08h", title: "Consagração" },
  { day: 0, hour: 9, minute: 0, time: "09h", title: "Escola Bíblica Dominical" },
  { day: 0, hour: 19, minute: 0, time: "19h", title: "Culto da noite" },
  { day: 3, hour: 19, minute: 30, time: "19h30", title: "Culto de Ensino" },
  { day: 5, hour: 19, minute: 30, time: "19h30", title: "Círculo de Oração" },
];

const weekdayNames = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
const weekdayIndexes = { Sunday: 0, Monday: 1, Tuesday: 2, Wednesday: 3, Thursday: 4, Friday: 5, Saturday: 6 };

function getNextMeeting() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  const currentDay = weekdayIndexes[values.weekday];
  const currentMinute = currentDay * 1440 + Number(values.hour) * 60 + Number(values.minute);
  const weekMinutes = 7 * 1440;

  const next = weeklyMeetings
    .map((meeting) => {
      const meetingMinute = meeting.day * 1440 + meeting.hour * 60 + meeting.minute;
      return { ...meeting, distance: (meetingMinute - currentMinute + weekMinutes) % weekMinutes };
    })
    .sort((a, b) => a.distance - b.distance)[0];

  const minutesUntilTomorrow = 1440 - (currentMinute % 1440);
  const dayLabel = next.distance < minutesUntilTomorrow
    ? "Hoje"
    : next.distance < minutesUntilTomorrow + 1440
      ? "Amanhã"
      : weekdayNames[next.day];

  return { ...next, dayLabel };
}

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [nextMeeting, setNextMeeting] = useState(getNextMeeting);
  const [dailyVerse, setDailyVerse] = useState(fallbackDailyVerse);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const meetingTimer = window.setInterval(() => setNextMeeting(getNextMeeting()), 60000);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearInterval(meetingTimer);
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/verse-of-day", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Não foi possível carregar o Versículo do Dia");
        return response.json();
      })
      .then((verse) => {
        if (verse?.text && verse?.reference && verse?.imageUrl) setDailyVerse(verse);
      })
      .catch((error) => {
        if (error.name !== "AbortError") console.warn(error.message);
      });
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (!selectedDepartment) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setSelectedDepartment(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedDepartment]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeMenu = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeMenu);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeMenu);
    };
  }, [menuOpen]);

  const navigate = (id) => {
    setMenuOpen(false);
    scrollTo(id);
  };

  return (
    <div className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <button className="brand" onClick={() => navigate("inicio")} aria-label="Ir para o início">
          <img src={logo} alt="O Brasil Para Cristo" />
          {/* <small>Parque Continental</small> */}
        </button>

        <nav className={menuOpen ? "is-open" : ""} aria-label="Navegação principal">
          {navItems.map(([label, id]) => (
            <button key={id} onClick={() => navigate(id)}>{label}</button>
          ))}
          <button className="nav-highlight" onClick={() => navigate("localizacao")}>Visite-nos</button>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <span className="eyebrow">Uma igreja para você e sua família</span>
            <h1>Há um lugar<br />para você <em>aqui.</em></h1>
            <p>Somos uma unidade da fé localizada em São Vicente, vivendo o amor de Jesus, crescendo juntos e servindo ao próximo.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => navigate("cultos")}>
                Conheça nossos cultos <FiArrowRight />
              </button>
              <button className="button button-ghost" onClick={() => navigate("localizacao")}>
                <FiMapPin /> Como chegar
              </button>
            </div>
            <button className="hero-verse" onClick={() => navigate("versiculo-do-dia")}>
              <span>Versículo do dia</span>
              <p>“{dailyVerse.text}”</p>
              <strong>{dailyVerse.reference} · {dailyVerse.version} <FiArrowRight /></strong>
            </button>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img src={heroImage} alt="Comunidade da OBPC Parque Continental" />
            </div>
            <div className="hero-note">
              <FiCalendar />
              <span>
                <small>Próximo encontro · {nextMeeting.title}</small>
                <strong>{nextMeeting.dayLabel}, às {nextMeeting.time}</strong>
              </span>
            </div>
          </div>
          <span className="hero-word" aria-hidden="true">FÉ</span>
        </section>

        <section className="daily-verse section" id="versiculo-do-dia">
          <div className="daily-verse-visual">
            <img src={dailyVerse.imageUrl} alt={`Imagem do Versículo do Dia — ${dailyVerse.reference}`} />
          </div>
          <div className="daily-verse-copy">
            <span className="eyebrow">Versículo do dia</span>
            <div className="verse-quote-mark" aria-hidden="true">“</div>
            <blockquote>{dailyVerse.text}</blockquote>
            <p className="verse-reference">{dailyVerse.reference} <span>({dailyVerse.version})</span></p>
            <p className="verse-reflection">Separe um momento para meditar nesta Palavra e permita que ela acompanhe você ao longo do dia.</p>
            <a href={dailyVerse.sourceUrl} target="_blank" rel="noreferrer" className="verse-source">
              <span><small>Conteúdo do versículo</small><strong>www.bible.com</strong></span>
              <FiExternalLink />
            </a>
          </div>
        </section>

        <div className="section-divider" aria-hidden="true">
          <span />
          <i />
          <span />
        </div>

        <section className="about section" id="quem-somos">
          <div className="about-images">
            <img className="about-main" src={churchImage} alt="Fachada da OBPC Parque Continental" />
            <img className="about-detail" src={churchImageTwo} alt="Igreja O Brasil Para Cristo" />
            <div className="about-badge"><strong>OBPC</strong><span>Parque Continental</span></div>
          </div>
          <div className="about-copy">
            <span className="eyebrow">Quem somos</span>
            <h2>Uma comunidade<br />firmada em Cristo.</h2>
            <p>Somos a Igreja Evangélica Pentecostal O Brasil Para Cristo no Parque Continental. Um lugar de adoração, ensino e comunhão onde pessoas e famílias podem crescer na fé.</p>
            <p>Nossas portas estão abertas para receber você exatamente como está. Venha viver conosco uma caminhada de esperança, propósito e transformação.</p>
            <button className="text-link" onClick={() => navigate("localizacao")}>
              Planeje sua primeira visita <FiArrowRight />
            </button>
          </div>
        </section>

        <section className="services section" id="cultos">
          <div className="section-heading">
            <div><span className="eyebrow light">Nossos encontros</span><h2>Uma semana<br />com propósito.</h2></div>
            <p>Separe um tempo para estar em comunhão. Em cada encontro, uma oportunidade de se aproximar de Deus e de pessoas.</p>
          </div>
          <div className="service-grid">
            {services.map(({ day, time, title, text, slots, icon: Icon }, index) => (
              <article className="service-card" key={title}>
                <span className="card-number">0{index + 1}</span>
                <Icon className="card-icon" />
                <div className="service-time"><FiClock /> {day} · {time}</div>
                <h3>{title}</h3>
                <p>{text}</p>
                {slots && <div className="service-slots">
                  {slots.map(([slotTime, slotTitle]) => <span key={slotTime}><strong>{slotTime}</strong>{slotTitle}</span>)}
                </div>}
              </article>
            ))}
          </div>
        </section>

        <section className="schedule section" id="agenda">
          <div className="schedule-intro">
            <span className="eyebrow">Agenda mensal</span>
            <h2>Cada domingo,<br />um novo encontro.</h2>
            <p>Além dos encontros semanais, nossos domingos têm celebrações especiais conduzidas pelos ministérios da igreja.</p>
          </div>
          <div className="schedule-list">
            {monthlyServices.map(({ day, title, text, links }) => (
              <article key={day}>
                <span>{day}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  {links && <div className="mission-links">
                    <a href="https://www.instagram.com/missaodesafio_/" target="_blank" rel="noreferrer">Instagram</a>
                    <a href="https://www.youtube.com/missaodesafio" target="_blank" rel="noreferrer">YouTube</a>
                  </div>}
                </div>
                <strong>19h</strong>
              </article>
            ))}
          </div>
        </section>

        <section className="departments section" id="departamentos">
          <div className="departments-heading">
            <span className="eyebrow">Louvor, comunhão e serviço</span>
            <h2>Conheça os<br />nossos conjuntos.</h2>
            <p>Os departamentos reúnem os conjuntos da igreja, dando a cada grupo um espaço para servir a Deus, desenvolver seus dons e crescer em comunhão com Cristo.</p>
          </div>
          <div className="department-grid">
            {departments.map((department, index) => (
              <button
                className="department-card"
                key={department.name}
                onClick={() => setSelectedDepartment(department)}
                aria-label={`Ver foto e descrição do conjunto ${department.name}`}
              >
                <div className="department-image">
                  <img src={department.image} alt={`Conjunto do departamento ${department.name}`} />
                  <span>0{index + 1}</span>
                  <div className="department-open"><FiMaximize2 /> Conhecer conjunto</div>
                </div>
                <div className="department-content">
                  <span>{department.fullName}</span>
                  <h3>{department.name}</h3>
                  <p>{department.description}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="location section" id="localizacao">
          <div className="location-content">
            <span className="eyebrow light">Venha nos conhecer</span>
            <h2>Esperamos<br />por você.</h2>
            <p>Rua Maria Ana de Oliveira, 55<br /><span>Antiga Rua 10 · Parque Continental<br />São Vicente · SP</span></p>
            <a
              className="button button-light"
              href="https://goo.gl/maps/NGJA7S7yVhdCdmvu7"
              target="_blank"
              rel="noreferrer"
            >
              <FiNavigation /> Abrir no Google Maps
            </a>
          </div>
          <div className="location-photo">
            <img src={churchImageTwo} alt="Fachada da igreja no Parque Continental" />
            <span><FiMapPin /> Parque Continental<br /><small>São Vicente, São Paulo</small></span>
          </div>
        </section>
      </main>

      {selectedDepartment && (
        <div className="department-modal" role="presentation" onMouseDown={() => setSelectedDepartment(null)}>
          <div
            className="department-modal-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="department-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setSelectedDepartment(null)} aria-label="Fechar conjunto">
              <FiX />
            </button>
            <div className="modal-photo">
              <img src={selectedDepartment.image} alt={`Conjunto do departamento ${selectedDepartment.name}`} />
            </div>
            <div className="modal-copy">
              <span>{selectedDepartment.fullName}</span>
              <h2 id="department-modal-title">{selectedDepartment.name}</h2>
              <div className="modal-divider" />
              <p>{selectedDepartment.description}</p>
              <small>Conjunto da OBPC · Parque Continental</small>
            </div>
          </div>
        </div>
      )}

      <footer className="site-footer">
        <div className="footer-brand">
          <img src={logo} alt="Logo OBPC" />
          <p>Igreja Evangélica Pentecostal<br />O Brasil Para Cristo</p>
        </div>
        <div className="footer-message"><span>Você é</span><strong>bem-vindo.</strong></div>
        <div className="footer-nav">
          {navItems.slice(0, 4).map(([label, id]) => <button key={id} onClick={() => navigate(id)}>{label}</button>)}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} OBPC Parque Continental</span>
          <span>Feito com fé em São Vicente · SP</span>
        </div>
      </footer>

      {scrolled && (
        <button className="back-to-top" onClick={() => navigate("inicio")} aria-label="Voltar ao topo"><FiChevronUp /></button>
      )}
    </div>
  );
}

export default App;

import React, { useEffect, useRef, useState } from "react";

import { ANILLAS_SRC, SECTION_BOTANY } from "./botanyAssets.js";

const sections = [
  {
    id: "inicio",
    label: "Inicio",
    eyebrow: "Del 13 al 15 de Noviembre, 2026",
    title: "Encuentro Micelio",
    text: "Un espacio cuidado para bajar el ritmo, compartir, descansar y reconectar con el cuerpo, la naturaleza y la palabra en grupo.",
    details: ["Creatividad", "Naturaleza", "Conexión"],
  },
  {
    id: "horarios",
    label: "Horarios",
    eyebrow: "Programa orientativo",
    title: "Ritmo del fin de semana",
    text: "Los horarios se pueden ajustar segun el pulso del grupo. La idea es sostener una estructura clara sin perder espacio para el descanso.",
    schedule: [
      {
        day: "Viernes",
        events: [
          { time: "17:00", title: "Llegada y bienvenida" },
          { time: "19:00", title: "Apertura del circulo" },
          { time: "21:00", title: "Cena compartida" },
        ],
      },
      {
        day: "Sabado",
        events: [
          { time: "08:00", title: "Yoga" },
          { time: "09:00", title: "Desayuno tranquilo" },
          { time: "11:00", title: "Taller TBD" },
          { time: "13:00", title: "Comida" },
          { time: "16:00", title: "Taller TBD" },
          { time: "18:00", title: "Merienda?" },
          { time: "18:30", title: "Taller TBD" },
          { time: "21:00", title: "Cena y fuego" },
        ],
      },
      {
        day: "Domingo",
        events: [
          { time: "08:00", title: "Yoga" },
          { time: "09:00", title: "Desayuno tranquilo" },
          { time: "10:00", title: "Taller TBD?" },
          { time: "12:00", title: "Cierre del círculo" },
          { time: "14:00", title: "Comida y despedida" },
        ],
      },
    ],
  },
  {
    id: "lugar",
    label: "Llegar",
    eyebrow: "Ubicacion",
    title: "Como llegar",
    text: "Aqui anadiremos la direccion exacta, el enlace al mapa, opciones de transporte publico y cualquier indicacion importante para llegar con calma.",
    items: [
      "Entrada recomendada: viernes entre 17:00 y 18:30.",
      "Si vienes en coche, confirma si hay plazas para aparcar.",
      "Coordinaremos coches compartidos cuando tengamos el grupo.",
    ],
    action: {
      label: "Abrir mapa de referencia",
      href: "https://maps.google.com",
    },
  },
  {
    id: "llevar",
    label: "Llevar",
    eyebrow: "Preparacion",
    title: "Que llevar",
    text: "Una lista base para venir comoda y preparada. La iremos ajustando con los detalles especificos del lugar y las actividades.",
    cards: [
      {
        title: "Descanso",
        text: "Ropa comoda, pijama, calcetines calentitos y neceser personal.",
      },
      {
        title: "Practica",
        text: "Esterilla, manta, cuaderno, boligrafo y botella de agua.",
      },
      {
        title: "Compartir",
        text: "Algo sencillo para la cena del viernes o un objeto significativo.",
      },
      {
        title: "Exterior",
        text: "Calzado comodo, abrigo, chubasquero y linterna si hace falta.",
      },
    ],
  },
  {
    id: "info",
    label: "Info",
    eyebrow: "Pendiente de anadir",
    title: "Mas informacion util",
    text: "Este espacio queda preparado para sumar comidas, alojamiento, acuerdos de convivencia, pagos, cancelaciones y recomendaciones previas al retiro.",
    items: [
      "Menus y necesidades alimentarias.",
      "Distribucion de habitaciones.",
      "Telefonos de emergencia.",
      "Recomendaciones para los dias previos.",
    ],
  },
  {
    id: "contacto",
    label: "Contacto",
    eyebrow: "Dudas o cambios",
    title: "Estamos cerca",
    text: "Escribe si tienes alguna pregunta, necesitas ajustar tu llegada o quieres compartir algo antes del encuentro.",
    action: { label: "Enviar email", href: "mailto:hola@example.com" },
    items: [
      "hola@example.com",
      "Tambien puedes escribir al grupo de WhatsApp.",
    ],
  },
];

function SectionBody({ section }) {
  if (section.schedule) {
    return (
      <div className="timeline" aria-label="Horarios del retiro">
        {section.schedule.map((day, dayIndex) => (
          <article className="timeline__day" key={`${day.day}-${dayIndex}`}>
            <h3>{day.day}</h3>
            <ul>
              {day.events.map((event) => (
                <li key={`${day.day}-${event.time}`}>
                  <span>{event.time}</span>
                  {event.title}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    );
  }

  if (section.cards) {
    return (
      <div className="mini-grid">
        {section.cards.map((card) => (
          <article className="mini-card" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    );
  }

  if (section.details) {
    return (
      <div className="detail-row" aria-label="Datos principales del retiro">
        {section.details.map((detail) => (
          <span key={detail}>{detail}</span>
        ))}
      </div>
    );
  }

  return (
    <ul className="simple-list">
      {section.items?.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function App() {
  const [activeSectionId, setActiveSectionId] = useState("inicio");
  const [transitionDirection, setTransitionDirection] = useState("from-top");
  const scrollLockRef = useRef(false);
  const touchStartYRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const activeSectionIndex = sections.findIndex(
    (section) => section.id === activeSectionId,
  );
  const activeSection = sections.find(
    (section) => section.id === activeSectionId,
  );

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  function lockScrollNavigation() {
    scrollLockRef.current = true;
    if (scrollTimeoutRef.current) {
      window.clearTimeout(scrollTimeoutRef.current);
    }
    scrollTimeoutRef.current = window.setTimeout(() => {
      scrollLockRef.current = false;
    }, 760);
  }

  function selectSectionByIndex(nextIndex) {
    if (nextIndex < 0 || nextIndex >= sections.length) return;
    if (nextIndex === activeSectionIndex) return;

    setTransitionDirection(
      nextIndex > activeSectionIndex ? "from-top" : "from-bottom",
    );
    setActiveSectionId(sections[nextIndex].id);
  }

  function selectSection(sectionId) {
    if (sectionId === activeSectionId) return;

    selectSectionByIndex(
      sections.findIndex((section) => section.id === sectionId),
    );
  }

  function handleWheel(event) {
    if (event.target.closest(".content-card")) return;
    if (Math.abs(event.deltaY) < 18 || scrollLockRef.current) return;

    const nextIndex = activeSectionIndex + (event.deltaY > 0 ? 1 : -1);
    if (nextIndex < 0 || nextIndex >= sections.length) return;

    event.preventDefault();
    lockScrollNavigation();
    selectSectionByIndex(nextIndex);
  }

  function handleTouchStart(event) {
    if (event.target.closest(".content-card")) {
      touchStartYRef.current = null;
      return;
    }

    touchStartYRef.current = event.touches[0]?.clientY ?? null;
  }

  function handleTouchEnd(event) {
    if (touchStartYRef.current === null || scrollLockRef.current) return;

    const touchEndY =
      event.changedTouches[0]?.clientY ?? touchStartYRef.current;
    const deltaY = touchStartYRef.current - touchEndY;
    touchStartYRef.current = null;

    if (Math.abs(deltaY) < 48) return;

    const nextIndex = activeSectionIndex + (deltaY > 0 ? 1 : -1);
    if (nextIndex < 0 || nextIndex >= sections.length) return;

    lockScrollNavigation();
    selectSectionByIndex(nextIndex);
  }

  return (
    <>
      <main
        className="page-shell"
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
        onWheel={handleWheel}
      >
        <div className="content-card__botany" aria-hidden="true">
          {Object.entries(SECTION_BOTANY).map(([sectionId, src]) => (
            <img
              alt=""
              className={
                activeSectionId === sectionId
                  ? `content-card__botany-img content-card__botany-img--${sectionId} content-card__botany-img--active content-card__botany-img--${transitionDirection}`
                  : `content-card__botany-img content-card__botany-img--${sectionId}`
              }
              decoding="async"
              fetchPriority={activeSectionId === sectionId ? "high" : "low"}
              key={src}
              loading="eager"
              src={src}
            />
          ))}
        </div>

        <aside className="side-panel" aria-label="Navegacion principal">
          <a
            className="brand"
            href="#inicio"
            onClick={(event) => {
              event.preventDefault();
              selectSection("inicio");
            }}
          >
            Encuentro Micelio
          </a>
          <nav className="orb-menu">
            {sections.map((section, index) => (
              <button
                className={
                  section.id === activeSection.id ? "orb is-active" : "orb"
                }
                key={section.id}
                onClick={() => selectSection(section.id)}
                style={{ "--i": index }}
                type="button"
              >
                <span className="orb__dot" />
                <span>{section.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        <div className="content-stack">
          <img
            alt=""
            aria-hidden="true"
            className="content-stack__anillas left"
            decoding="async"
            fetchPriority="high"
            loading="eager"
            src={ANILLAS_SRC}
          />
          <img
            alt=""
            aria-hidden="true"
            className="content-stack__anillas"
            decoding="async"
            fetchPriority="high"
            loading="eager"
            src={ANILLAS_SRC}
          />
          <img
            alt=""
            aria-hidden="true"
            className="content-stack__anillas right"
            decoding="async"
            fetchPriority="high"
            loading="eager"
            src={ANILLAS_SRC}
          />
          <section className="content-card" aria-live="polite">
            <div className="content-card__viewport">
              <div className="content-card__title">
                <p className="eyebrow">{activeSection.eyebrow}</p>
                <h1>{activeSection.title}</h1>
                <p className="lead">{activeSection.text}</p>
                {activeSection.action ? (
                  <a
                    className="text-link"
                    href={activeSection.action.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {activeSection.action.label}
                  </a>
                ) : null}
              </div>

              <div className="content-card__scroll">
                <div className="content-card__details">
                  <SectionBody section={activeSection} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

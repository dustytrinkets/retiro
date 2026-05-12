import React, { useState } from "react";

import {
  ANILLAS_SRC,
  BASE_PLANTS_SRC,
  BOTANY_SRCS,
  SECTION_BOTANY,
} from "./botanyAssets.js";

const sections = [
  {
    id: "inicio",
    label: "Inicio",
    eyebrow: "Fin de semana de encuentro",
    title: "Retiro de circulo de mujeres",
    text: "Un espacio cuidado para bajar el ritmo, compartir, descansar y reconectar con el cuerpo, la naturaleza y la palabra en grupo.",
    details: [
      "Viernes a domingo",
      "Casa rural por confirmar",
      "Plazas limitadas",
    ],
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
          { time: "09:00", title: "Desayuno tranquilo" },
          { time: "11:00", title: "Practica corporal" },
          { time: "17:00", title: "Taller y tiempo personal" },
          { time: "20:30", title: "Cena y fuego" },
        ],
      },
      {
        day: "Domingo",
        events: [
          { time: "09:30", title: "Desayuno" },
          { time: "11:00", title: "Circulo de cierre" },
          { time: "14:00", title: "Comida ligera y despedida" },
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
        {section.schedule.map((day) => (
          <article className="timeline__day" key={day.day}>
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
  const activeSection = sections.find(
    (section) => section.id === activeSectionId,
  );
  const botanySrc = SECTION_BOTANY[activeSectionId] ?? SECTION_BOTANY.inicio;

  return (
    <>
      <main className="page-shell">
        <div className="ambient ambient--two" />

        <aside className="side-panel" aria-label="Navegacion principal">
          <a
            className="brand"
            href="#inicio"
            onClick={(event) => event.preventDefault()}
          >
            Circulo de mujeres
          </a>
          <nav className="orb-menu">
            {sections.map((section, index) => (
              <button
                className={
                  section.id === activeSection.id ? "orb is-active" : "orb"
                }
                key={section.id}
                onClick={() => setActiveSectionId(section.id)}
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
            className="content-stack__anillas"
            decoding="async"
            fetchPriority="high"
            loading="eager"
            src={ANILLAS_SRC}
          />
          <section className="content-card" aria-live="polite">
            <div className="content-card__botany" aria-hidden="true">
              {BOTANY_SRCS.map((src) => (
                <img
                  alt=""
                  className={
                    botanySrc === src
                      ? "content-card__botany-img content-card__botany-img--active"
                      : "content-card__botany-img"
                  }
                  decoding="async"
                  fetchPriority={botanySrc === src ? "high" : "low"}
                  key={src}
                  loading="eager"
                  src={src}
                />
              ))}
            </div>
            <div className="content-card__copy">
              <p className="eyebrow">{activeSection.eyebrow}</p>
              <h1>{activeSection.title}</h1>
              <div
                className={`section-visual section-visual--${activeSection.id}`}
                aria-hidden="true"
              />
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

            <div className="content-card__details">
              <SectionBody section={activeSection} />
            </div>
          </section>
        </div>
      </main>
      <img
        alt=""
        aria-hidden="true"
        className="page-base-plants page-base-plants--tl"
        decoding="async"
        fetchPriority="low"
        loading="eager"
        src={BASE_PLANTS_SRC}
      />
      <img
        alt=""
        aria-hidden="true"
        className="page-base-plants page-base-plants--br"
        decoding="async"
        fetchPriority="high"
        loading="eager"
        src={BASE_PLANTS_SRC}
      />
    </>
  );
}

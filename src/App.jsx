import React, { useEffect, useRef, useState } from "react";

import { ANILLAS_SRC, SECTION_BOTANY } from "./botanyAssets.js";
import { activities, sections } from "./content.js";

function SectionBody({ section, onActivitySelect }) {
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
                  {event.activity ? (
                    <button
                      className="activity-button"
                      onClick={() => onActivitySelect(event.activity)}
                      type="button"
                    >
                      {event.title}
                    </button>
                  ) : (
                    event.title
                  )}
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
  const [activeActivityId, setActiveActivityId] = useState(null);
  const scrollLockRef = useRef(false);
  const touchStartYRef = useRef(null);
  const scrollTimeoutRef = useRef(null);
  const activeSectionIndex = sections.findIndex(
    (section) => section.id === activeSectionId,
  );
  const activeSection = sections.find(
    (section) => section.id === activeSectionId,
  );
  const hasSectionBody = Boolean(
    activeSection.schedule ||
    activeSection.cards ||
    activeSection.details ||
    activeSection.items?.length,
  );
  const activeActivity = activeActivityId ? activities[activeActivityId] : null;

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!activeActivity) return undefined;

    function closeOnEscape(event) {
      if (event.key === "Escape") setActiveActivityId(null);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [activeActivity]);

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
            <h3>Encuentro Micelio</h3>Sin centro, con raíces
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
          <section
            className={
              hasSectionBody
                ? "content-card"
                : "content-card content-card--title-only"
            }
            aria-live="polite"
          >
            <div
              className={
                hasSectionBody
                  ? "content-card__viewport"
                  : "content-card__viewport content-card__viewport--title-only"
              }
            >
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

              {hasSectionBody ? (
                <div className="content-card__scroll">
                  <div className="content-card__details">
                    <SectionBody
                      section={activeSection}
                      onActivitySelect={setActiveActivityId}
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </section>
        </div>
      </main>
      {activeActivity ? (
        <div
          className="activity-modal-backdrop"
          onClick={() => setActiveActivityId(null)}
        >
          <section
            aria-labelledby="activity-modal-title"
            aria-modal="true"
            className="activity-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
          >
            <button
              aria-label="Cerrar información de la actividad"
              className="activity-modal__close"
              onClick={() => setActiveActivityId(null)}
              type="button"
            >
              Cerrar
            </button>
            <p className="eyebrow">Programa</p>
            <h2 id="activity-modal-title">{activeActivity.title}</h2>
            {activeActivity.subtitle ? (
              <p className="activity-modal__subtitle">
                {activeActivity.subtitle}
              </p>
            ) : null}
            {activeActivity.quote ? (
              <blockquote>
                <p>{activeActivity.quote}</p>
                <cite>{activeActivity.quoteSource}</cite>
              </blockquote>
            ) : null}
            <div className="activity-modal__copy">
              {activeActivity.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}

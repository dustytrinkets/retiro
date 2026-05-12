import React from "react";

const navLinks = [
  { href: "#horarios", label: "Horarios" },
  { href: "#lugar", label: "Como llegar" },
  { href: "#llevar", label: "Que llevar" },
  { href: "#contacto", label: "Contacto" },
];

const retreatDetails = [
  "Viernes a domingo",
  "Casa rural por confirmar",
  "Plazas limitadas",
];

const schedule = [
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
];

const packingItems = [
  {
    title: "Para descansar",
    text: "Ropa comoda, pijama, calcetines calentitos y neceser personal.",
  },
  {
    title: "Para las practicas",
    text: "Esterilla, manta, cuaderno, boligrafo y botella de agua.",
  },
  {
    title: "Para compartir",
    text: "Algo sencillo para la cena del viernes o un objeto significativo.",
  },
  {
    title: "Para exterior",
    text: "Calzado comodo, abrigo, chubasquero y linterna si hace falta.",
  },
];

const travelTips = [
  "Entrada recomendada: viernes entre 17:00 y 18:30.",
  "Si vienes en coche, confirma si hay plazas para aparcar.",
  "Coordinaremos coches compartidos cuando tengamos el grupo.",
];

function Header() {
  return (
    <header className="hero">
      <nav className="nav" aria-label="Navegacion principal">
        <a className="brand" href="#inicio">
          Circulo de Mujeres
        </a>
        <div className="nav__links">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="inicio" className="hero__content">
        <p className="eyebrow">Fin de semana de encuentro</p>
        <h1>Retiro de circulo de mujeres</h1>
        <p className="hero__text">
          Un espacio cuidado para bajar el ritmo, compartir, descansar y
          reconectar con el cuerpo, la naturaleza y la palabra en grupo.
        </p>
        <div className="hero__actions">
          <a className="button" href="#horarios">
            Ver horarios
          </a>
          <a className="button button--secondary" href="#contacto">
            Resolver dudas
          </a>
        </div>
        <div
          className="hero__details"
          aria-label="Datos principales del retiro"
        >
          {retreatDetails.map((detail) => (
            <span key={detail}>{detail}</span>
          ))}
        </div>
      </section>
    </header>
  );
}

function Intro() {
  return (
    <section className="section section--intro">
      <div>
        <p className="eyebrow">Sobre el encuentro</p>
        <h2>Un fin de semana para escucharnos</h2>
      </div>
      <p>
        Esta pagina reunira toda la informacion practica del retiro: horarios,
        ubicacion, recomendaciones, lista de cosas que llevar y cualquier
        detalle que vayamos sumando antes del evento.
      </p>
    </section>
  );
}

function Schedule() {
  return (
    <section id="horarios" className="section">
      <div className="section__heading">
        <p className="eyebrow">Programa orientativo</p>
        <h2>Horarios</h2>
        <p>
          Los horarios se pueden ajustar segun el ritmo del grupo y las
          necesidades del fin de semana.
        </p>
      </div>

      <div className="schedule">
        {schedule.map((day) => (
          <article className="day-card" key={day.day}>
            <h3>{day.day}</h3>
            <ul>
              {day.events.map((event) => (
                <li key={`${day.day}-${event.time}`}>
                  <strong>{event.time}</strong> {event.title}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Location() {
  return (
    <section id="lugar" className="section split">
      <div>
        <p className="eyebrow">Ubicacion</p>
        <h2>Como llegar</h2>
        <p>
          Anade aqui la direccion exacta, enlace a Google Maps, opciones de
          transporte publico y cualquier indicacion importante para llegar.
        </p>
        <a
          className="text-link"
          href="https://maps.google.com"
          target="_blank"
          rel="noreferrer"
        >
          Abrir mapa de referencia
        </a>
      </div>
      <div className="info-panel">
        <h3>Informacion util</h3>
        <ul>
          {travelTips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PackingList() {
  return (
    <section id="llevar" className="section">
      <div className="section__heading">
        <p className="eyebrow">Preparacion</p>
        <h2>Que llevar</h2>
        <p>
          Una lista base para venir comoda y preparada. Puedes ampliarla con
          detalles especificos del lugar o de las actividades.
        </p>
      </div>

      <div className="packing-grid">
        {packingItems.map((item) => (
          <article key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function MoreInfo() {
  return (
    <section className="section split section--soft">
      <div>
        <p className="eyebrow">Pendiente de anadir</p>
        <h2>Mas informacion util</h2>
        <p>
          Este bloque esta preparado para sumar detalles sobre comidas,
          alojamiento, acuerdos de convivencia, pagos, cancelaciones o cualquier
          otra informacion que el grupo necesite tener a mano.
        </p>
      </div>
      <div className="note-card">
        <h3>Proximamente</h3>
        <p>
          Menus, distribucion de habitaciones, telefonos de emergencia y
          recomendaciones previas al retiro.
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div>
        <p className="eyebrow">Contacto</p>
        <h2>Dudas o cambios</h2>
        <p>
          Escribe a <a href="mailto:hola@example.com">hola@example.com</a> o
          envia un mensaje al grupo de WhatsApp para cualquier pregunta.
        </p>
      </div>
      <a className="button" href="mailto:hola@example.com">
        Enviar email
      </a>
    </footer>
  );
}

export function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Schedule />
        <Location />
        <PackingList />
        <MoreInfo />
      </main>
      <Footer />
    </>
  );
}

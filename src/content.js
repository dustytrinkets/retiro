export const sections = [
  {
    id: "inicio",
    label: "Inicio",
    eyebrow: "Del 13 al 15 de Noviembre, 2026",
    title: "Encuentro Micelio",
    text: "Un lugar preparado para bajar el ritmo, compartir, descansar y reconectar con el cuerpo, la naturaleza y la palabra en grupo.",
    details: ["Creatividad", "Naturaleza", "Conexión"],
  },
  {
    id: "horarios",
    label: "Horarios",
    eyebrow: "Programa de actividades",
    title: "Ritmo del encuentro",
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
          { time: "11:00", title: "Taller TBD?" },
          { time: "13:00", title: "Cierre del círculo" },
          { time: "14:00", title: "Comida y despedida" },
        ],
      },
    ],
  },
  {
    id: "lugar",
    label: "Ubicacion",
    eyebrow: "Ubicacion",
    title: "Como llegar",
    text: "Aqui anadiremos la direccion exacta, el enlace al mapa, opciones de transporte publico y cualquier indicacion importante para llegar con calma.",
    items: [
      "Entrada recomendada: viernes entre 17:00 y 18:30.",
      "Si vienes en coche, confirma si hay plazas para aparcar.",
      "Coordinaremos coches compartidos cuando tengamos el grupo.",
    ],
    action: {
      label: "Casa Guindales. Valle del Genal",
      href: "https://maps.google.com",
    },
  },
  {
    id: "llevar",
    label: "Preparacion",
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

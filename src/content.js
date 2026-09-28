export const sections = [
  {
    id: "inicio",
    label: "Inicio",
    eyebrow: "Del 13 al 15 de Noviembre de 2026",
    title: "Encuentro Micelio",
    text: "Aquí tu presencia no es opcional, es lo que hace que esto sea posible. No existen jerarquías, todas las partes son imprescindibles y cada hilo aporta poder a la red. Tejamos juntas la red del Micelio",
  },
  {
    id: "horarios",
    label: "Programa",
    eyebrow: "Programa de actividades",
    title: "Ritmo del encuentro",
    text: "Los horarios se ajustarán al pulso del grupo, dejando espacio a la improvisación.",
    schedule: [
      {
        day: "Viernes",
        events: [
          { time: "17:00", title: "Llegada & bienvenida" },
          { time: "20:00", title: "Cena" },
          {
            time: "21:00",
            title: "Apertura del encuentro & yoga sensorial",
            activity: "yoga-sensorial",
          },
        ],
      },
      {
        day: "Sabado",
        events: [
          { time: "08:30", title: "Desayuno" },
          {
            time: "09:30",
            title: "Baño de bosque de otoño",
            activity: "bano-otono",
          },
          { time: "11:30", title: "Ayurveda", activity: "ayurveda" },
          { time: "13:30", title: "Almuerzo" },
          { time: "16:30", title: "Manos de Tierra", activity: "arcilla" },
          {
            time: "18:30",
            title: "El tiempo inventado",
            activity: "tiempo-inventado",
          },
          { time: "20:30", title: "Cena" },
          { time: "21:30", title: "Ritual & Oráculo" },
        ],
      },
      {
        day: "Domingo",
        events: [
          {
            time: "08:00",
            title: "Yoga Anahata Chakra",
            activity: "yoga-anahata",
          },
          { time: "09:30", title: "Desayuno" },
          {
            time: "10:30",
            title: "Geometría sagrada",
            activity: "acuarela",
          },
          { time: "12:30", title: "Cierre del encuentro" },
          { time: "13:30", title: "Almuerzo y despedida" },
        ],
      },
    ],
  },
  {
    id: "lugar",
    label: "Ubicacion",
    eyebrow: "Ubicacion",
    title: "Como llegar",
    text: "Aqui puedes encontrar la dirección exacta de Casa Guindales y el enlace al mapa.",
    items: [
      "Entrada recomendada: viernes entre las 18h y las 20h.",
      "Coordinaremos coches compartidos a través del grupo de whatsapp.",
    ],
    action: {
      label: "Casa Guindales. Valle del Genal",
      href: "https://maps.app.goo.gl/whtmJ1EguQWQ8Ken9",
    },
    mapEmbedUrl:
      "https://maps.google.com/maps?q=36.56709018080512,-5.280713524052228&t=k&z=16&output=embed",
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
];

export const activities = {
  ayurveda: {
    title: "Ayurveda",
    description: [
      "Marta nos abrirá la puerta a esta medicina ancestral desde su propia experiencia, compartiendo el camino que la llevó hasta ella y los cambios que ha incorporado a su vida.",
      "Juntas exploraremos prácticas y consejos fáciles de llevar al día a día para cuidar nuestro cuerpo, escuchar nuestras necesidades y vivir en sintonía con los ritmos naturales.",
    ],
  },
  arcilla: {
    title: "Manos de Tierra: El Camino de la Arcilla",
    description: [
      "De la mano de Camila regresamos a lo más primario: tus manos y la tierra. En este espacio sagrado, trabajaremos con arcilla de secado al aire, ese material vivo que nos devuelve a un gesto que casi hemos olvidado en nuestro día a día.",
      "Aquí no importa el resultado, importa el proceso: cada apretón, cada textura, cada imperfección es parte del camino. Practicaremos el desapego, soltando la necesidad de controlar cómo quedará la pieza final, confiando en que lo que emerja de nuestras manos es exactamente lo que tenía que ser.",
      "Usando hojas como molde, capturaremos la naturaleza en la propia tierra, creando una pieza que llevaremos a casa como recuerdo tangible de este encuentro. Y, sobre todo, nos permitiremos agradecer algo tan sencillo y esencial como tener unas manos capaces de tocar, sentir, transformar y crear.",
      "No necesitas experiencia previa, solo tus manos y la disposición a soltar.",
    ],
  },
  acuarela: {
    title: "Geometría Sagrada en Acuarela: Trazo, Calma y Conexión",
    description: [
      "Waladah nos invita a un viaje al centro de la calma a través del trazo y el color. En este espacio sagrado, nos uniremos como la tribu que somos para explorar los principios de la geometría andalusí, esa que adorna nuestro legado histórico y que es reflejo del orden del universo.",
      "Con la guía de la regla y el compás, dibujaremos un patrón tradicional paso a paso, dejando que la mente se silencie y el alma se exprese. Coronaremos la experiencia fluyendo con el agua y los pigmentos de la acuarela.",
      "No necesitas experiencia previa, solo tu presencia y tus ganas de cocrear.",
    ],
  },
  "bano-otono": {
    title: "Baño de otoño",
    description: ["Texto a definir."],
  },
  "tiempo-inventado": {
    title: "El tiempo inventado",
    subtitle: "Un taller sobre el vicio solitario de la escritura",
    quote:
      "¡Qué raro es el tiempo de la escritura! Ese sí que manda y se impone como dueño absoluto. Sobre todo cuando ya dábamos por cancelados sus efluvios y vuelve a irrumpir tras una larga ausencia, dispuesto a arrebatarnos en su borrachera y poner patas arriba toda la apariencia de simultaneidad, vendaval tiránico que nos alza en volandas y nos zarandea para llevarnos donde se le antoja.",
    quoteSource: "Nubosidad Variable, de Carmen Martín Gaite",
    description: [
      "A través de los recuerdos de una amiga imaginaria, viajaremos en el tiempo a los momentos clave que compartimos con ella durante nuestra infancia y adolescencia. Intentaremos rescatar de ellos algún resquicio de verdad que dé sentido al motivo de nuestro posterior distanciamiento.",
      "Han pasado los años, más de 20 sin verla, y hoy, tras un reencuentro fugaz, sentiremos la necesidad de escribirle una carta. Usaremos el género epistolar como canalización de emociones, como vía de confesión, o como el simple vicio solitario que es.",
      'Y es que, como dice Martín Gaite, "la cuestión es pasar el rato, con tal de que aproveche, claro, de que se le consiga tomar gusto a ese pasar inevitable".',
    ],
  },
  "yoga-anahata": {
    title: "Yoga: Anahata Chakra",
    description: [
      "María y Paula nos guiarán en un viaje hacia Anahata, el chakra del corazón, como símbolo del amor en todas sus formas: hacia nosotras mismas, hacia las demás y hacia la vida.",
      "Crearemos un espacio para soltar, sentir y conectar, dejando que el cuerpo nos recuerde que también podemos habitar el corazón con suavidad y presencia.",
    ],
  },
  "yoga-sensorial": {
    title: "Yoga sensorial",
    description: [
      "Tras la cena, una práctica de yoga inmersiva donde vista, oído, tacto, olfato y gusto serán los protagonistas en una experiencia totalmente sensorial, acompañadas de la magia y energía de la noche en el bosque sagrado de Casa Guindales.",
    ],
  },
};

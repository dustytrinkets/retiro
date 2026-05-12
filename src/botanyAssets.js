/** Sobre la tarjeta de contenido (misma columna) */
export const ANILLAS_SRC = "/plants/anillas.png";

/** Decoracion fija esquina inferior derecha de la tarjeta (no cambia con la seccion) */
export const BASE_PLANTS_SRC = "/plants/baseplants.png";

/** PNG por seccion (public/plants/). Fuente editable: scripts/botanical-svg/*.svg */
export const SECTION_BOTANY = {
  contacto: "/plants/contacto.png",
  horarios: "/plants/horarios.png",
  info: "/plants/info.png",
  inicio: "/plants/inicio.png",
  llevar: "/plants/llevar.png",
  lugar: "/plants/lugar.png",
};

/** Lista estable para montar / precargar todas las ilustraciones a la vez */
export const BOTANY_SRCS = [...new Set(Object.values(SECTION_BOTANY))].sort();

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

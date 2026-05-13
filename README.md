# Landing Encuentro Micelio

Landing page en React para centralizar la informacion de un retiro de fin de semana.

## Archivos

- `src/App.jsx`: contenido y componentes de la pagina.
- `src/styles.css`: estilos responsive.
- `index.html`: entrada HTML de Vite.

## Como verla en local

Instala dependencias:

```bash
npm install
```

Arranca el entorno de desarrollo:

```bash
npm run dev
```

Despues abre la URL que indique Vite, normalmente `http://localhost:5173`.

## Como editarla

Los textos principales estan en `src/App.jsx`. Puedes cambiar:

- Fechas y lugar en el bloque inicial.
- Horarios en el array `schedule`.
- Direccion y mapa en la seccion `Como llegar`.
- Lista de cosas que llevar en el array `packingItems`.
- Email y contacto en el pie de pagina.

## Build de produccion

```bash
npm run build
```

El resultado se genera en la carpeta `dist`.

## Despliegue gratuito recomendado

### Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. Entra en `https://vercel.com/new`.
3. Importa el repositorio.
4. Vercel detectara Vite automaticamente y desplegara la web.

### Netlify

1. Sube esta carpeta a un repositorio de GitHub.
2. Entra en `https://app.netlify.com/start`.
3. Importa el repositorio.
4. Usa `npm run build` como build command y `dist` como publish directory.

### GitHub Pages

Para GitHub Pages conviene anadir una accion de despliegue de Vite. Vercel o Netlify son mas directos para este proyecto.

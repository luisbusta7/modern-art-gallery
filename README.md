# Modern Art Gallery

Maquetación responsive de un sitio web multipágina para una galería de arte moderno, desarrollada a partir de un diseño de Figma.

El proyecto incluye una página principal y una página de localización. La implementación prioriza la fidelidad visual, la semántica HTML, la accesibilidad básica y una arquitectura Sass mantenible.

## Enlaces

- Repositorio: `https://github.com/luisbusta7/modern-art-gallery.git`
- Sitio publicado: `https://luisbusta7.github.io/modern-art-gallery/`

> Sustituye `TU_USUARIO` por el nombre de usuario de GitHub cuando se cree el repositorio.

## Tecnologías

- HTML5 semántico
- Sass con parciales y metodología BEM
- CSS Grid y Flexbox
- Vite como herramienta de desarrollo y compilación
- GitHub Pages para la publicación

## Características

- Desarrollo mobile first.
- Breakpoints para tablet (`768px`) y escritorio (`1200px`).
- Proyecto multipágina: inicio y localización.
- Imágenes responsive con dimensiones declaradas y textos alternativos.
- Iconos SVG para la flecha y las redes sociales.
- Estados `hover` y `focus-visible` en los elementos interactivos.
- Variables, mixins y propiedades personalizadas para centralizar colores, tipografía, transiciones y breakpoints.
- Rutas relativas preparadas para GitHub Pages.

## Estructura

```text
.
├── img/                 # Imágenes e iconos utilizados
├── sass/
│   ├── abstracts/       # Variables y mixins
│   ├── base/            # Reset y tipografía global
│   ├── components/      # Botones y hero
│   ├── layout/          # Contenedor y footer
│   ├── pages/           # Estilos específicos de cada página
│   ├── themes/          # Propiedades personalizadas del tema
│   └── styles.scss      # Punto de entrada de Sass
├── src/
│   └── main.js          # Entrada de Vite
├── index.html           # Página principal
├── location.html        # Página de localización
├── package.json
└── vite.config.js
```

## Instalación y desarrollo

Es necesario tener instalado Node.js y npm.

```bash
npm install
npm run dev
```

Vite mostrará en la terminal la dirección local del proyecto.

## Scripts

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Genera la versión de producción en dist/
npm run preview  # Previsualiza localmente la versión compilada
npm run deploy   # Compila y publica dist/ en la rama gh-pages
```

## Páginas

- `index.html`: presentación de la galería y enlace a su localización.
- `location.html`: mapa, dirección e información de visita.

## Autor

Proyecto realizado como tarea de maquetación responsive con HTML y CSS/Sass.

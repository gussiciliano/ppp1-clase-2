# AGENTS.md

Guía de trabajo para agentes en este repositorio.

## Contexto del proyecto

- Landing institucional de **Prácticas Pre Profesionales 1 (PPP1)** de la **Licenciatura en Programación** de la **Universidad Nacional de Lanús (UNLa)**.
- Es una landing **estilo negocio** que sirve como ejemplo didáctico para estudiantes que están por obtener su título intermedio.
- Stack actual: HTML/CSS/JS vanilla. **Objetivo pendiente: migrar a Next.js (App Router) para mejorar el SEO**.
- Paleta institucional oficial UNLa (granate y blanco). Ver skill `guia-estilos-unla`.

## Reglas de frontend para buen SEO

Estas reglas son obligatorias en todo cambio que toque markup, metadata o renderizado.

### Semántica y estructura

- Usar elementos semánticos (`header`, `nav`, `main`, `section`, `article`, `footer`) con landmarks correctos.
- **Un solo `<h1>` por página**, que describa el contenido principal. Jerarquía estricta: no saltar de `h2` a `h4`.
- Los encabezados deben ser descriptivos y contener palabras clave naturales (nada de "Haz clic acá" en h1/h2).
- Usar `<section>` con encabezados; si una sección es meramente decorativa, no poner `<h>`.
- Los botones de acción deben ser `<a>` si navegan, `<button>` si ejecutan una acción. Los enlaces tienen `href` real.

### Metadata

- Cada página debe tener `title` único (< 60 caracteres) y `meta description` única y accionable (< 160 caracteres).
- Idioma declarado con `lang="es"` y `meta charset`, `viewport` siempre presentes.
- Open Graph (`og:title`, `og:description`, `og:type`, `og:image`, `og:url`, `og:locale=es_AR`) y Twitter Card en páginas públicas.
- `link rel="canonical"` apuntando a la URL canónica, sin parámetros de tracking.
- Favicon y (si corresponde) `apple-touch-icon`.
- En Next.js usar `next/head` o la `metadata` export de App Router (no duplicar tags).

### Contenido crawlable

- El contenido crítico debe estar en el HTML inicial (SSR/SSG). No depender de JavaScript para mostrar texto importante.
- Los anchors de navegación interna (`#seccion`) conviven con contenido estático; si una página es SPA-like, proveer fallback SSR.
- `robots.txt` y `sitemap.xml` generados en el build (Next: `app/sitemap.ts`, `app/robots.ts`).

### Imágenes y recursos

- Toda imagen relevante lleva `alt` descriptivo (vacío `alt=""` solo si es decorativa).
- Especificar `width`/`height` para evitar CLS; usar `loading="lazy"` fuera del LCP.
- Formato moderno (AVIF/WebP) vía `next/image` cuando se migre a Next.
- `preload` solo para recursos críticos del LCP; `preconnect` para orígenes de terceros necesarios.

### Rendimiento (Core Web Vitals)

- LCP, INP y CLS dentro de rangos buenos. No agregar librerías CSS/JS pesadas sin necesidad.
- CSS crítico inline o bloqueante mínimo; el resto diferido/cargado con `next/font` y `next/image`.
- Sin dependencias de animación que bloqueen el primer render; respetar `prefers-reduced-motion`.

### Enlaces y URLs

- URLs limpias, legibles y en minúsculas (con guiones, sin parámetros innecesarios).
- Enlaces internos con texto ancla descriptivo (no "acá" ni "click").
- Enlaces externos con `rel="noopener noreferrer"` cuando usen `target="_blank"`.

### Datos estructurados

- Usar JSON-LD cuando aporte valor: `Organization`, `Course`, `FAQPage` (si el FAQ es real).
- No inventar datos estructurados falsos ni duplicar metadata.

## Flujo de trabajo

- Antes de tocar HTML/JSX: revisar la metadata actual y actualizarla si cambia el contenido.
- No romper la jerarquía de encabezados ni eliminar tags semánticos existentes sin motivo.
- Después de cambios de estructura, verificar que el HTML resultante siga siendo válido y crawlable.
- Verificar con build/lint del stack vigente. En vanilla: abrir el HTML en navegador. En Next: `npm run lint && npm run build`.

## Skills disponibles

- `ux-ui`: buenas prácticas de UX/UI y accesibilidad.
- `seguridad-web`: buenas prácticas de seguridad frontend.
- `guia-estilos-unla`: guía de estilos fluidos con la paleta oficial UNLa.
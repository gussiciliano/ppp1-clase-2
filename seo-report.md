# Auditoría de SEO — PPP1 Landing (Prácticas Pre Profesionales 1 · UNLa)

- **Fecha:** 2026-08-20
- **Stack:** HTML/CSS/JS vanilla (sin Next.js aún). Objetivo pendiente: migrar a Next.js App Router.
- **Páginas públicas:** 1 (`index.html`)
- **Alcance:** metadata, semántica, imágenes, enlaces, datos estructurados, rendimiento y archivos técnicos.

---

## 1. Resumen ejecutivo

**Nota general: 5.5 / 10**

| | Cantidad |
|---|---|
| ✅ OK | 14 |
| ⚠️ Advertencia | 6 |
| ❌ Error | 8 |

La base es sólida: semántica correcta (un solo `h1`, jerarquía sin saltos, landmarks claros), `lang="es"`, `title` y `meta description` dentro de los límites, textos ancla descriptivos y cero dependencias externas bloqueantes. **El problema no es lo que hay, sino lo que falta**: no existe ninguna metadata social (Open Graph/Twitter), ni `canonical`, ni `robots.txt`, ni `sitemap.xml`, ni favicon, ni datos estructurados — todo lo que Google y las redes sociales necesitan para indexar y compartir bien esta landing. Además hay riesgo de CLS en el logo y de contenido invisible sin JS por las animaciones `reveal`.

---

## 2. Tabla de resultados

### Metadata

| Estado | Regla | Detalle | Ubicación |
|---|---|---|---|
| ✅ OK | `lang="es"` | Idioma declarado correctamente | `index.html:2` |
| ✅ OK | `meta charset` | `UTF-8` presente | `index.html:4` |
| ✅ OK | `viewport` | Configuración responsive correcta | `index.html:5` |
| ✅ OK | `title` único y < 60 | 43 caracteres: "PPP1 · Prácticas Pre Profesionales 1 - UNLa" | `index.html:7` |
| ⚠️ Advertencia | `title` con keywords | No menciona "Licenciatura en Programación" (keyword principal de la carrera). Considerar: "PPP1 · Prácticas Pre Profesionales · Lic. en Programación UNLa" | `index.html:7` |
| ✅ OK | `meta description` < 160 y accionable | 120 caracteres, describe el beneficio | `index.html:6` |
| ❌ Error | Open Graph completo | Faltan `og:title`, `og:description`, `og:type`, `og:image`, `og:url`, `og:locale=es_AR`. Compartir la URL en redes muestra tarjeta genérica | `index.html:4-9` (head) |
| ❌ Error | Twitter Card | No existe `twitter:card` ni complementarios | `index.html:4-9` (head) |
| ❌ Error | `link rel="canonical"` | No hay canonical; sin él, parámetros/duplicados pueden dividir autoridad | `index.html:8` |
| ❌ Error | Favicon | No hay `<link rel="icon">` ni archivo `.ico/.png`/SVG en el repo | `index.html:9` |
| ❌ Error | `apple-touch-icon` | No existe | `index.html:9` |

### Semántica y jerarquía

| Estado | Regla | Detalle | Ubicación |
|---|---|---|---|
| ✅ OK | Un solo `<h1>` | "El salto de estudiante a profesional empieza acá" — descriptivo y con keywords | `index.html:39` |
| ✅ OK | Jerarquía sin saltos | `h1→h2→h3` en main; `h4` solo en footer | `index.html:39-499` |
| ✅ OK | Landmarks | `header`, `nav`, `main`, `footer` y múltiples `section` con encabezado | `index.html:11,21,33,479` |
| ⚠️ Advertencia | `<section>` sin encabezado | `.numbers` es una `<section>` sin heading → landmark sin nombre. Mover a `<div>` o agregar `h2` con clase `sr-only` | `index.html:287` |
| ✅ OK | Botones correctos | `<a href="#...">` para navegación, `<button>` para acordeón/menú/envío | `index.html:13-472` |
| ✅ OK | Encabezados descriptivos | "Qué vas a desarrollar", "Datos y etapas de la cursada", etc. Sin "hacé clic acá" | `index.html:165,219` |

### Imágenes y recursos

| Estado | Regla | Detalle | Ubicación |
|---|---|---|---|
| ✅ OK | `alt` descriptivo | Logo con `alt="Universidad Nacional de Lanús"` | `index.html:14` |
| ⚠️ Advertencia | `width`/`height` | El logo (81×90px reales) no declara dimensiones → riesgo de CLS al cargar CSS | `index.html:14` |
| ⚠️ Advertencia | Formato de imagen | `logo.jpg` en JPG para un logo plano 81×90; ideal SVG/WebP (menor peso, nítido en retina) | `logo.jpg` |
| ✅ OK | `loading="lazy"` | N/A correctamente: la única imagen está en el header (zona LCP, no debe ser lazy) | — |

### Enlaces y URLs

| Estado | Regla | Detalle | Ubicación |
|---|---|---|---|
| ✅ OK | Texto ancla descriptivo | "La materia", "Comenzá ahora", "Ver el programa", "Inscribite y empezá", "Enviar consulta" | `index.html:22-502` |
| ✅ OK | `rel="noopener noreferrer"` | No hay `target="_blank"` → no aplica | — |
| ⚠️ Advertencia | Email como enlace | `ppp1@unla.edu.ar` es texto plano; un `mailto:` mejoraría la conversión (menor, no bloqueante de SEO) | `index.html:455` |

### Datos estructurados

| Estado | Regla | Detalle | Ubicación |
|---|---|---|---|
| ❌ Error | JSON-LD `Course` | El contenido describe un curso real de la Licenciatura → aplica `Course` | todo el documento |
| ❌ Error | JSON-LD `FAQPage` | Hay 5 preguntas frecuentes reales → `FAQPage` da rich results | `index.html:380-426` |
| ❌ Error | JSON-LD `Organization` | Marca/institución UNLa → aplica `Organization` | `index.html:11-16` |

### Rendimiento (Core Web Vitals)

| Estado | Regla | Detalle | Ubicación |
|---|---|---|---|
| ✅ OK | Sin JS/CSS pesados externos | Stack de fuentes del sistema, CSS local ~21KB, un solo script al final del body | `styles.css:19`, `index.html:512` |
| ✅ OK | CSS no bloqueante crítico | No hay fuentes externas ni `@import` de Google Fonts | `styles.css:1-20` |
| ✅ OK | `prefers-reduced-motion` | Animaciones y smooth scroll desactivados | `styles.css:1277-1286` |
| ⚠️ Advertencia | Contenido invisible sin JS | `.reveal` arranca en `opacity: 0` y solo aparece vía IntersectionObserver; sin JS o ante fallo, secciones quedan ocultas para el usuario | `styles.css:1140-1149` |
| ⚠️ Advertencia | LCP/INP | El `h1` del hero es texto HTML (bien). Sin bloqueantes grandes. El riesgo principal de LCP es el logo sin dimensiones | `index.html:35-90` |

### Archivos técnicos

| Estado | Regla | Detalle | Ubicación |
|---|---|---|---|
| ❌ Error | `robots.txt` | No existe. Sin él, no se puede controlar el rastreo ni apuntar al sitemap | raíz del proyecto |
| ❌ Error | `sitemap.xml` | No existe. No hay mapa de URLs para indexar | raíz del proyecto |
| ✅ OK | Next.js | N/A — stack vanilla. En la migración usar `metadata` export de App Router, `app/sitemap.ts` y `app/robots.ts` | — |

---

## 3. Top de prioridades (corregir en este orden)

1. **Metadata social + canonical (errores críticos de visibilidad).** Agregar en el `<head>`: `og:title`, `og:description`, `og:type`, `og:url`, `og:locale=es_AR`, `twitter:card`, `link rel="canonical"`. Crear una imagen social de 1200×630px (reutilizable como `og:image` y `twitter:image`).
2. **Datos estructurados JSON-LD.** Un bloque con `Course` (nombre, institución, proveedor) + `FAQPage` (las 5 preguntas de `index.html:380-426`) + `Organization` (UNLa). Habilitan rich results y mejoran el CTR.
3. **Archivos técnicos `robots.txt` y `sitemap.xml`.** Crear ambos apuntando a la URL canónica de producción (ej. `https://ppp1.unla.edu.ar/`). Sin dominio definido todavía → definir URL canónica real.
4. **Favicon + `apple-touch-icon`.** Exportar el logo a SVG (recomendado) o PNG 180×180 y declararlos en el `<head>`; elimina el 404 de favicon y mejora la presentación en pestañas/móvil.
5. **CLS y no-JS (Core Web Vitals).** Declarar `width="81" height="90"` (o los del SVG) en el logo y agregar un fallback sin JS para `.reveal` (p. ej. clase `no-js` en `<html>` que fuerce `opacity: 1`), para que el contenido nunca quede oculto.

**Estratégico:** la migración a Next.js App Router (objetivo del repo) resuelve de raíz canonical/sitemap/robots (`app/sitemap.ts`, `app/robots.ts`), `next/image` (formato y CLS), `next/font` y la `metadata` export. Hacerla antes de crecer en páginas.

---

## 4. Notas complementarias (fuera de alcance estricto de SEO, detectadas en el escaneo)

- **Formulario:** la validación es solo cliente (`script.js:48-74`) y el form no tiene `action` ni backend. Según la skill `seguridad-web`, toda validación de cliente debe re-validarse en servidor; además el mensaje de éxito actualmente es falso (no envía nada). Es un demo didáctico, pero conviene aclararlo o conectarlo a un endpoint real.
- **Contraste:** texto `#b69197` sobre granate oscuro (`.hero__stat span`, `index.html:60`) está por debajo de AA 4.5:1. Revisar con la skill `ux-ui`.
- **`aria-expanded` en FAQ:** el acordeón usa `<button>` con `aria-expanded` correcto, pero el panel de respuesta no usa `aria-controls`/`aria-hidden` ni `role="region"`. Mejora accesible, no bloqueante de SEO.

---

*Reporte generado en modo solo lectura. No se modificó ningún archivo de código.*

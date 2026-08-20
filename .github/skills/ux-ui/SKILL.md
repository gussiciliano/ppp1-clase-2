---
name: ux-ui
description: Usá esta skill cuando trabajes en experiencia de usuario (UX), interfaz (UI), accesibilidad o diseño visual de pantallas, componentes o landings. Cubre jerarquía visual, contraste, accesibilidad WCAG, mobile-first, formularios y microinteracciones.
---

# Buenas prácticas de UX/UI y accesibilidad

Reglas para que las pantallas sean claras, usables y accesibles. Aplicar junto con la skill `guia-estilos-unla` para mantener la identidad visual.

## Jerarquía visual

- Un solo mensaje principal por pantalla. El `h1` comunica la propuesta de valor; los `h2` organizan las secciones.
- El contenido más importante debe estar arriba y ser el que más contraste y tamaño tenga.
- No saturar: máximo 3 fuentes de interés por sección, espacio en blanco generoso.
- Usar tamaño, peso y color para jerarquizar, no solo color (accesibilidad).

## Contraste y legibilidad

- Cumplir WCAG AA: contraste de al menos **4.5:1** para texto normal y **3:1** para texto grande (≥24px o ≥18.66px bold) y elementos de UI.
- Texto sobre granate oscuro: usar blanco o tonos rosados claros (`#f2c6cd`). Nunca granate sobre granate.
- Texto sobre blanco: usar granate oscuro (`#580d26`) o tinta (`#2a050b`), no el granate `#7c1331` para párrafos largos.
- Línea de texto entre 45 y 75 caracteres; `line-height` ≥ 1.5 para cuerpo.

## Accesibilidad (WCAG)

- Landmarks semánticos: `header`, `nav`, `main`, `footer`. Un solo `<main>`.
- **Un solo `<h1>`** y jerarquía sin saltos (`h1`→`h2`→`h3`).
- Imágenes relevantes con `alt` descriptivo; decorativas con `alt=""`.
- Formularios: cada campo con `<label>` asociado explícitamente.
- **Foco visible**: nunca eliminar `outline` sin reemplazarlo por un anillo de foco claro.
- Navegación completa por teclado (Tab, Enter, Escape) y `skip-link` al contenido.
- Elementos interactivos: usar `<a>` (navegan) o `<button>` (accionan); nunca `<div>` clickeables sin rol y teclado.
- ARIA solo cuando el HTML nativo no alcanza. No abusar de `role`, ni anidar landmarks.
- Texto de enlaces descriptivo ("Ver cronograma", no "hacé clic acá").
- Idioma: `lang="es"` en `<html>`.

## Responsive y mobile-first

- Diseñar primero para móvil, después agrandar. Probar en 360px, 768px, 1024px y 1440px.
- Áreas táctiles de al menos **44×44px**; espaciado entre elementos interactivos ≥ 8px.
- Nada clave oculto: el contenido crítico debe verse sin scroll excesivo.
- Menú hamburguesa solo bajo el breakpoint de navegación (≈860px).

## Formularios

- `label` visible siempre; `placeholder` nunca reemplaza al label.
- Errores de validación: texto claro junto al campo + `aria-describedby` + `aria-invalid`.
- Mensajes de éxito/error con `role="status"` o `aria-live="polite"` para lectores de pantalla.
- Deshabilitar el botón de envío solo si hay proceso asíncrono; nunca validar únicamente en cliente.

## Microinteracciones y motion

- Animaciones ≤ 300ms; usadas para explicar, no para decorar.
- Respeta `prefers-reduced-motion: reduce` (desactiva o simplifica animaciones).
- Estados claros para `:hover`, `:focus` y `:active` en todo elemento interactivo.
- Feedback visible ante acciones: cambio de estado, loader, mensaje de confirmación.

## Checklist antes de dar por cerrado

- [ ] Un solo `h1`, jerarquía sin saltos, landmarks correctos.
- [ ] Contraste ≥ 4.5:1 en todo el texto.
- [ ] Todo interactivo operable por teclado y con foco visible.
- [ ] Formularios con labels, errores y feedback accesibles.
- [ ] `alt` descriptivos; imágenes con `width`/`height`.
- [ ] Probado en móvil y desktop; `prefers-reduced-motion` respetado.

---
name: guia-estilos-unla
description: Usá esta skill para aplicar la paleta oficial de la Universidad Nacional de Lanús (UNLa) y un sistema de estilos fluidos en landings, componentes y temas. Define tokens de color granate, tipografía fluida con clamp() y espaciado responsive.
---

# Guía de estilos fluidos UNLa

Sistema de diseño con la paleta institucional de la Universidad Nacional de Lanús (granate y blanco) y técnicas de diseño fluido (tipografía y espaciado con `clamp()`).

## Paleta oficial UNLa

Colores extraídos del CSS oficial del sitio `unla.edu.ar` y del uso institucional (granate y blanco).

### Granate (primario)

| Token | Hex | Uso |
| --- | --- | --- |
| `--primario` | `#7c1331` | Acciones, enlaces, botones primarios, marcas |
| `--primario-oscuro` | `#580d26` | Hover de primario, textos granate sobre blanco |
| `--granate-profundo` | `#380410` | Fondos oscuros profundos, gradientes |
| `--navy` | `#380410` | Navbar, footer y secciones oscuras |
| `--navy-2` | `#4b0e18` | Degradado de secciones oscuras |

### Neutros y claros

| Token | Hex | Uso |
| --- | --- | --- |
| `--tinta` | `#2a050b` | Títulos y texto principal |
| `--texto` | `#6e4a50` | Párrafos y texto secundario |
| `--suave` | `#fcf7f7` | Fondo general de secciones claras |
| `--suave-alt` | `#f6ebec` | Cards, bloques alternos |
| `--borde` | `#ecd9dc` | Bordes y divisores |
| `--blanco` | `#ffffff` | Fondos blancos, botones light |

### Acento

| Token | Hex | Uso |
| --- | --- | --- |
| `--acento` | `#e08394` | Highlight de titulares sobre oscuro, stats, comillas de testimonios |
| rosa claro | `#f2c6cd` | Texto/iconos sobre granate oscuro |
| rosa pálido | `#e8b4be` | Etiquetas `kicker` sobre oscuro |

**Regla de marca:** el granate `#7c1331` es la identidad. Nunca sustituirlo por otros rojos (carmesí, escarlata) ni usarlo para párrafos largos sobre fondo claro (falta contraste AA con 4.5:1).

## Tokens del proyecto (styles.css actual)

```css
:root {
  --primario: #7c1331;
  --primario-oscuro: #580d26;
  --granate-profundo: #380410;
  --acento: #e08394;
  --navy: #380410;
  --navy-2: #4b0e18;
  --tinta: #2a050b;
  --texto: #6e4a50;
  --suave: #fcf7f7;
  --suave-alt: #f6ebec;
  --borde: #ecd9dc;
  --blanco: #ffffff;
  --exito: #16a34a;
  --radio: 16px;
  --radio-sm: 10px;
  --sombra: 0 10px 30px rgba(56, 4, 16, 0.08);
  --sombra-lg: 0 24px 60px rgba(56, 4, 16, 0.16);
}
```

En Next.js colocar estos tokens en `app/globals.css` bajo `:root`.

## Tipografía fluida

Usar `clamp()` para escalas tipográficas que se adaptan sin breakpoints de fuente:

```css
--texto-2xs: clamp(0.72rem, 0.68rem + 0.2vw, 0.8rem);   /* captions   */
--texto-sm:  clamp(0.84rem, 0.8rem + 0.2vw, 0.92rem);   /* meta       */
--texto-md:  clamp(0.95rem, 0.91rem + 0.2vw, 1.02rem);  /* cuerpo     */
--texto-lg:  clamp(1.05rem, 0.98rem + 0.35vw, 1.15rem); /* párrafos destacados */
--titulo-3:  clamp(1.15rem, 1.05rem + 0.5vw, 1.35rem);  /* h3         */
--titulo-2:  clamp(1.55rem, 1.3rem + 1.2vw, 2.1rem);    /* h2         */
--titulo-1:  clamp(1.9rem, 1.4rem + 2.5vw, 2.9rem);     /* h1 hero    */
```

- Base 16px (`1rem`), `line-height` ≥ 1.5 para cuerpo, ≥ 1.1 para títulos.
- `letter-spacing: -0.5px` solo en títulos grandes.

## Espaciado y layout fluidos

- Contenedor: `max-width: 1120px` con `padding-inline: clamp(1rem, 4vw, 1.5rem)`.
- Secciones: `padding-block: clamp(3.5rem, 8vw, 5.5rem)`.
- Gaps de grids/cards: `clamp(1rem, 3vw, 1.5rem)`.
- Usar unidades fluidas en padding/gap/margen; **evitar medidas fijas rígidas** que rompan en pantallas intermedias.

## Breakpoints de referencia

- `≤ 860px`: menú hamburguesa, stacks de 2 columnas → 1.
- `≤ 640px`: grids de 3 → 1 columna, stats en columna, tipografía del hero al mínimo de `clamp`.
- `≤ 980px`: splits (hero, contacto) pasan a una columna.

## Reglas de uso del color

- **Contraste**: texto sobre granate debe ser blanco o rosa claro (`#f2c6cd`); texto sobre blanco debe ser `#2a050b`/`#580d26`, nunca `#7c1331` para párrafos.
- **Gradientes**: de `#7c1331` hacia `#380410` (oscuro) o hacia `#8f1733` (más vivo). No mezclar con azules ni violetas.
- **Iconos y chips**: usar tintes `rgba(124, 19, 49, 0.08–0.14)` sobre blanco y `rgba(255,255,255,0.1)` sobre oscuro.
- **Sombras**: `rgba(56, 4, 16, 0.08–0.16)` para conservar el tinte cálido.
- **Semántica**: éxito = verde (`#16a34a`), error = rojo (`#dc2626`), sin cambiar la identidad granate para branding.
- Secciones oscuras (hero, CTA, footer) usan `#380410`/`#4b0e18`, nunca negro puro salvo el footer institucional `#171717`.

## Ejemplo de CTA (aplicación correcta)

- Fondo: `linear-gradient(135deg, #7c1331, #8f1733)`.
- Texto: blanco; subtítulo: `rgba(255,255,255,0.9)`.
- Botón secundario: fondo blanco, texto granate `#7c1331`.

## Migración a Next.js

- Copiar los tokens a `app/globals.css`.
- `next/font` con una fuente del sistema o variable; no usar `@import` de Google Fonts bloqueante.
- Mantener `prefers-reduced-motion` en las animaciones.
- Verificar contraste real con la herramienta de dev de Next.

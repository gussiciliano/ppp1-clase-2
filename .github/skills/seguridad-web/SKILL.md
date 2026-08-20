---
name: seguridad-web
description: Usá esta skill cuando trabajes en seguridad de una aplicación web: prevención de XSS, inyección, validación de inputs, headers de seguridad, cookies, secretos y dependencias. Aplica a HTML/JS vanilla y a Next.js.
---

# Buenas prácticas de seguridad frontend

Reglas de seguridad para código que se ejecuta en el navegador y para el build/deploy. Aplicar a cualquier cambio que maneje datos de usuario, formularios, autenticación o recursos externos.

## XSS e inyección de contenido

- **Nunca inyectar HTML con `innerHTML` o `dangerouslySetInnerHTML`** a menos que el contenido esté sanitizado por una librería probada (p. ej. DOMPurify). Preferir `textContent` o renderizado por framework.
- En React/Next el escape es automático; no lo desactivar para "acortar".
- Validar y **escapar toda salida** que provenga de datos de usuario.
- No usar `eval()`, `new Function()` ni URLs `javascript:`.
- URLs de imágenes/links de origen externo: validar protocolo (`http`/`https`) antes de usarlas.

## Validación y sanitización de inputs

- Validar en el **cliente** (UX) y siempre **re-validar en el servidor** (seguridad).
- Sanitizar en backend: el frontend nunca es la única barrera.
- Inputs numéricos, emails y teléfonos con tipos correctos y límites de longitud.
- Mensajes de error genéricos para evitar enumeración de usuarios (no revelar si un email "ya existe").

## Secretos y datos sensibles

- **Nunca commitear secretos**: API keys, tokens, contraseñas, certificados.
- Variables sensibles solo vía variables de entorno (`.env.local` con `NEXT_PUBLIC_` solo para datos públicos).
- No exponer keys en el HTML, `localStorage` ni logs del cliente.
- Nunca guardar credenciales en `localStorage`/`sessionStorage`; usar cookies seguras o el mecanismo del framework.
- Sanitizar mensajes de error para no filtrar internals (rutas, stack traces).

## Headers de seguridad (servidor/CDN)

- **CSP** (Content-Security-Policy) restrictiva: `default-src 'self'`, scripts y estilos sin `'unsafe-inline'` salvo necesidad justificada.
- `X-Content-Type-Options: nosniff`.
- `Referrer-Policy: strict-origin-when-cross-origin`.
- Anti-clickjacking: `X-Frame-Options: SAMEORIGIN` o CSP `frame-ancestors 'self'`.
- En producción con HTTPS: `Strict-Transport-Security` (HSTS).
- En Next.js: configurar en `next.config` o en el hosting; en vanilla, vía headers del servidor.

## Cookies

- Cookies de sesión: `HttpOnly`, `Secure` y `SameSite=Lax` (o `Strict`).
- No leer cookies sensibles desde JS del cliente (`HttpOnly` las oculta).
- Limitar dominio y `Path`.

## CSRF y formularios

- Formularios que mutan estado: proteger con token CSRF (en Next: actions del Server de App Router lo manejan).
- No confiar en `Origin`/`Referer` como única protección.
- En JS vanilla: si hay backend, enviar token en headers.

## Dependencias y supply chain

- Mantener `package-lock.json`/`pnpm-lock.yaml` commiteado.
- Correr `npm audit` antes de mergear y ante versiones con CVEs conocidas.
- No instalar dependencias innecesarias; preferir código nativo.
- Verificar scripts de postinstall de dependencias nuevas.

## HTTPS y enlaces

- Todo en HTTPS; no referenciar recursos `http://`.
- Enlaces externos con `target="_blank"` → `rel="noopener noreferrer"`.
- `preconnect` solo a orígenes propios o de terceros confiables.

## Datos personales y privacidad

- Minimizar datos recolectados; explicar en la página qué se recopila.
- No loguear datos personales (DNI, emails, contraseñas) ni en el cliente ni en el servidor.
- Si hay analytics, respetar consentimiento y no trackear a menores sin aviso.

## Referencia rápida (OWASP Top 10 frontend)

1. Broken Access Control → permisos en servidor.
2. Cryptographic Failures → HTTPS, no hashear contraseñas en cliente.
3. Injection (XSS, SQL, NoSQL) → escape de salida + sanitización.
4. Insecure Design → validación servidor, seguridad por defecto.
5. Security Misconfiguration → headers, CORS restringido.
6. Vulnerable Components → `npm audit`.
7. AuthN/Failures → sesiones seguras, no credenciales en cliente.
8. Integrity failures → SRI/`integrity` en scripts de CDN.
9. Logging/Monitoring → logs sin datos sensibles.
10. SSRF → no permitir URLs arbitrarias del usuario al servidor.

## Checklist antes de mergear

- [ ] Sin `innerHTML`/`dangerouslySetInnerHTML` sobre datos no sanitizados.
- [ ] Sin secretos en el código ni en el repo.
- [ ] Headers de seguridad presentes en producción.
- [ ] Cookies `HttpOnly` + `Secure` + `SameSite`.
- [ ] Validación duplicada en servidor.
- [ ] `npm audit` sin vulnerabilidades críticas.

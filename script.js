const anio = document.getElementById('anio');
anio.textContent = new Date().getFullYear();

const btnMenu = document.getElementById('btn-menu');
const nav = document.getElementById('nav');

btnMenu.addEventListener('click', () => {
  const abierto = nav.classList.toggle('open');
  btnMenu.classList.toggle('open', abierto);
  btnMenu.setAttribute('aria-expanded', abierto);
});

nav.querySelectorAll('a').forEach((enlace) => {
  enlace.addEventListener('click', () => {
    nav.classList.remove('open');
    btnMenu.classList.remove('open');
    btnMenu.setAttribute('aria-expanded', 'false');
  });
});

const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach((item) => {
  const pregunta = item.querySelector('.faq__question');
  pregunta.addEventListener('click', () => {
    const abierto = item.classList.toggle('open');
    pregunta.setAttribute('aria-expanded', abierto);
  });
});

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        observador.unobserve(entrada.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => observador.observe(el));

const form = document.getElementById('form-contacto');
const mensaje = document.getElementById('form-mensaje');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const campos = form.querySelectorAll('input, textarea');
  let valido = true;

  campos.forEach((campo) => {
    const sinValor = campo.value.trim() === '';
    const emailInvalido = campo.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campo.value.trim());

    if (sinValor || emailInvalido) {
      campo.classList.add('invalid');
      valido = false;
    } else {
      campo.classList.remove('invalid');
    }
  });

  if (!valido) {
    mensaje.textContent = 'Completá todos los campos correctamente.';
    mensaje.className = 'form__mensaje error';
    return;
  }

  mensaje.textContent = '¡Gracias! Tu consulta fue enviada, te respondemos a la brevedad.';
  mensaje.className = 'form__mensaje success';
  form.reset();
});

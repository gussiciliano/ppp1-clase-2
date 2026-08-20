document.getElementById('anio').textContent = new Date().getFullYear();

const btnInfo = document.getElementById('btn-info');
const mensajeContacto = document.getElementById('mensaje-contacto');

btnInfo.addEventListener('click', () => {
  document.getElementById('cronograma').scrollIntoView({ behavior: 'smooth' });
});

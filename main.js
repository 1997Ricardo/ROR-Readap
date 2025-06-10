
document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.servicio');
    botones.forEach(b => {
      b.addEventListener('click', () => {
        alert(`Has seleccionado: ${b.textContent}`);
      });
    });
  });
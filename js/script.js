document.addEventListener("DOMContentLoaded", () => {
  // Inicializa os ícones Lucide a partir das tags <i>
  lucide.createIcons();

  // Configuração do Intersection Observer para as animações
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observa todos os elementos com nossas classes de animação inicial
  document.querySelectorAll('.animate-on-scroll, .scale-in').forEach(el => {
    observer.observe(el);
  });
});
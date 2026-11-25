// Lightweight scroll reveals and reading progress; respects reduced-motion settings.
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const targets = document.querySelectorAll(
    '.section-heading, .project-card, .about-layout > h2, .about-copy, .experience-row, .contact > h2, .contact-copy, .contact-links'
  );

  if (!reduceMotion && 'IntersectionObserver' in window) {
    targets.forEach((el, index) => {
      el.classList.add('reveal');
      if (el.classList.contains('project-card')) {
        el.style.transitionDelay = `${(index % 2) * 90}ms`;
      }
    });
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    targets.forEach(el => observer.observe(el));
  }

  const updateProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    document.documentElement.style.setProperty('--scroll-progress', `${progress}%`);
  };
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
})();

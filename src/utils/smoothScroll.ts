export const initSmoothScroll = () => {
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a');
    
    if (link && link.hash && link.href.includes(window.location.pathname)) {
      e.preventDefault();
      const targetElement = document.querySelector(link.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
};
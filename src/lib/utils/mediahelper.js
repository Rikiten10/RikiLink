export function lazyLoadMedia(element) {
    if (element.tagName === 'IMG' || element.tagName === 'VIDEO') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (element.tagName === 'IMG') {
              element.src = element.dataset.src;
            } else if (element.tagName === 'VIDEO') {
              element.querySelector('source').src = element.dataset.src;
              element.load();
            }
            observer.unobserve(element);
          }
        });
      });
      observer.observe(element);
    }
  }
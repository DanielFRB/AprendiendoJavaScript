const d = document;

export default function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]");
  const cb = (entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");
      }
    });
  };
  const observador = new IntersectionObserver(cb, {
    threshold: [0.5, 0.7]
  });
  $sections.forEach(el => observador.observe(el));
};
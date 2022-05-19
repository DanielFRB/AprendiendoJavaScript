export default function hamburguerMenu(panelBtn, panel, menuLink) {
  const d = document;
  
  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.add("is-active");
      d.querySelector(panelBtn).classList.add("is-active");
    };
    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    };
  });
};
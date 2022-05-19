import hamburguerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { shortCuts, moveBall } from "./dom/teclado.js";
import countDown from "./dom/count_down.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkThemeMode from "./dom/modo_oscudo.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("./assets/alarma_2.mp3", "#activar-alarma", "#desactivar-alarma")
  countDown("countdown", "Feb 14, 2023 05:30:00", "Feliz Cumpleaños Daniel");
  scrollTopButton(".scroll-top-btn");
});

d.addEventListener("keydown", (e) => {
  shortCuts(e);
  moveBall(e, ".ball", ".stage");
});

darkThemeMode(".dark-mode-btn", "dark-mode");
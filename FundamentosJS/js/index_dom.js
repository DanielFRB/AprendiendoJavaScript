import hamburguerMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";
import { shortCuts, moveBall } from "./dom/teclado.js";
import countDown from "./dom/count_down.js";
import scrollTopButton from "./dom/boton_scroll.js";
import darkThemeMode from "./dom/modo_oscudo.js";
import responsiveMedia from "./dom/objeto_responsive.js";
import resposiveTester from "./dom/prueba_responsive.js";
import userDeviceInfo from "./dom/deteccion_dispositivo.js";
import networkStatus from "./dom/deteccion_red.js";
import webCam from "./dom/deteccion_webcam.js";
import getLocalizacion from "./dom/deteccion_gps.js";
import searchFilters from "./dom/filtro_busqueda.js";

const d = document;

d.addEventListener("DOMContentLoaded", () => {
  hamburguerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("./assets/alarma_2.mp3", "#activar-alarma", "#desactivar-alarma")
  countDown("countdown", "Feb 14, 2023 05:30:00", "Feliz Cumpleaños Daniel");
  scrollTopButton(".scroll-top-btn");
  
  responsiveMedia(
    "youtube", 
    "(min-width: 1024px)", 
    `<a href="https://www.youtube.com/watch?v=_grW3gHy6vQ" target="_blank" rel="noopener">Ver Video</a>`, 
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/_grW3gHy6vQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
  
  responsiveMedia(
    "gmaps", 
    "(min-width: 1024px)", 
    `<a href="https://goo.gl/maps/LxhvQUVC36y9HN4fA" target="_blank" rel="noopener">Ver Mapa</a>`, 
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15761.036325045747!2d-69.75208481700373!3d9.040115073156873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7cf41cee2ff46f%3A0x32abb369ff944824!2sCatedral%20de%20Nuestra%20Se%C3%B1ora%20de%20Coromoto!5e0!3m2!1ses!2sve!4v1652996503510!5m2!1ses!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);
  
  resposiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webCam("webcam", "btn-start", "btn-stop");
  getLocalizacion("geolocation","get-location");
  searchFilters(".card-filter", ".card");
});

d.addEventListener("keydown", (e) => {
  shortCuts(e);
  moveBall(e, ".ball", ".stage");
});

darkThemeMode(".dark-mode-btn", "dark-mode");
networkStatus();
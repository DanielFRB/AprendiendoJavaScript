import { ajax } from "../helpers/ajax.js"
import api from "../helpers/wp_api.js"
import { PostCard } from "./PostCard.js";

export async function Router() {
  const d = document,
    w = window,
    $main = d.getElementById("main");
  
  let { hash } = location;
  console.log(hash);
  $main.innerHTML = null;
  if (!hash || hash === "#/") {
    await ajax({
      url : api.POSTS,
      cbSuccess : (posts) => {
        let html = "";
        posts.forEach((post) => html += PostCard(post));
        $main.innerHTML = html;
      }
    });
  } else if (hash.includes("#/search")) {
    $main.innerHTML = "<h2>Buscador</h2>"
  } else if (hash === "#/contact") {
    $main.innerHTML = "<h2>Contacto</h2>"
  } else {
    $main.innerHTML = "<h2>Carga el Contenido del Post seleccionado</h2>"
  };
  d.querySelector(".loader").style.display = "none";
};
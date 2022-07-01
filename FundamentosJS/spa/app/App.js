import api from './helpers/wp_api.js';
import { ajax } from './helpers/ajax.js';
import { Loader } from './components/Loader.js';
import { Header } from './components/Header.js';
import { Posts } from './components/Posts.js';
import { PostCard } from './components/PostCard.js';

export function App() {
  const d = document, $app = d.getElementById("app");
  $app.appendChild(Header());
  $app.appendChild(Posts());
  $app.appendChild(Loader());

  ajax({
    url : api.POSTS,
    cbSuccess : (posts) => {
      console.log(posts);
      let html = "";
      posts.forEach((post) => html += PostCard(post));
      d.querySelector(".loader").style.display = "none";
      d.getElementById("posts").innerHTML = html;
    }
  });
}
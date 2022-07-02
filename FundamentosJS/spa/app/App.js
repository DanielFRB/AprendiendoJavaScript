import { Loader } from './components/Loader.js';
import { Header } from './components/Header.js';
import { Posts } from './components/Posts.js';
import { Router } from './components/Router.js';

export function App() {
  const $app = document.getElementById("app");
  $app.appendChild(Header());
  $app.appendChild(Posts());
  $app.appendChild(Loader());

  Router();
};
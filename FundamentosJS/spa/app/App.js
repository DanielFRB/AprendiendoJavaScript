import { Loader } from './components/Loader.js';
import { Header } from './components/Header.js';
import { Main } from './components/Main.js';
import { Router } from './components/Router.js';

export function App() {
  const $app = document.getElementById("app");

  $app.innerHTML = null;
  $app.appendChild(Header());
  $app.appendChild(Main());
  $app.appendChild(Loader());

  Router();
};
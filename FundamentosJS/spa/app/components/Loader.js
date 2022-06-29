export function Loader() {
  const $loader = document.createElement("img");
  $loader.src = "./app/assets/loading.svg";
  $loader.alt = "Cargando...";
  $loader.classList.add("loader");
  return $loader;
}
export function ajax(props) {
  const d = document;
  let { url, cbSuccess} = props;
  fetch(url)
  .then(res => res.ok ? res.json() : Promise.reject(res))
  .then(json => cbSuccess(json))
  .catch(err => {
    let message = err.statusText || "Ocurrio un Error al acceder a la API";
    d.getElementById("app").innerHTML = `
      <div class="error">
        <p>Error ${err.status}: ${message}</p>
      </div>`
  });
}
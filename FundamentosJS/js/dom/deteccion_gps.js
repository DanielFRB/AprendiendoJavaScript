const d = document, n = navigator;

export default function getLocalizacion(id, btnLocation) {
  const $id = d.getElementById(id),
    $btnLocation = d.getElementById(btnLocation),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
  
  $btnLocation.addEventListener("click", () => {
    const success = (position) => {
      let coords = position.coords;
      $id.innerHTML = `<p>Tu Posicion Actual es:</p><ul><li>Latitud: <b>${coords.latitude}</b></li><li>Longitud: <b>${coords.longitude}</b></li><li>Precision: <b>${coords.accuracy}</b></li></ul>
      <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},16z" target="_blank" rel="noopener">Ver en Google Maps</a>`;
    };
    const error = (err) => { $id.innerHTML = `<p><mark>Error: ${err.code}: ${err.message}</mark></p>`};
    n.geolocation.getCurrentPosition(success, error, options);
  });

};
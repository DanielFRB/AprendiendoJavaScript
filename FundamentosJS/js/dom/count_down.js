const d = document;

export default function countDown(id, limitDate, finalMessage) {
  const $countdown = d.getElementById(id);
  const countdownDate = new Date(limitDate).getTime()

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime(),
      limitTime = countdownDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
      hours = Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes = Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60)),
      seconds = Math.floor((limitTime % (1000 * 60)) / (1000));
    $countdown.innerHTML = `<h3>Faltan: ${days} dias, ${hours} horas, con ${minutes} minutos y ${seconds} segundos</h3>`;
    if (limitTime < 0) { 
      clearInterval(countdownTempo); 
      $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
    };
  }, 1000);
};
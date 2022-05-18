const d = document;

export function digitalClock(clock, btnPlay, btnStop) {
  let clockTempo;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);
      d.querySelector(btnPlay).classList.toggle("is-disabled");
      e.target.disabled = true;
    };

    if (e.target.matches(btnStop)) {
      clearInterval(clockTempo);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(btnPlay).disabled = false;
      d.querySelector(btnPlay).classList.remove("is-disabled");
    };
  });
};

export function alarm(sound, btnPlay, btnStop) {
  let alarmTempo;
  const $audio = d.createElement("audio");
  $audio.src = sound;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      alarmTempo = setTimeout(() => {
        $audio.play();
      }, 2000);
      d.querySelector(btnPlay).classList.toggle("is-disabled");
      e.target.disabled = true;
    };

    if (e.target.matches(btnStop)) {
      clearTimeout(alarmTempo);
      $audio.pause();
      $audio.currentTime = 0;
      d.querySelector(btnPlay).disabled = false;
      d.querySelector(btnPlay).classList.remove("is-disabled");
    };
  });
};
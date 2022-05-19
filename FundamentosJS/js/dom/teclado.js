const d = document;
let x = 0,
  y = 0;

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball);
  const $stage = d.querySelector(stage);
  const limitsBall = $ball.getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect();

  switch (e.keyCode) {
    case 37:
      if (limitsBall.left > limitsStage.left) { e.preventDefault(); x--; };
    break;
    case 38:
      if (limitsBall.top > limitsStage.top) { e.preventDefault(); y--; };
    break;
    case 39:
      if (limitsBall.right < limitsStage.right) {e.preventDefault(); x++; };
    break;
    case 40:
      if (limitsBall.bottom < limitsStage.bottom) {e.preventDefault(); y++; };
    break;
  }
  $ball.style.transform = `translate(${x*10}px, ${y*10}px)`;
};

export function shortCuts(e) {
  if (e.key === 'a' && e.altKey) {
    alert("Haz lanzado una alerta con el Teclado");
  };

  if (e.key === 'c' && e.altKey) {
    confirm("Haz lanzado una confirmacion con el Teclado");
  };

  if (e.key === 'p' && e.altKey) {
    prompt("Haz lanzado una aviso con el Teclado");
  };
};
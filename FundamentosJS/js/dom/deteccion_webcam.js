const d = document, w = window, n = navigator;

export default function webCam(id, btnStart, btnStop) {
  const $video = d.getElementById(id),
    $btnStart = d.getElementById(btnStart), 
    $btnStop = d.getElementById(btnStop);
  if (n.mediaDevices.getUserMedia) {
    $btnStart.addEventListener("click", () => {
      $btnStart.classList.add("hidden");
      n.mediaDevices.getUserMedia({video: true, audio: true})
        .then((stream) => {
          $video.srcObject = stream;
          $video.play();
        })
        .catch((err) => {
          $video.insertAdjacentHTML("beforebegin", `<p><mark>${err}</mark></p>`);
        });
    });
    
    $btnStop.addEventListener("click", () => {
      $video.srcObject.getTracks().forEach((e) => { e.stop(); });
      $btnStart.classList.remove("hidden");
    });
  };
};
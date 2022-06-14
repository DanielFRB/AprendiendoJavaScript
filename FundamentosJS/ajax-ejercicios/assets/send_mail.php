<?php
if (isset($_POST)) {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $comments = $_POST["comments"];

  $domain = $_SERVER["HTTP_HOST"];
  $to = "danfelrondon@gmail.com";
  $subject_mail = "Contacto desde el formulario del sitio: $domain.";
  $message = "
    <p>
      Datos enviados desde el formulario del sitio <b>$domain</b>
    </p>
    <ul>
      <li>Nombre: <b>$name</b></li>
      <li>Email: <b>$email</b></li>
      <li>Asunto: $subject</li>
      <li>Comentarios: $comments</li>
    </ul>
  ";
  $headers = "MIME-Version: 1.0\r\n"."Content-Type: text/html; charset=utf-8\r\n"."From: Envio Automatico No Responder <no-reply@$domain>";
  $send_mail = mail($to, $subject_mail, $message, $headers);

  if ($send_mail) {
    $res = [
      "err" => false,
      "message" => "Tus datos fueron enviados corectamente"
    ];
  } else {
    $res = [
      "err" => true,
      "message" => "Tus datos No fueron envuados. Intenta nuevamente"
    ];
  };

  header("Content-type: application/json");
  header("Access-Control-Allow-Origin: *");
  echo json_encode($res);
  exit;
};
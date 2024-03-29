export function ContactForm() {
  const d = document,
    $form = d.createElement("form"),
    $styles = d.getElementById("dynamic-styles");
  
  $styles.innerHTML = `
    .contact-form {
      --form-ok-color: #4caf50;
      --form-error-color: #f44336;
      margin-left: auto;
      margin-right: auto;
      width: 80%;
    }

    .contact-form > * {
      padding: 0.5rem;
      margin: 1rem auto;
      display: block;
      width: 100%;
    }

    .contact-form textarea {
      resize: none;
    }

    .contact-form legend,
    .contact-form-response {
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
    }

    .contact-form input,
    .contact-form textarea {
      font-size: 1rem;
      font-family: sans-serif;
    }

    .contact-form input[type="submit"] {
      width: 50%;
      font-weight: bold;
      cursor: pointer;
    }

    .contact-form *::placeholder {
      color: black;
    }

    .contact-form [required]:valid {
      border: thin solid var(--form-ok-color);
    }

    .contact-form [required]:invalid {
      border: thin solid var(--form-error-color);
    }

    .contact-form-loader {
      text-align: center;
    }

    .contact-form-error {
      margin-top: -1rem;
      font-size: 80%;
      background-color: var(--form-error-color);
      color: white;
      transition: all 0.8s ease;
      -webkit-transition: all 0.8s ease;
      -moz-transition: all 0.8s ease;
      -ms-transition: all 0.8s ease;
      -o-transition: all 0.8s ease;
    }

    .contact-form-error.is-active {
      display: block;
      animation: show-message 1s 1 normal 0s ease-out both;
      -webkit-animation: show-message 1s 1 normal 0s ease-out both;
    }

    .none {
      display: none;
    }

    @keyframes show-message {
      0% {
        visibility: hidden;
        opacity: 0;
      }
      100% {
      visibility: visible;
        opacity: 1;
      } 
    }
  `;
  $form.classList.add("contact-form");
  $form.innerHTML = `
    <legend>Envianos tus comentarios</legend>
    <input type="text" name="name" placeholder="Escribe tu Nombre" 
      title="Nombre solo acepta letras y espacio en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
    <input type="email" name="email" placeholder="Escribe tu Correo Electronico"
      title="Direccion de Correo Invalida" pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>
    <input type="text" name="subject" placeholder="Asunto a Tratar" title="El Asunto es requerido" required>
    <textarea name="comments" cols="50" rows="5" placeholder="Escribe tus comentarios"
      title="Tus comentarios no deben exceder los 255 caracteres" data-pattern="^.{1,255}$" required></textarea>
    <input type="submit" value="Enviar">
    <div class="contact-form-loader none">
      <img src="../assets/loading.svg" alt="Cargando">
    </div>
    <div class="contact-form-response none">
      <p>Los datos han sido enviados</p>
    </div>
  `;

  function validarFormulario() {
    const $form = d.querySelector(".contact-form"),
      $inputs = d.querySelectorAll(".contact-form [required]");
    
    $inputs.forEach((input) => {
      const $span = d.createElement("span");
      $span.id = input.name;
      $span.textContent = input.title;
      $span.classList.add("contact-form-error", "none");
      input.insertAdjacentElement("afterend", $span);
    });

    d.addEventListener("keyup", (e) => {
      if (e.target.matches(".contact-form [required]")) {
        let $input = e.target,
          pattern = $input.pattern || $input.dataset.pattern;
        if (pattern && $input.value !== "") {
          let regex = new RegExp(pattern);
          return !regex.exec($input.value)
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active");
        };
        if (!pattern) {
          return $input.value === ""
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active");
        };
      };
    });

    d.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Enviando Formulario");
      const $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response");
      
      $loader.classList.remove("none");
      fetch("https://formsubmit.co/ajax/danfelrondon@gmail.com", {
        method : "POST",
        body : new FormData(e.target)
      })
        .then(response => response.ok ? response.json() : Promise.reject(response))
        .then(json => {
          $loader.classList.add("none");
          $response.classList.remove("none");
          $response.innerHTML = `<p>${json.message}</p>`;
          $form.reset();
        })
        .catch(error => {
          let errorMessage =  error.statusText || "Ocurrio un Error al enviar el Formulario";
          $response.innerHTML = `<p>Error ${error.status}: ${errorMessage}</p>`;
        })
        .finally(() => {
          setTimeout(() => {
            $response.classList.add("none");
            $response.innerHTML = "";
          }, 3000);
        });
    });
  };

  setTimeout(() => validarFormulario(), 100);

  return $form;
};
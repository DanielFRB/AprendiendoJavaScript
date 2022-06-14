import STRIPE_KEYS from "./stripe-keys.js";

const d = document,
  $patacones = d.getElementById("patacones"),
  $template = d.getElementById("patacon-template").content,
  $fragment = d.createDocumentFragment(),
  fetchOptions = {
    headers : {
      Authorization : `Bearer ${STRIPE_KEYS.secret}`
    }
  };

let products, prices;
const moneyFormat = (num, cur) => `$${num.slice(0,-2)}.${num.slice(-2)} ${cur.toUpperCase()}`;
Promise.all([
  fetch("https://api.stripe.com/v1/products", fetchOptions),
  fetch("https://api.stripe.com/v1/prices", fetchOptions)
])
.then((responses) => Promise.all(responses.map((res) => res.json())))
.then((json) => {
  products = json[0].data;
  prices = json[1].data;
  prices.forEach((el) => {
    let productData = products.filter((product) => product.id === el.product);
    $template.querySelector(".patacon").setAttribute("data-price", el.id);
    $template.querySelector("img").src = productData[0].images[0];
    $template.querySelector("img").alt = productData[0].name;
    $template.querySelector("figcaption").innerHTML = `
      ${productData[0].name}
      <br>
      ${moneyFormat(el.unit_amount_decimal, el.currency)}`;
    let $clone = d.importNode($template, true);
    $fragment.appendChild($clone);
  });
  $patacones.appendChild($fragment);
})
.catch((err) => {
  let message = err.statusText || "Ocurrio un error al conectarse al API Stripe";
  $patacones.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
});

d.addEventListener("click", (e) => {
  if (e.target.matches(".patacon *")) {
    let priceId = e.target.parentElement.getAttribute("data-price");
    Stripe(STRIPE_KEYS.public).redirectToCheckout({
      lineItems : [{price : priceId, quantity : 1}],
      mode : "payment",
      successUrl : "http://127.0.0.1:5500/ajax-ejercicios/assets/success-stripe.html",
      cancelUrl : "http://127.0.0.1:5500/ajax-ejercicios/assets/cancel-stripe.html"
    }).then((res) => {
      if (res.error) {
        $patacones.insertAdjacentHTML("afterend", res.error.message);
      };
    });
  };
});
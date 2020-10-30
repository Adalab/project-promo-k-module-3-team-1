const responseURL = document.querySelector(".js-card-link");
const buttonTwitter = document.querySelector(".js-button-twitter");

function createCard(event) {
  event.preventDefault();
  fetch("https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/", {
    method: "POST",
    body: JSON.stringify(dataValue),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => getURL(result))
    .catch((error) => console.error("Error:", error));
}
function getURL(result) {
  if (result.success) {
    responseURL.innerHTML = `<a target="_blank" href="${result.cardURL}">Aquí tienes tu tarjeta</a>`;
    const tweet =
      "¡Hola! Un DIAMANTE es solo un trozo de carbón que soportó una presión extraordinaria! Para mostrarlo al mundo, las < Div_as> me han ayudado a hacer esta tarjeta 💎";
    buttonTwitter.setAttribute(
      "href",
      `https://twitter.com/intent/tweet?text=${tweet}&url=${result.cardURL}`
    );
  } else {
    responseURL.innerHTML = `ERROR: ${result.error}`;
  }
}

btnCreated.addEventListener("click", createCard);

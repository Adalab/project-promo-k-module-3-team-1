const ENDPOINT = "https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/";

const getDataFromApi = (data) => {
  return fetch((ENDPOINT), {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      return result;
    })
    .catch((error) => console.error("Error:", error));
}

// function getURL(result) {
//   if (result.success) {
//     responseURL.innerHTML = `<a target="_blank" href="${result.cardURL}">Aquí tienes tu tarjeta</a>`;
//     const tweet =
//       "¡Hola! Un DIAMANTE es solo un trozo de carbón que soportó una presión extraordinaria! Para mostrarlo al mundo, las < Div_as> me han ayudado a hacer esta tarjeta 💎";
//     buttonTwitter.setAttribute(
//       "href",
//       `https://twitter.com/intent/tweet?text=${tweet}&url=${result.cardURL}`
//     );
//   } else {
//     responseURL.innerHTML = `ERROR: ${result.error}`;
//   }
// }

export default getDataFromApi;
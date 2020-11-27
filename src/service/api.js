const ENDPOINT =
  "https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/";

const getDataFromApi = (data) => {
  return fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.error("Error:", error));
};

export default getDataFromApi;

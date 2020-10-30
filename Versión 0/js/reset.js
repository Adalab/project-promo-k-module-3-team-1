"use strict";

const reset = document.querySelector(".js-reset");
const name = document.querySelector(".js-name");
const job = document.querySelector(".js-job");
const image = document.querySelector(".js__profile-image");
const miniImage = document.querySelector(".js__profile-preview");
const social = document.querySelectorAll(".js-social");

function resetData() {
  dataValue = {
    palette: 1,
    name: "Nombre Apellido",
    job: "Front-end developer",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    photo: "./assets/images/MM.jpg",
  };
  name.innerHTML = "Nombre Apellido";
  job.innerHTML = "Front-end developer";
  image.style = "background-image: url('./assets/images/MM.jpg')";
  miniImage.style = "";
  radioButtonList[0].checked = true;
  for (let item of social) {
    item.href = "";
  }
  for (let item of fillData) {
    item.value = "";
  }
  cardTwitter.classList.add("card__hidden");
  btnCreated.classList.remove("create-card__color");

  paletteSection.classList.add("hidden");
  fillSection.classList.add("hidden");
  cardSection.classList.add("hidden");

  const cardContainer = document.querySelector(".js-card-container");
  cardContainer.classList.remove("js-green", "js-red", "js-random");
  cardContainer.classList.add("js-green");
  localStorage.clear();
}

reset.addEventListener("click", resetData);
getLocalStorage();

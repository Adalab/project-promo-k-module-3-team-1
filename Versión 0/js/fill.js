"use strict";
const iconPhone = document.querySelector(".js-icon-phone");
const iconMail = document.querySelector(".js-icon-mail");
const iconLinkedin = document.querySelector(".js-icon-linkedin");
const iconGithub = document.querySelector(".js-icon-github");
const fillData = document.querySelectorAll(".js-fill");
let dataValue = {
  palette: 1,
  name: "Nombre Apellido",
  job: "Front-end developer",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  photo: "./assets/images/MM.jpg",
};
const fillDataValue = function (event) {
  dataValue[event.currentTarget.id] = event.currentTarget.value;
  localStorage.setItem("dataFrom", JSON.stringify(dataValue));
  renderPreview();
};
function getLocalStorage() {
  const savedTaskRaw = localStorage.getItem("dataFrom");
  if (savedTaskRaw) {
    dataValue = JSON.parse(savedTaskRaw);
    renderPreview();
  }
}
/*
 * Actualiza la tarjeta preview desde la infor que hay en dataValue
 */
function renderPreview() {
  // Actualiza los colores
  const cardContainer = document.querySelector(".js-card-container");
  cardContainer.classList.remove("js-green", "js-red", "js-random");
  if (dataValue.palette === "1") {
    cardContainer.classList.add("js-green");
  }
  if (dataValue.palette === "2") {
    cardContainer.classList.add("js-red");
  }
  if (dataValue.palette === "3") {
    cardContainer.classList.add("js-random");
  }
  name.innerHTML = dataValue.name;
  job.innerHTML = dataValue.job;
  iconPhone.href = "tel:+34" + dataValue.phone;
  iconMail.href = "mailto:" + dataValue.email;
  iconLinkedin.href = dataValue.linkedin;
  iconGithub.href = dataValue.github;
  //Rellenar inputs
  fillData[0].value = dataValue.name;
  fillData[1].value = dataValue.job;
  fillData[2].value = dataValue.email;
  fillData[3].value = dataValue.phone;
  fillData[4].value = dataValue.linkedin;
  fillData[5].value = dataValue.github;
  //Actualizar el radio button
  radioButtonList[dataValue.palette - 1].checked = true;
  // Actualizar la foto
  profileImage.style.backgroundImage = `url(${dataValue.photo})`;
}
for (const eachFillData of fillData) {
  eachFillData.addEventListener("change", fillDataValue);
}

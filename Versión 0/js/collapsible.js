"use strict";

const formTitles = document.querySelectorAll(".js-form-title1");
const paletteSection = document.querySelector(".js-form-palette");
const fillSection = document.querySelector(".js-form-fill");
const cardSection = document.querySelector(".js-form-card");
const arrowsUp = document.querySelectorAll(".js-arrow-up");
const btnCreated = document.querySelector(".js-button-created");
const cardTwitter = document.querySelector(".js-card");

paletteSection.classList.add("hidden");
fillSection.classList.add("hidden");
cardSection.classList.add("hidden");

function hiddenSection(ev) {
  const clickId = ev.target.id;
  if (clickId == 1) {
    paletteSection.classList.toggle("hidden");
    fillSection.classList.add("hidden");
    cardSection.classList.add("hidden");
    arrowsUp[0].classList.toggle("icon-up-move");
  } else if (clickId == 2) {
    fillSection.classList.toggle("hidden");
    paletteSection.classList.add("hidden");
    cardSection.classList.add("hidden");
    arrowsUp[1].classList.toggle("icon-up-move");
  } else if (clickId == 3) {
    cardSection.classList.toggle("hidden");
    paletteSection.classList.add("hidden");
    fillSection.classList.add("hidden");
    arrowsUp[2].classList.toggle("icon-up-move");
  }
}

for (const formTitle of formTitles) {
  formTitle.addEventListener("click", hiddenSection);
}

function addAppearTwitter() {
  cardTwitter.classList.remove("card__hidden");
  btnCreated.classList.add("create-card__color");
  btnCreated.classList.remove("hover");
}

btnCreated.addEventListener("click", addAppearTwitter);

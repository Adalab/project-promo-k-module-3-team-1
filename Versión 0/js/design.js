"use strict";

/*PASO 1- pinto mi paleta en html */

/* me hago un array */
const palette = ["green", "red", "random"];

/* Localizo donde voy a pintar mi codigo en el HTML y hago un querySelector */
const paletteColors = document.querySelector(".js-palettes");

/* PASO 2 - pinto  */

/* Localizo donde voy a pintar mi codigo en el HTML y hago un querySelector */
const card = document.querySelector(".main__photo");

// Painter function
const paintPalettes = () => {
  for (let i = 0; i < palette.length; i++) {
    /* este codigo lo quiero repetido, lo meto dentro de for con += para q no se sobreesciba */

    {`${ifChecked}`} 


    paletteColors.innerHTML += `<div class="design__palette-color">
  <input id=${
    palette[i]
  } class="palettes js-palette" type="radio" name="palette" value="${i + 1}" ${
      i === 0 ? "checked" : ""
    }/>
  <span class="box-color ${palette[i]}__1"></span> 
  <span class="box-color ${palette[i]}__2"></span>
  <span class="box-color ${palette[i]}__3"></span>
  </div>
  `;
  }
};

// Paint elements
paintPalettes();

const radioButtonList = document.querySelectorAll(".js-palette");

// Listen events
for (let i = 0; i < radioButtonList.length; i++) {
  radioButtonList[i].addEventListener("click", handleRadioButtonCLick);
}
let buttonPossition = 1;
function handleRadioButtonCLick(event) {
  dataValue.palette = event.currentTarget.value;
  buttonPossition = event.currentTarget.id;
  localStorage.setItem("dataFrom", JSON.stringify(dataValue));
  renderPreview();
}

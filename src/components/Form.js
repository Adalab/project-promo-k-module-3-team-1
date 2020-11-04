import React from "react";
import "../stylesheets/layout/_form.scss";
import "../stylesheets/layout/_design-form.scss";
import "../stylesheets/layout/_design-share.scss";
import "../stylesheets/layout/_api.scss";

class Form extends React.Component {
  render() {
    return (
      <>
        <section className="design">
          <div className="design__title js-form-title1 border-title" id="1">
            <div className="design__title-container" id="1">
              <i className="far fa-object-ungroup icon-design" id="1"></i>
              <h2 className="design__main-title" id="1">
                Diseña
              </h2>
            </div>
            <div className="design__down-up" id="1">
              <i className="far fa-gem icon-up js-arrow-up" id="1"></i>
            </div>
          </div>
          <div className="design__palette transition js-form-palette js-form">
            <h3 className="design__palette-title">Colores</h3>
            <div className="design__palette-color">
              <form action="#" className="js-palettes">
                {/* <!-- asociado a JS --> */}
              </form>
            </div>
          </div>
        </section>
        {/* Fill */}
        <section className="fill">
          <div className="design__title js-form-title1" id="2">
            <div className="design__title-container" id="2">
              <i className="far fa-keyboard icon-design" id="2"></i>
              <h2 className="design__main-title" id="2">
                Rellena
              </h2>
            </div>
            <div className="design__down-up js-design__down-up" id="2">
              <i className="far fa-gem icon-up js-arrow-up" id="2"></i>
            </div>
          </div>
          <form className="fill__form js-form-fill js-form" action="GET">
            <label for="name" className="label fill__name">
              Nombre completo
            </label>
            <input
              id="name"
              className="fill__input js-fill"
              type="text"
              name="name"
              placeholder="Ej: Marilyn Monroe"
            />
            <label for="job" className="label fill__job">
              Puesto
            </label>
            <input
              className="fill__input js-fill"
              type="text"
              id="job"
              name="job"
              placeholder="Ej: Diva Developer"
            />
            <label className="label fill__img" for="text">
              Imagen de perfil
            </label>

            <div className="action">
              <button className="action__upload-btn js__profile-trigger" type="button">
                Añadir imagen
              </button>
              <input
                type="file"
                name=""
                id="img-selector"
                className="action__hiddenField js__profile-upload-btn"
              />
              <div className="profile">
                <div className="profile__preview js__profile-preview"></div>
              </div>
            </div>
            <label for="email" className="label fill__email">
              Email
            </label>
            <input
              className="fill__input js-fill"
              type="email"
              id="email"
              name="email"
              placeholder="Ej: marilyn-monroe@gmail.com"
            />
            <label for="phone" className="label fill__tel">
              Teléfono
            </label>
            <input
              id="phone"
              className="fill__input js-fill"
              type="tel"
              name="phone"
              placeholder="Ej: 555-55-55-55"
            />

            <label for="linkedin" className="label fill__linkedin">
              Linkedin
            </label>
            <input
              className="fill__input js-fill"
              type="text"
              id="linkedin"
              name="linkedin"
              placeholder="Ej: hollywood.monroe"
            />
            <label for="github" className="label fill__github">
              Github
            </label>
            <input
              className="fill__input js-fill"
              type="text"
              id="github"
              name="github"
              placeholder="Ej: diva-monroe"
            />
          </form>
        </section>

        {/* Share */}
        <section className="share">
          <div className="design__title js-form-title1" id="3">
            <div className="design__title-container" id="3">
              <i className="fas fa-share-alt icon-design" id="3"></i>
              <h2 className="design__main-title" id="3">
                Comparte
              </h2>
            </div>
            <div className="design__down-up" id="3">
              <i className="far fa-gem icon-up js-arrow-up" id="3"></i>
            </div>
          </div>
          <div className="js-form-card js-form">
            <form className="create-card hover js-button-created">
              <i className="far fa-address-card created-card__button-icon"></i>
              <input
                type="button"
                className="create-card__button button__created-title"
                value="Crear tarjeta"
              />
            </form>
          </div>
        </section>
        {/* Twitter */}
        <div className="card js-card card__hidden">
          <div className="card__created js-form-created">
            <h2 className="card__created-title">La tarjeta ha sido creada:</h2>
            <p className="card__created-link js-card-link"></p>
            <a target="_blank" className="button__twitter js-button-twitter">
              <i className="fab fa-twitter button__twitter-icon"></i>
              <h3 className="button__twitter-title">Compartir en twitter</h3>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Form;

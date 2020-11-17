import React from 'react';
import '../stylesheets/layout/_form.scss';
import '../stylesheets/layout/_design-form.scss';
import '../stylesheets/layout/_design-share.scss';
import '../stylesheets/layout/_api.scss';
import Collapsible from './Collapsible';
import Input from './Input';
import GetAvatar from './GetAvatar';

class Form extends React.Component {
  render() {
    return (
      <>
        <Collapsible
          sectionClass="design"
          id="1"
          title="Diseña"
          icon="far fa-object-ungroup"
        >
          <div className="design__palette transition js-form-palette js-form">
            <h3 className="design__palette-title">Colores</h3>
            <div className="design__palette-color">
              <form action="#" className="js-palettes">
                {/* <!-- asociado a JS --> */}
              </form>
            </div>
          </div>
        </Collapsible>

        {/* Fill */}
        <Collapsible
          sectionClass="fill"
          id="2"
          title="Rellena"
          icon="far fa-keyboard"
          // valores={this.props.inputValue}
        >
          <form className="fill__form js-form-fill js-form" action="GET">
            <Input
              labelTitle="Nombre completo"
              for_id_name="name"
              classLabel="fill__name"
              type="text"
              value={this.props.name}
              placeholder="Ej: Marilyn Monroe"
              handleChange={this.props.handleChange}
            ></Input>
            <Input
              labelTitle="Puesto"
              for_id_name="job"
              classLabel="fill__job"
              type="text"
              placeholder="Ej: Diva Developer"
              value={this.props.job}
              handleChange={this.props.handleChange}
            ></Input>
            <Input
              labelTitle="Email"
              for_id_name="email"
              classLabel="fill__email"
              type="email"
              placeholder="Ej: marilyn-monroe@gmail.com"
              value={this.props.email}
              handleChange={this.props.handleChange}
            ></Input>
            {/* {Component img} */}

            <label className="label fill__img" htmlFor="text">
              Imagen de perfil
            </label>
            <GetAvatar
              updateAvatar={this.props.updateAvatar}
              photo={this.props.photo}
            />
            {/* <div className="action">
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
            </div> */}

            <Input
              labelTitle="Teléfono"
              for_id_name="phone"
              classLabel="fill__tel"
              type="tel"
              placeholder="Ej: 555-55-55-55"
              value={this.props.phone}
              handleChange={this.props.handleChange}
            ></Input>
            <Input
              labelTitle="Linkedin"
              for_id_name="linkedin"
              classLabel="fill__linkedin"
              type="text"
              placeholder="Ej: hollywood.monroe"
              value={this.props.linkedin}
              handleChange={this.props.handleChange}
            ></Input>
            <Input
              labelTitle="Github"
              for_id_name="github"
              classLabel="fill__github"
              type="text"
              placeholder="Ej: diva-monroe"
              value={this.props.github}
              handleChange={this.props.handleChange}
            ></Input>
          </form>
        </Collapsible>
        {/* Share */}
        <Collapsible
          sectionClass="share"
          id="3"
          title="Comparte"
          icon="fas fa-share-alt"
        >
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
          <div className="card js-card card__hidden">
            <div className="card__created js-form-created">
              <h2 className="card__created-title">
                La tarjeta ha sido creada:
              </h2>
              <p className="card__created-link js-card-link"></p>
              <a
                href="./"
                target="_blank"
                rel="noreferrer"
                className="button__twitter js-button-twitter"
              >
                <i className="fab fa-twitter button__twitter-icon"></i>
                <h3 className="button__twitter-title">Compartir en twitter</h3>
              </a>
            </div>
          </div>
        </Collapsible>
      </>
    );
  }
}

export default Form;

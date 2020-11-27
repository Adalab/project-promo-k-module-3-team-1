import React from "react";
import Collapsible from "./Collapsible";
import Input from "./Input";
import GetAvatar from "./GetAvatar";
import Palettes from "./Palettes";
import ShareButton from "./ShareButton";
import ShareButtonTwitter from "./ShareButtonTwitter";
import Loader from "./Loader";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Diseña: true,
      Rellena: true,
      Comparte: true,
    };

    this.handleClick = this.handleClick.bind(this);
    // this.getURL = this.getURL.bind(this);
  }

  handleClick(id) {
    switch (id) {
      case "1":
        if (this.state.Diseña === false) this.setState({ Diseña: true });
        else {
          this.setState({ Diseña: false, Rellena: true, Comparte: true });
        }
        break;
      case "2":
        if (this.state.Rellena === false) this.setState({ Rellena: true });
        else {
          this.setState({ Diseña: true, Rellena: false, Comparte: true });
        }
        break;
      case "3":
        if (this.state.Comparte === false) this.setState({ Comparte: true });
        else {
          this.setState({ Diseña: true, Rellena: true, Comparte: false });
        }
        break;
      default:
    }
  }

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
  render() {
    return (
      <>
        <Collapsible
          handleClick={this.handleClick}
          toClose={this.state.Diseña}
          sectionClass="design"
          id="1"
          title="Diseña"
          icon="far fa-object-ungroup"
        >
          <div className="design__palette transition js-form-palette js-form">
            <h3 className="design__palette-title">Colores</h3>
            <div className="design__palette-color">
              <form action="#" className="js-palettes">
                <Palettes handlePalette={this.props.handlePalette} />
              </form>
            </div>
          </div>
        </Collapsible>

        {/* Fill */}
        <Collapsible
          toClose={this.state.Rellena}
          handleClick={this.handleClick}
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

            {/* {Component img} */}
            <label className="label fill__img" htmlFor="text">
              Imagen de perfil
            </label>
            <GetAvatar
              updateAvatar={this.props.updateAvatar}
              photo={this.props.photo}
            />
            <Input
              labelTitle="Email"
              for_id_name="email"
              classLabel="fill__email"
              type="email"
              placeholder="Ej: marilyn-monroe@gmail.com"
              value={this.props.email}
              handleChange={this.props.handleChange}
            ></Input>

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
          toClose={this.state.Comparte}
          handleClick={this.handleClick}
          sectionClass="share"
          id="3"
          title="Comparte"
          icon="fas fa-share-alt"
        >
          <ShareButton handleClickCreate={this.props.handleClickCreate} />

          {this.props.apiObject.apiSuccess && this.props.apiObject.apiCall ? (
            <ShareButtonTwitter apiObject={this.props.apiObject} />
          ) : (
            <></>
          )}
          {!this.props.apiObject.apiSuccess && this.props.apiObject.apiCall ? (
            <p className="card__created-link js-card-link">
              Error: {this.props.apiObject.apiError}
            </p>
          ) : (
            <></>
          )}
          <Loader></Loader>
          {/* <div className="card js-card card__hidden">
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
          </div> */}
        </Collapsible>
      </>
    );
  }
}

export default Form;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PreviewCard from "./PreviewCard";
import Form from "./Form";
import getDataFromApi from "../service/api.js";
// import background2 from "../images/MM.jpg";

class CardGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palette: 1,
      name: "",
      job: "",
      phone: "",
      photo: {
        url: "",
        isAvatarDefault: false,
      },
      email: "",
      linkedin: "",
      github: "",
      apiError: "",
      apiCardURL: "",
      apiSuccess: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.updateAvatar = this.updateAvatar.bind(this);
    this.handlePalette = this.handlePalette.bind(this);
    this.setLocalStorage = this.setLocalStorage.bind(this);
    this.getLocalStorage = this.getLocalStorage.bind(this);
    this.handleClickCreate = this.handleClickCreate.bind(this);
  }
  componentDidMount() {
    // console.log("entro en didmount");
    this.getLocalStorage("data");
  }

  componentDidUpdate() {
    // console.log("entro en didupdate");
    this.setLocalStorage();
  }

  setLocalStorage() {
    const data = {
      palette: this.state.palette,
      name: this.state.name,
      job: this.state.job,
      phone: this.state.phone,
      photo: this.state.photo.url,
      email: this.state.email,
      linkedin: this.state.linkedin,
      github: this.state.github,
    };
    localStorage.setItem("data", JSON.stringify(data));
  }

  getLocalStorage() {
    if (localStorage.getItem("data")) {
      const data = JSON.parse(localStorage.getItem("data"));
      this.setState({
        palette: data.palette,
        name: data.name,
        job: data.job,
        phone: data.phone,
        photo: {
          url: data.photo,
        },
        email: data.email,
        linkedin: data.linkedin,
        github: data.github,
      });
    }
  }

  updateAvatar(img) {
    const { photo } = this.state;
    this.setState(() => {
      const newPhoto = { ...photo, url: img, isAvatarDefault: false };
      return {
        photo: newPhoto,
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        palette: 1,
        name: "",
        job: "",
        phone: "",
        photo: "",
        email: "",
        linkedin: "",
        github: "",
      };
    });
  }

  handlePalette(value) {
    this.setState({
      palette: value,
    });
  }

  handleChange(ev) {
    const atrib = ev.currentTarget.id;
    const value = ev.currentTarget.value;
    this.setState(() => {
      return {
        [atrib]: value,
      };
    });
  }

  handleClickCreate() {
    const data = {
      palette: this.state.palette,
      name: this.state.name,
      job: this.state.job,
      phone: this.state.phone,
      photo: this.state.photo.url,
      email: this.state.email,
      linkedin: this.state.linkedin,
      github: this.state.github,
    };

    getDataFromApi(data).then((response) => {
      if (response.success === true) {
        this.setState({
          apiError: "",
          apiCardURL: response.cardURL,
          apiSuccess: true,
        });
      } else {
        this.setState({
          apiError: response.error,
          apiCardURL: "",
          apiSuccess: false,
        });
      }
    });
  }

  render() {
    return (
      <>
        <Header></Header>
        <main className="main-all">
          <section className="main-all__photo main-all__img">
            <PreviewCard
              name={this.state.name}
              job={this.state.job}
              phone={this.state.phone}
              email={this.state.email}
              linkedin={this.state.linkedin}
              github={this.state.github}
              photo={this.state.photo.url}
              palette={this.state.palette}
              handleReset={this.handleReset}
            ></PreviewCard>
          </section>
          <section className="main-all__photo main-photo__design">
            <Form
              name={this.state.name}
              job={this.state.job}
              phone={this.state.phone}
              email={this.state.email}
              linkedin={this.state.linkedin}
              github={this.state.github}
              photo={this.state.photo}
              palette={this.state.palette}
              // inputValue={this.state}
              handleChange={this.handleChange}
              updateAvatar={this.updateAvatar}
              handlePalette={this.handlePalette}
              handleClickCreate={this.handleClickCreate}
              apiError={this.state.apiError}
              cardURL={this.state.cardURL}
              apiSuccess={this.state.apiSuccess}
            ></Form>
          </section>
        </main>
        <Footer></Footer>
      </>
    );
  }
}

export default CardGenerator;

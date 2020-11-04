import React from "react";
import logo from "../images/divas-cards.png";
import "../stylesheets/layout/_header.scss";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header">
          <img className="header__photo" src={logo} alt="Logo-tarjetas" />
        </div>
      </header>
    );
  }
}

export default Header;

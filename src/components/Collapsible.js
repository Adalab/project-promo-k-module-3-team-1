import React from "react";

class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className={this.props.sectionClass} key={this.props.id}>
        <div
          className="design__title js-form-title1 border-title"
          id={this.props.id}
        >
          <div className="design__title-container" id={this.props.id}>
            <i
              className={`far ${this.props.icon} icon-design`}
              id={this.props.id}
            ></i>
            <h2 className="design__main-title" id={this.props.id}>
              {this.props.title}
            </h2>
          </div>
          <div className="design__down-up" id={this.props.id}>
            <i
              className="far fa-gem icon-up js-arrow-up"
              id={this.props.id}
            ></i>
          </div>
        </div>
        {this.props.children}
      </section>
    );
  }
}
export default Collapsible;

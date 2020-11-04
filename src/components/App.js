import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PreviewCard from "./PreviewCard";
import Form from "./Form";

import "../stylesheets/App.scss";

class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <main className="main-all">
          <section className="main-all__photo main-all__img">
            <PreviewCard></PreviewCard>
          </section>
          <section class="main-all__photo main-photo__design">
            <Form></Form>
          </section>
        </main>
        <Footer></Footer>
      </>
    );
  }
}

export default App;

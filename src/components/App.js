import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PreviewCard from "./PreviewCard";

import "../stylesheets/App.scss";

class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <main className="main-all">
          <PreviewCard></PreviewCard>
          {/* <Form></Form> */}
        </main>
        <Footer></Footer>
      </>
    );
  }
}

export default App;

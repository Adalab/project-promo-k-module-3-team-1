import React from 'react';
import Header from './Header';
import Footer from './Footer';
import PreviewCard from './PreviewCard';
import Form from './Form';

import '../stylesheets/App.scss';

const data = {
  name: 'Marga',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
  palette: 1,
};

class App extends React.Component {
  render() {
    return (
      <>
        <Header></Header>
        <main className="main-all">
          <section className="main-all__photo main-all__img">
            <PreviewCard
            // name={data.name}
            // job={data.job}
            // phone={data.phone}
            // email={data.email}
            // linkedin={data.linkedin}
            // github={data.github}
            // photo={data.photo}
            // palette={data.palette}
            ></PreviewCard>
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

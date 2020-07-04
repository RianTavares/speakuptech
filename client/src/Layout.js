import React from 'react';
import { withRouter } from 'react-router';

import Header from "./components/Header";
import Footer from "./components/Footer";

const Body = (props) => {
  return (
    <>
      <Header />
      <main className="App">
        <section className="App__content">{props.children}</section>
      </main>
      <Footer />
    </>
  )
}

export default withRouter(Body)
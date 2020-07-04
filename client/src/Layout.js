import React from 'react';
import { withRouter } from 'react-router';

import Header from "./components/Header";

const Body = (props) => {
  return (
    <>
      <Header />
      <main className="App">
        <section className="App__content">{props.children}</section>
      </main>
    </>
  )
}

export default withRouter(Body)
import React, { useState, useEffect } from "react";

import Progress from "../../components/Progress";

const Home = () =>  {
  const [subscribers, setSubscribers] = useState(133)

  return (
    <>
    <p className="App__content__text">
      Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. 
      Aenean sit amet nisi. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. 
      Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Nec orci ornare consequat. 
      Praesent lacinia ultrices consectetur. Sed non ipsum felis.
    </p>
    <section className="App__content__subs">
      <p className="App__content__subs__count">133</p>
      <p className="App__content__subs__subtitle">Inscritos</p>
    </section>
    <Progress width={subscribers} goal="1000"/>
    </>
  )
}

export default Home;

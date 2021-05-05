import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/03/digital/video/gateway/placement/launch/Voyagers/VYGRS_2021_GWBleedingHero_ENG_COVIDUPDATE_XSite_1500X600_PV_de-DE._CB670785129_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id={12345}
          title="start"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51PxsMGHM1L._SY346_.jpg"
        />
        <Product
          id={12345}
          title="start"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51PxsMGHM1L._SY346_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={12345}
          title="start"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51PxsMGHM1L._SY346_.jpg"
        />
        <Product
          id={12345}
          title="start"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51PxsMGHM1L._SY346_.jpg"
        />
        <Product
          id={12345}
          title="start"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id={12345}
          title="start"
          price={11.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/51PxsMGHM1L._SY346_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;

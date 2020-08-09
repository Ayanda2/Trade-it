import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img className="home_image" src="Electronics.jpg" alt="hedphones" />
      <Product
        id="1"
        title="ASUS VivoBook 15 "
        price={7021}
        rating={3}
        image="asus.jpg"
      ></Product>
    </div>
  );
}

export default Home;

import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img className="home_image" src="Electronics.jpg" alt="Electronics" />
      <div className="home_row">
        <Product
          id="1"
          title="ASUS VivoBook 15 "
          price={7021}
          rating={4}
          image="asus.jpg"
        ></Product>
        <Product
          id="2"
          title="AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop  "
          price={2824}
          rating={5}
          image="core.jpg"
        ></Product>
      </div>
      <div className="home_row">
        <Product
          id="3"
          title="WD 2TB Elements Portable External Hard Drive"
          price={1041}
          rating={5}
          image="drive.jpg"
        ></Product>
        <Product
          id="4"
          title="Apple iPad (10.2-inch, Wi-Fi, 32GB) "
          price={5453}
          rating={5}
          image="ipad.jpg"
        ></Product>
        <Product
          id="5"
          title="TP-Link AC1750 Smart WiFi Router - Dual Band"
          price={1129}
          rating={5}
          image="router.jpg"
        ></Product>
      </div>
      <div className="home_row">
        <Product
          id="6"
          title="Sceptre 24 Curved 75Hz Gaming LED Monitor Full HD 1080P HDMI VGA Speakers"
          price={2276}
          rating={5}
          image="curve.jpg"
        ></Product>
      </div>
    </div>
  );
}

export default Home;

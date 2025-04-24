import React from "react";
import Card from "./card";
import watch_1 from "../assets/images/watch (1).jpg";
import watch_2 from "../assets/images/watch (2).jpg";
import watch_3 from "../assets/images/watch (3).jpg";
import watch_4 from "../assets/images/watch (4).jpg";
import watch_5 from "../assets/images/watch (5).jpg";

const Watch = () => {
  return (
    <>
      {/* Watch 1 Card */}
      <Card
        product_image={watch_1}
        product_image_alt="Rolex Watch Image"
        product_price="$200"
        product_name="Rolex"
        product_location="London"
      />

      {/* Watch 2 Card */}
      <Card
        product_image={watch_2}
        product_image_alt="Omega Watch Image"
        product_price="$180"
        product_name="Omega Seamaster"
        product_location="New York"
      />

      {/* Watch 3 Card */}
      <Card
        product_image={watch_3}
        product_image_alt="Fossil Watch Image"
        product_price="$120"
        product_name="Fossil Grant"
        product_location="Berlin"
      />

      {/* Watch 4 Card */}
      <Card
        product_image={watch_4}
        product_image_alt="Casio Watch Image"
        product_price="$90"
        product_name="Casio G-Shock"
        product_location="Tokyo"
      />

      {/* Watch 5 Card */}
      <Card
        product_image={watch_5}
        product_image_alt="Tissot Watch Image"
        product_price="$150"
        product_name="Tissot Classic"
        product_location="Paris"
      />
    </>
  );
};

export default Watch;

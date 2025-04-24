import React from "react";
import Card from "./card";
import shoes_1 from "../assets/images/shoes (1).jpg";
import shoes_2 from "../assets/images/shoes (2).jpg";
import shoes_3 from "../assets/images/shoes (3).jpg";
import shoes_4 from "../assets/images/shoes (4).jpg";
import shoes_5 from "../assets/images/shoes (5).jpg";

const Shoes = () => {
  return (
    <>
      {/* shoes 1 Card */}
      <Card
        product_image={shoes_1}
        product_image_alt="Nike Air Max Image"
        product_price="$140"
        product_name="Nike Air Max"
        product_location="Los Angeles"
      />

      {/* shoes 2 Card */}
      <Card
        product_image={shoes_2}
        product_image_alt="Adidas Ultraboost Image"
        product_price="$160"
        product_name="Adidas Ultraboost"
        product_location="Berlin"
      />

      {/* shoes 3 Card */}
      <Card
        product_image={shoes_3}
        product_image_alt="Puma RS-X Image"
        product_price="$110"
        product_name="Puma RS-X"
        product_location="Toronto"
      />

      {/* shoes 4 Card */}
      <Card
        product_image={shoes_4}
        product_image_alt="Reebok Classic Image"
        product_price="$95"
        product_name="Reebok Classic"
        product_location="Manchester"
      />

      {/* shoes 5 Card */}
      <Card
        product_image={shoes_5}
        product_image_alt="New Balance 990 Image"
        product_price="$175"
        product_name="New Balance 990"
        product_location="Chicago"
      />
    </>
  );
};

export default Shoes;

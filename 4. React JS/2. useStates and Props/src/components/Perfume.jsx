import React from "react";
import Card from "./card";
import perfume_1 from "../assets/images/perfume (1).jpg";
import perfume_2 from "../assets/images/perfume (2).jpg";
import perfume_3 from "../assets/images/perfume (3).jpg";
import perfume_4 from "../assets/images/perfume (4).jpg";
import perfume_5 from "../assets/images/perfume (5).jpg";

const Perfume = () => {
  return (
    <>
      {/* Perfume 1 Card */}
      <Card
        product_image={perfume_1}
        product_image_alt="Dior Sauvage Image"
        product_price="$120"
        product_name="Dior Sauvage"
        product_location="Paris"
      />

      {/* Perfume 2 Card */}
      <Card
        product_image={perfume_2}
        product_image_alt="Chanel No. 5 Image"
        product_price="$150"
        product_name="Chanel No. 5"
        product_location="New York"
      />

      {/* Perfume 3 Card */}
      <Card
        product_image={perfume_3}
        product_image_alt="Creed Aventus Image"
        product_price="$180"
        product_name="Creed Aventus"
        product_location="London"
      />

      {/* Perfume 4 Card */}
      <Card
        product_image={perfume_4}
        product_image_alt="Versace Eros Image"
        product_price="$100"
        product_name="Versace Eros"
        product_location="Rome"
      />

      {/* Perfume 5 Card */}
      <Card
        product_image={perfume_5}
        product_image_alt="YSL Libre Image"
        product_price="$130"
        product_name="YSL Libre"
        product_location="Milan"
      />
    </>
  );
};

export default Perfume;

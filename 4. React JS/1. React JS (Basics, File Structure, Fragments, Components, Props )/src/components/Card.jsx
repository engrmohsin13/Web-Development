import React from "react";

const Card = ({ image, image_alt_text, user_name, user_role, description }) => {
  return (
    <>
      <div className="card">
        <div className="upperArea">
          <img src={image} alt={image_alt_text} />
        </div>
        <div className="lowerArea">
          <div className="textArea">
            <h2>{user_name}</h2>
            <h3>{user_role}</h3>
            <p>{description}</p>
          </div>
          <div className="btnsArea">
            <button>Profile</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

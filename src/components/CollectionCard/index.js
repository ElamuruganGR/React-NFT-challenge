import React from "react";
import Weth from "../../assets/weth.png";
import "./styles.css";

export const CollectionCard = ({ id, name, traits, image, setSelectedPunk }) => {
  console.log("trait:", traits?.value);
  return (
    <div className="collection-card" onClick={() => setSelectedPunk(id)}>
      <div className="card-image-container">
        <img src={image} alt="Punk" />
      </div>
      <div className="metadata">
        <div className="details">
          <div className="name">
            {name} #{id}
          </div>
          <div className="id">.#{id}</div>
        </div>
        <div className="price-container">
          <img src={Weth} alt="Weth" />
          <div className="price">{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  );
};

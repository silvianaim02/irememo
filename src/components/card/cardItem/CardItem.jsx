import React from "react";
import CardItemButton from "./CardItemButton";
import "./CardItem.css";

const CardItem = () => {
  return (
    <div className="card-item-wrapper">
      {/* title and dates notes */}
      <div className="card-item-header">
        <p className="dates-item">31 Juli, 2022</p>
        <h4 className="title-item">Penggunaan React Hook</h4>
      </div>
      {/* content of card item */}
      <div className="card-item-body">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap
        </p>
      </div>
      {/* button of card item */}
      <CardItemButton />
    </div>
  );
};

export default CardItem;

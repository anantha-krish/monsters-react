import React from "react";
import Card from "../card/card.component";
import "./card-list.component.css";
const CardList = ({ dataList }) => (
  <div className="card-list">
    {dataList.map((data) => (
      <Card key={data.id} data={data} />
    ))}
  </div>
);
export default CardList;

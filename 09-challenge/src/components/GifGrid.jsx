import React from "react";
import { useEffect } from "react";

const GiftGrid = ({ category }) => {
  useEffect(() => {
    console.log(category);
  });
  return (
    <>
      <h3>{category}</h3>
    </>
  );
};

export default GiftGrid;

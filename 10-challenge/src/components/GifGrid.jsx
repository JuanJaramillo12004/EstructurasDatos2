import React from "react";
import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {
  const [gifList, setGifList] = useState([]);

  const getImages = async () => {
    const gifList = await getGifs(category);
    setGifList(gifList);
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      {gifList.map((gif, key) => {
        return <GifItem key={key} {...gif} />;
      })}
    </>
  );
};

export default GifGrid;

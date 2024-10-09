import { useState } from "react";
import "./App.css";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


const App = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (category) => {
    setCategories((list) => [...list, category]);
  };

  return (
    <>
      <h1>Categories</h1>

      <AddCategory onAddCategory={onAddCategory} />
      {categories.map((category, key) => {
        return <GifGrid category={category} key={key} />;
      })}
    </>
  );
};

export default App;
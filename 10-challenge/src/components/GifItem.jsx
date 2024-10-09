const GifItem = ({ gif }) => {
  return (
    <div className="Gif">
      <img src={gif.url} alt={gif.title} />
      <p>{gif.title}</p>
    </div>
  );
};

export default GifItem;
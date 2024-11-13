import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon, setCounter, incrementCounter, decrementCounter } from "../../slice/pokemonSlice";
import "../../assets/css/Pokemon.css";

const PokemonApp = () => {
  const dispatch = useDispatch();
  const { counter, data, isLoading, hasError } = useSelector((state) => state.pokemon);

  useEffect(() => {
    const savedCounter = localStorage.getItem("pokemonCounter");
    if (savedCounter) {
      dispatch(setCounter(Number(savedCounter)));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPokemon(counter));
    localStorage.setItem("pokemonCounter", counter);
  }, [counter, dispatch]);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="pokedex">
      {isLoading ? (
        <div className="alert alert-info">Loading...</div>
      ) : (
        data && (
          <div className="pokemon-info">
            <h2 className="pokedex-title">Pokemon #{counter} de la Pokedex</h2>
            <h2 className="pokemon-name">{capitalizeFirstLetter(data.name)}</h2>
            <img
              className="pokemon-image"
              src={data.sprites.front_default}
              alt={data.name}
            />
          </div>
        )
      )}

      {hasError && (
        <div className="alert alert-danger">Error fetching data</div>
      )}

      <button className="btn btn-primary next-button" onClick={() => dispatch(decrementCounter())}>
        Previous Pokemon
      </button>

      <button className="btn btn-primary next-button" onClick={() => dispatch(incrementCounter())}>
        Next Pokemon
      </button>
    </div>
  );
};

export default PokemonApp;

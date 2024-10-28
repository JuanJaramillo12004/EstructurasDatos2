import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${counter}`
  );

  return (
    <div>
      <h1>MultipleCustomHooks</h1>
      {isLoading ? (
        <div className="alert alert-info">Loading...</div>
      ) : (
        data && (
          <div>
            <h2>{data.name}</h2>
            <img src={data.sprites.front_default} alt={data.name} />
          </div>
        )
      )}

      {hasError && (
        <div className="alert alert-danger">Error fetching data</div>
      )}

      <button className="btn btn-primary" onClick={increment}>
        Next Pokemon
      </button>
    </div>
  );
};

export default MultipleCustomHooks;
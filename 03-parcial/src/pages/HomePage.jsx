import React from 'react';
import "../assets/css/HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-card">
        <h1 className="homepage-title">Bienvenido a la Pokedex y al To Do</h1>
        <p className="homepage-description">Explora la Pokedex para conocer más sobre tus Pokémon favoritos y gestiona tus tareas con la lista To Do.</p>
      </div>
    </div>
  );
};

export default HomePage;
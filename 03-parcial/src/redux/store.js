import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slice/todoSlice';
import pokemonReducer from '../slice/pokemonSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    pokemon: pokemonReducer,
  },
});
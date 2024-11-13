import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPokemon = createAsyncThunk(
  "pokemon/fetchPokemon",
  async (counter, { getState }) => {
    const { pokemon } = getState();
    if (pokemon.cache[counter]) {
      return { counter, data: pokemon.cache[counter] };
    }
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    const data = await response.json();
    return { counter, data };
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    data: null,
    isLoading: false,
    hasError: false,
    counter: 1,
    cache: {},
  },
  reducers: {
    incrementCounter: (state) => {
      state.counter += 1;
    },
    decrementCounter: (state) => {
      if (state.counter > 1) {
        state.counter -= 1;
      }
    },
    setCounter: (state, action) => {
      state.counter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemon.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchPokemon.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.data;
        state.cache[action.payload.counter] = action.payload.data;
      })
      .addCase(fetchPokemon.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const { incrementCounter, decrementCounter, setCounter } = pokemonSlice.actions;

export default pokemonSlice.reducer;

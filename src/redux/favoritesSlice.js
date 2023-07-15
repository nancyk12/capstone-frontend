import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    setFavorites(state, action) {
      return action.payload;
    },
    addToFavorites(state, action) {
      const animal = action.payload;
      state.push(animal);
    },
    removeFromFavorites(state, action) {
      const animalId = action.payload;
      return state.filter((animal) => animal.id !== animalId);
    },
    removeAllFromFavorites() {
      return [];
    },
  },
});

export const {
  setFavorites,
  addToFavorites,
  removeFromFavorites,
  removeAllFromFavorites,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;
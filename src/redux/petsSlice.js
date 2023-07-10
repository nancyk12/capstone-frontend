// src/redux/petsSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  animals: [],
  selected: '',
  zipcode: '',
  loading: false,
  error: null,
};

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    fetchAnimalsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchAnimalsSuccess(state, action) {
      state.animals = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchAnimalsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    setSelected(state, action) {
      state.selected = action.payload;
    },
    setZipcode(state, action) {
      state.zipcode = action.payload;
    },
  },
});

export const {
  fetchAnimalsStart,
  fetchAnimalsSuccess,
  fetchAnimalsFailure,
  setSelected,
  setZipcode,
} = petsSlice.actions;

export default petsSlice.reducer;
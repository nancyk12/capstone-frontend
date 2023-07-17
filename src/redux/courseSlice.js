import { createSlice } from '@reduxjs/toolkit';

const courseSlice = createSlice({
  name: 'enroll',
  initialState: [],
  reducers: {
    addToEnroll: (state, action) => {
      const course = action.payload;
      const existingCourse = state.find((unit) => unit._id === course._id);

      if (existingCourse) {
        existingCourse.quantity += 1;
      } else {
        state.push({ ...course, quantity: 1 });
      }
    },
    removeFromEnroll: (state, action) => {
      const courseId = action.payload;
      return state.filter((unit) => unit._id !== courseId);
    },

    removeAllFromEnroll: () => {
      return [];
    },

  },
});

export const {
  addToEnroll,
  removeFromEnroll,
  removeAllFromEnroll, 

} = courseSlice.actions;

export default courseSlice.reducer;
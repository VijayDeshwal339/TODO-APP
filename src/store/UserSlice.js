// Import necessary modules from redux toolkit
import { createSlice } from '@reduxjs/toolkit';

// Initial state for the user slice
const initialState = {
  isAuthenticated: false,
  tasks: [],
};

// Create a user slice using createSlice from redux toolkit
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state,action) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    addTask: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

// Export actions and reducer from the user slice
export const { login, logout, addTask, deleteTask } = userSlice.actions;
export default userSlice.reducer;

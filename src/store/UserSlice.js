import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  tasks: [],
};


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


export const { login, logout, addTask, deleteTask } = userSlice.actions;
export default userSlice.reducer;

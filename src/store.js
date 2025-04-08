import { configureStore, createSlice } from "@reduxjs/toolkit";

// Load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    return undefined;
  }
};

// Save state to localStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

// Counter Slice
const counterSlice = createSlice({
  name: "counter",
  initialState: loadState() || { count: 0 }, // Load state from localStorage
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

// Export actions
export const { increment, decrement, reset } = counterSlice.actions;

// Create Redux store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Save state whenever it changes
store.subscribe(() => {
  saveState(store.getState().counter);
});

export default store;

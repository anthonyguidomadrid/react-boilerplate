import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// Create the store with reducers (add reducers as needed)
export const store = configureStore({
  reducer: {
    // Add your reducers here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

import { configureStore } from "@reduxjs/toolkit";
import tabsSlice from "./app/tabs";


export const store = configureStore({
  reducer: {
    tab: tabsSlice,
  },
});   

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

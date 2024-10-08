import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// this should contain the initial state meant for the app
export interface ModalState {
  tabs: {
    active: string;
    data: any[];
  };
}

const initialState: ModalState = {
  tabs: {
    active: "Buoy",
    data: [
  { id: 1, name: "Buoy", iconName: "settings", backgroundColor: "red" },
  { id: 2, name: "Fresh fish", iconName: "", backgroundColor: "yellow" },
  { id: 3, name: "Sail", iconName: "", backgroundColor: "blue" },
  { id: 4, name: "Ship it", iconName: "", backgroundColor: "green" },
  { id: 5, name: "Manage it", iconName: "", backgroundColor: "pink" },
],
  },
 
};

export const appSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setActive: (state, {payload}) => {
      state.tabs.active = payload

    },
     closeModal: (state) => {
    //   state.modal.open = false
    //   state.modal.name = ""
    //   state.modal.data = {
    //     height: 0
    //   };

    },
  },
  
});

export const { setActive, closeModal } = appSlice.actions;

export default appSlice.reducer;

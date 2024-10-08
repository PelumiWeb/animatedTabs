import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// this should contain the initial state meant for the app
export interface ModalState {
  tabs: {
    active: string;
    data: any[];
  };
}

// const IconNames = [
//   { icon: "lifeBuoy", label: "Buoy" },
//   { icon: "Fish", label: "Fresh fish" },
//   { icon: "Sailboot", label: "Sail" },
//   { icon: "Ship", label: "Ship it" },
//   { icon: "ShipWheel", label: "Manage it" },
// ];

const initialState: ModalState = {
  tabs: {
    active: "Buoy",
    data: [
  { id: 1, name: "Buoy", iconName: "LifeBuoy", backgroundColor: "#FF005C" },
  { id: 2, name: "Fresh fish", iconName: "Fish", backgroundColor: "#FFBD00" },
  { id: 3, name: "Sail", iconName: "Sailboat", backgroundColor: "#00B3E6" },
  { id: 4, name: "Ship it", iconName: "Ship", backgroundColor: "#00CC96" },
  { id: 5, name: "Manage it", iconName: "ShipWheel", backgroundColor: "gold" },
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

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ReservationsState {
    value: string[];

}


const initialState: ReservationsState = {
    value: [],
};


// the name of a ourslice: reservation, we have to give
// our slice and initial state. and initialstate is 
// an object typically: where we have a value: 
//you alwywas need the reducer: homes an object, that can have methods.
export const reservationsSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
      addReservation: (state, action: PayloadAction<string>) => {
        state.value.push(action.payload);
      },
      removeReservation: (state, action: PayloadAction<number>) => {
        state.value.splice(action.payload, 1);
      },
    },
  });
  
  export const { addReservation, removeReservation } = reservationsSlice.actions;
  
  export default reservationsSlice.reducer;
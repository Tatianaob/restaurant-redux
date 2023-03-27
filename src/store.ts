import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "./features/reservationSlice";
import customerReducer from "./features/customerSlice";

//configure store takes an object: that holds our reducers and inside of our reducer we get all of our slices
export const store = configureStore({
    reducer: {
        reservations: reservationsReducer,
        customer: customerReducer,
    },
});


//tanytime we want to access our state of our application- we'll access it by roostate
export type RootState = ReturnType<typeof store.getState>


// we  also are gonna need a dispatch type:
export type AppDispatch = typeof store.dispatch;


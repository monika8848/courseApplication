import { combineReducers } from "@reduxjs/toolkit";
import { reducer } from "./slice/counter-slice";

// const counterReducer = (state = 0, action: any) => {
//   switch (action.type) {
//     case "INCREAMENT":
//       return state + 1;
//     case "DECREAMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   counter: counterReducer,
// });

// ADDED action creater and reducer functionality in slice to have slice for different functionatiolity and action
const rootReducer = combineReducers({
  counter: reducer,
});

export default rootReducer;

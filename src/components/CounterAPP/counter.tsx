import React, { useState } from "react";
import store from "../../store/store";
import { decreament, increament } from "../../store/action";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handelIncrease = () => {
    store.dispatch(increament());
    const updatedValue = store.getState().counter; // Get the updated value from the store
    setCounter(updatedValue);
  };

  const handelDecrease = () => {
    store.dispatch(decreament());
    const updatedValue = store.getState().counter; // Get the updated value from the store
    setCounter(updatedValue);
  };

  return (
    <div className=" d-flex gap-4 justify-content-center mt-5 pt-5">
      <button className="btn btn-primary" onClick={handelIncrease}>
        increase
      </button>
      <p>{counter}</p>
      <button className="btn btn-primary" onClick={handelDecrease}>
        decrease
      </button>
    </div>
  );
};

export default Counter;

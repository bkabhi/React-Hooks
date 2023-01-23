import React, { useReducer } from "react";

const ACTIONS = {
  INC: "INC",
  DEC: "DEC"
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INC:
      return { count: state.count + 1 };
    case ACTIONS.DEC:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export const UseReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h1>Counter with useReducer</h1>
      <button onClick={() => dispatch({ type: ACTIONS.DEC })}>-</button>
      <button>{state.count}</button>
      <button onClick={() => dispatch({ type: ACTIONS.INC })}>+</button>
    </div>
  );
};

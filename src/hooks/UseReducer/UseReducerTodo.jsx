import React, { useReducer } from "react";

const ACTIONS = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO"
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...state.todo,
        { id: new Date.now(), name: action.payload.name, status: false }
      ];
    default:
      return state;
  }
};
export const UseReducerTodo = () => {
  const [state, dispatch] = useReducer(reducer, { todo: [] });
  return (
    <div>
      <h1>Todo with useReducer</h1>
      <div>
        <input type="text" placeholder="add todo" />
        <button>ADD</button>
      </div>
    </div>
  );
};

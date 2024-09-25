import React, { useReducer, useState } from "react";

type CounterState = {
  count: number;
};

type ActionType = UpdateAction | ResetAction;

type UpdateAction={
    type: "increment" | "decrement";
    payload: number;
}

type ResetAction={
    type: "reset";
}

const initialState = { count: 0 };

function reducer(state: CounterState, action: ActionType) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      throw new Error();
  }
}

const Counter: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Counter: {state.count}</h1>

      <button
        onClick={() => dispatch({ type: "increment", payload: 10 })}
        style={{ marginRight: "10px" }}
      >
        Increment
      </button>

      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset"})}>
        Reset
      </button>
    </div>
  );
};

export default Counter;

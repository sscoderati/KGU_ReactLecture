import { useContext, useReducer } from "react";
import counterReducer from "../reducer/counterReducer";
import { loginContext } from "../context/loginContext";

const initialState = 0;

export default function Counter() {
  const [counter, counterDispatch] = useReducer(counterReducer, initialState);
  const { login, setLogin } = useContext(loginContext);
  const increase = () => counterDispatch({ type: "INCREASE" });
  const decrease = () => counterDispatch({ type: "DECREASE" });

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increase} disabled={!login}>
        +
      </button>
      <button onClick={decrease} disabled={!login}>
        -
      </button>
    </div>
  );
}

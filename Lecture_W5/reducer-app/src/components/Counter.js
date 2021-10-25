import counterReducer from "../reducer/counterReducer";
import { useReducer } from "react";

export default function Counter(){
	const initialState = 0;

	const [counter, counterDispatch] = useReducer(counterReducer, initialState)
	const increase = () => counterDispatch({type: "INCREASE"})
	const decrease = () => counterDispatch({type: "DECREASE"})
	return(
		<div>
			<div>{counter}</div>
			<button onClick={increase}>+</button>
			<button onClick={decrease}>-</button>
		</div>
	)
}
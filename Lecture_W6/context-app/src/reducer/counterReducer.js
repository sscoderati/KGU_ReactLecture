export default function counterReducer(counterState, action) {
	// {type: 'create', data .. .. . }
	switch (action.type) {
	  case "INCREASE":
		return counterState + 1;
	  case "DECREASE":
		return counterState - 1;
	  default:
		return counterState;
	}
  }
  
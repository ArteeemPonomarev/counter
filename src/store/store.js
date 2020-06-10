import {createStore} from "redux";

const Initialstate = {
    settedMaxValue: 5,
    settedMinValue: 0,
    value: 0,
    isSetted: false,
}

const reducer = (state = Initialstate, action) => {
    switch (action.type) {
        case 'INC-CLICK':
            let newValue;
            if (state.value < state.settedMaxValue) {
                newValue = state.value + 1;
                return {
                    ...state,
                    value: newValue
                }
            } else {
                return {
                    ...state
                }
            }
        case 'RES-CLICK':
            return {
                ...state,
                value: state.settedMinValue
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;
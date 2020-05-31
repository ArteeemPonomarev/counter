import {createStore} from "redux";

const Initialstate = {
    settedMaxValue: 5,
    settedMinValue: 0,
    value: 0,
    isSetted: false,
}

const reducer = (state = Initialstate, action) => {
    return state;
}

const store = createStore(reducer);

export default store;
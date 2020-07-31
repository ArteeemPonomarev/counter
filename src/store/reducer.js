const INC_VAL = 'INC_VAL';
const RES_VAL = 'RES_VAL';
const DEACTIVATE_SET_MODE = 'DEACTIVATE_SET_MODE';
const SET_VALUES = 'SET_VALUES';
const SET_MIN_OR_MAX_VALUE = 'SET_MIN_OR_MAX_VALUE'


const InitialState = {
    settedMaxValue: 5,
    settedMinValue: 0,
    value: 0,
    isSetted: true,
}

export const reducer = (state = InitialState, action) => {
    switch (action.type) {
        case INC_VAL:
            return {
                ...state,
                value: state.value + 1
            }
        case RES_VAL:
            return {
                ...state,
                value: state.settedMinValue
            }
        case DEACTIVATE_SET_MODE:
            return {
                ...state,
                isSetted: false
            }
        case SET_VALUES:
            return {
                ...state,
                value: state.settedMinValue,
                isSetted: true
            }
        case SET_MIN_OR_MAX_VALUE:
            return {
                ...state,
                [action.title]: action.value > state[action.title] ? state[action.title] + 1 : state[action.title] - 1,
                isSetted: false
            }
        default:
            return state
    }
}

export const incCurrentValue = () => {
    return { type: INC_VAL }
}

export const resCurrentValue = () => {
    return { type: RES_VAL }
}
export const deactivateSetMode = () => {
    return { type: DEACTIVATE_SET_MODE }
}
export const setValues = () => {
    return { type: SET_VALUES}
}

export const changeSettedValue = (title, value) => {
    return { type: SET_MIN_OR_MAX_VALUE, title, value }
}

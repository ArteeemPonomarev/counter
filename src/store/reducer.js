const INC_VAL = 'INC_VAL';
const RES_VAL = 'RES_VAL';


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
import React from 'react';
import Display from "../Display/Display";
import Button from "../Button/Button";
import {BlockBorder, ButtonsBlock} from "../StyledElements/StyledElements";
import {incCurrentValue, resCurrentValue} from "../../store/reducer";
import {connect} from 'react-redux';


class CounterItem extends React.Component {


    render = () => {

        const isDisabledInc = this.props.value === this.props.settedMaxValue;
        const isDisabledRes = this.props.value === this.props.settedMinValue || !this.props.isSetted;

        const classForDisInc = isDisabledInc || !this.props.isSetted ? 'disabled' : '';
        const classForDisRes = isDisabledRes ? 'disabled' : '';

        const classForStop = this.props.isSetted && this.props.value === this.props.settedMaxValue ? 'stopCount' : '';
        const classForSetted = !this.props.isSetted ? 'settedClass' : '';

        const isErrorMax = (this.props.settedMaxValue <= this.props.settedMinValue) || this.props.settedMaxValue < 0
        const isErrorMin = (this.props.settedMaxValue <= this.props.settedMinValue) || this.props.settedMinValue < 0

        return (
            <BlockBorder>
                <Display value={this.props.value}
                         classForStop={classForStop}
                         classForSeted={classForSetted}
                         isSeted={this.props.isSetted}
                         isErrorMessage={isErrorMin || isErrorMax}/>
                <ButtonsBlock>
                    <Button onIncClick={this.props.incValue}
                            disabled={isDisabledInc}
                            classForDis={classForDisInc}>
                        Inc
                    </Button>
                    <Button onIncClick={this.props.resValue}
                            disabled={isDisabledRes}
                            classForDis={classForDisRes}>
                        Res
                    </Button>
                </ButtonsBlock>
            </BlockBorder>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        settedMaxValue: state.settedMaxValue,
        settedMinValue: state.settedMinValue,
        value: state.value,
        isSetted: state.isSetted
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incValue: () => {dispatch(incCurrentValue())},
        resValue: () => {dispatch(resCurrentValue())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterItem);
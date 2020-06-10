import React from 'react';
import Display from "../Display/Display";
import Button from "../Button/Button";
import {BlockBorder, ButtonsBlock} from "../StyledElements/StyledElements";
import {connect} from "react-redux";


class CounterItem extends React.Component {
    render = () => {

        const isDisabledInc = this.props.value === this.props.settedMaxValue;
        const isDisabledRes = this.props.value === this.props.settedMinValue || !this.props.isSetted;

        const classForDisInc = isDisabledInc || !this.props.isSetted ? 'disabled' : '';
        const classForDisRes = isDisabledRes ? 'disabled' : '';

        const classForStop = this.props.isSetted && this.props.state.value === this.props.settedMaxValue ? 'stopCount' : '';
        const classForSetted = !this.props.isSetted ? 'settedClass' : '';

        return (
            <BlockBorder>
                <Display value={this.props.value}
                         // classForStop={classForStop}
                         // classForSeted={classForSetted}
                         // isSeted={this.props.isSetted}
                         // isErrorMessage={this.props.isError}
                />
                <ButtonsBlock>
                    <Button onIncClick={() => {this.props.onIncClick()}}
                            // disabled={isDisabledInc}
                            // classForDis={classForDisInc}
                    >
                        Inc
                    </Button>
                    <Button onIncClick={this.props.onResClick}
                            // disabled={isDisabledRes}
                            // classForDis={classForDisRes}
                    >
                        Res
                    </Button>
                </ButtonsBlock>
            </BlockBorder>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.value,
        settedMaxValue: state.settedMaxValue,
        settedMinValue: state.settedMinValue,
        isSetted: state.isSetted
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncClick: () => {
            const action ={
                type: 'INC-CLICK'
            };
            dispatch(action);
        },
        onResClick: () => {
            const action = {
                type: 'RES-CLICK',
            };
            dispatch(action)
        }
    }
}

const ConnectedCounterItem = connect(mapStateToProps, mapDispatchToProps)(CounterItem);

export default ConnectedCounterItem;
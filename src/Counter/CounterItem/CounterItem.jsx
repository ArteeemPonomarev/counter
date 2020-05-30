import React from 'react';
import Display from "../Display/Display";
import Button from "../Button/Button";
import {BlockBorder, ButtonsBlock} from "../StyledElements/StyledElements";


class CounterItem extends React.Component {
    render = () => {

        const isDisabledInc = this.props.state.value === this.props.state.settedMaxValue;
        const isDisabledRes = this.props.state.value === this.props.state.settedMinValue || !this.props.state.isSetted;

        const classForDisInc = isDisabledInc || !this.props.state.isSetted ? 'disabled' : '';
        const classForDisRes = isDisabledRes ? 'disabled' : '';

        const classForStop = this.props.state.isSetted && this.props.state.value === this.props.state.settedMaxValue ? 'stopCount' : '';
        const classForSetted = !this.props.state.isSetted ? 'settedClass' : '';

        return (
            <BlockBorder>
                <Display value={this.props.state.value}
                         classForStop={classForStop}
                         classForSeted={classForSetted}
                         isSeted={this.props.isSetted}
                         isErrorMessage={this.props.isError}/>
                <ButtonsBlock>
                    <Button onIncClick={this.props.onIncClick}
                            disabled={isDisabledInc}
                            classForDis={classForDisInc}>
                        Inc
                    </Button>
                    <Button onIncClick={this.props.onResClick}
                            disabled={isDisabledRes}
                            classForDis={classForDisRes}>
                        Res
                    </Button>
                </ButtonsBlock>
            </BlockBorder>
        )
    }
}

export default CounterItem;
import React from 'react';
import style from './CounterItem.module.css';
import Display from "../Display";
import Button from "../Button";

class CounterItem extends React.Component {
    render = () => {

        const isDisabledInc = this.props.state.value === this.props.state.settedMaxValue;
        const isDisabledRes = this.props.state.value === this.props.state.settedMinValue || !this.props.state.isSetted;

        const classForDisInc = isDisabledInc || !this.props.state.isSetted ? 'disabled' : '';
        const classForDisRes = isDisabledRes ? 'disabled' : '';

        const classForStop = this.props.state.isSetted && this.props.state.value === this.props.state.settedMaxValue ? 'stopCount' : '';
        const classForSetted = !this.props.state.isSetted ? 'settedClass' : '';

        return (
            <div className={style.counterItem}>
                <Display value={this.props.state.value}
                         classForStop={classForStop}
                         classForSeted={classForSetted}
                         isSeted={this.props.isSetted}
                         isErrorMessage={this.props.isError}/>
                <div className={style.buttonsBlock}>
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
                </div>

            </div>
        )
    }
}

export default CounterItem;
import React from 'react';
import style from './Counter.module.css';
import Button from "./Button";


class Counter extends React.Component {

    state = {
        maxValue: 5,
        minValue: 0,
        value: 0,
    }

    onIncClick = () => {
        if (this.state.value < this.state.maxValue) {
            this.setState({
                value: this.state.value + 1
            })
        }
    }

    onResClick = () => {
        this.setState({
            value: this.state.minValue,
            stopCount: false
        })
    }

  render = () => {

    const classForStop = this.state.value === this.state.maxValue ? 'stopCount' : '';
    const disabledInc = this.state.value === this.state.maxValue;
    const disabledRes = this.state.value === this.state.minValue;

    const classForDisInc = disabledInc ? 'disabled' : '';
    const classForDisRes = disabledRes ? 'disabled' : '';

    return (
        <div className={style.counter}>
            <div className={`${style.display} ${style[classForStop]}`}>
                {this.state.value}
            </div>
            <div className={style.buttons}>
                <Button onIncClick={this.onIncClick}
                        disabled={disabledInc}
                        classForDis={classForDisInc}>
                    Inc
                </Button>
                <Button onIncClick={this.onResClick}
                        disabled={disabledRes}
                        classForDis={classForDisRes}>
                    Res
                </Button>
            </div>
        </div>
    );
  }
}

export default Counter;

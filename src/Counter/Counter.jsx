import React from 'react';
import style from './Counter.module.css';
import Button from "./Button";
import Display from "./Display";


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

    onMaxValueChange = (e) => {
        if (e.currentTarget.value > this.state.maxValue) {
            this.setState({
                maxValue: this.state.maxValue + 1
            })
        } else {
            this.setState({
                maxValue: this.state.maxValue - 1
            })
        }
    }

    onMinValueChange = (e) => {
        if (e.currentTarget.value > this.state.minValue) {
            this.setState({
                minValue: this.state.minValue + 1
            })
        } else {
            this.setState({
                minValue: this.state.minValue - 1
            })
        }
    }

  render = () => {

    const classForStop = this.state.value === this.state.maxValue ? 'stopCount' : '';
    const disabledInc = this.state.value === this.state.maxValue;
    const disabledRes = this.state.value === this.state.minValue;

    const classForDisInc = disabledInc ? 'disabled' : '';
    const classForDisRes = disabledRes ? 'disabled' : '';

    return (
        <div className={style.wrapper}>
        <div className={style.counter}>
            <Display value={this.state.value}
                     classForStop={classForStop}/>

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
      <div className={style.counter}>
          <div className={`${style.display} ${style.values}`}>
              <div>maxValue : <input type="number" value = {this.state.maxValue} onChange={this.onMaxValueChange}/></div>
              <div>minValue : <input type="number" value = {this.state.minValue} onChange={this.onMinValueChange}/></div>
          </div>

          <div className={style.buttons}>
              <Button onIncClick={this.onIncClick}
                      disabled={disabledInc}
                      classForDis={classForDisInc}>
                  Set
              </Button>

          </div>
      </div>
      </div>
    );
  }
}

export default Counter;

import React from 'react';
import style from './Counter.module.css';
import Button from "./Button";
import Display from "./Display";
import InputSet from "./InputSet";


class Counter extends React.Component {

    componentDidMount() {
        this.restoreState()
    }

    state = {

        settedMaxValue: 5,
        settedMinValue: 0,
        maxValue: 5,
        minValue: 0,
        value: 0,
        isSetted: false,
    }

    saveState = () => {
        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('counter-state', stateAsString)
    }

    restoreState = () => {
        let state = {};
        let stateAsString = localStorage.getItem('counter-state')
        if (stateAsString != null) {
            state = JSON.parse(stateAsString)
        }
        this.setState(state);
    }

    onIncClick = () => {
        if (this.state.value < this.state.maxValue) {
            this.setState({
                value: this.state.value + 1
            }, () => { this.saveState(); })
        }
    }

    onResClick = () => {
        this.setState({
            value: this.state.settedMinValue,
            stopCount: false
        }, () => { this.saveState(); })
    }

    onSettedMaxValueChange = (e) => {
        if (e.currentTarget.value > this.state.settedMaxValue) {
            this.setState({
                isSetted: false,
                settedMaxValue: this.state.settedMaxValue + 1
            }, () => { this.saveState(); })
        } else {
            this.setState({
                isSetted: false,
                settedMaxValue: this.state.settedMaxValue - 1
            }, () => { this.saveState(); })
        }
    }

    onSettedMinValueChange = (e) => {
        if (e.currentTarget.value > this.state.settedMinValue) {
            this.setState({
                isSetted: false,
                settedMinValue: this.state.settedMinValue + 1
            }, () => { this.saveState(); })
        } else {
            this.setState({
                isSetted: false,
                settedMinValue: this.state.settedMinValue - 1
            }, () => { this.saveState(); })
        }
    }


    onSetValue = () => {
        this.setState({
          isSetted: true,
          maxValue: this.state.settedMaxValue,
          minValue: this.state.settedMinValue,
          value: this.state.settedMinValue
        }, () => { this.saveState(); })
    }


  render = () => {

    const classForStop = this.state.value === this.state.maxValue ? 'stopCount' : '';
    const classForSeted = !this.state.isSetted ? 'setedClass' : '';

    const disabledInc = this.state.value === this.state.maxValue;
    const disabledRes = this.state.value === this.state.minValue;

    const isErrorMax = (this.state.settedMaxValue <= this.state.settedMinValue) || this.state.settedMaxValue < 0
    const isErrorMin = (this.state.settedMaxValue <= this.state.settedMinValue) || this.state.settedMinValue < 0


    const classForDisInc = disabledInc || !this.state.isSetted ? 'disabled' : '';
    const classForDisRes = disabledRes ? 'disabled' : '';
    const classForSetBtn = this.state.isSetted || isErrorMin || isErrorMax ? 'disabled' : '';


    return (
        <div className={style.wrapper}>
        <div className={style.counter}>
            <Display value={this.state.value}
                     classForStop={classForStop}
                     classForSeted={classForSeted}
                     isSeted={this.state.isSetted}
                     isErrorMessage={isErrorMax || isErrorMin} />

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
              <InputSet title='maxValue'
                        type='number'
                        isError={isErrorMax}
                        value={this.state.settedMaxValue}
                        onClickChange={() => {this.setState({isSetted: false})}}
                        onChangeFunc={this.onSettedMaxValueChange}/>

              <InputSet title='minValue'
                        type='number'
                        value={this.state.settedMinValue}
                        isError={isErrorMin}
                        onClickChange={() => {this.setState({isSetted: false})}}
                        onChangeFunc={this.onSettedMinValueChange}/>
          </div>

          <div className={style.buttons}>
              <Button onIncClick={this.onSetValue}
                      disabled={this.state.isSetted || isErrorMin || isErrorMax}
                      classForDis={classForSetBtn}>
                  Set
              </Button>
          </div>
      </div>
      </div>
    );
  }
}

export default Counter;

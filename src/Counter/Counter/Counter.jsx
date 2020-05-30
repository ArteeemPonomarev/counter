import React from 'react';
import style from './Counter.module.css';
import CounterItem from "../CounterItem/CounterItem";
import SettingItem from "../SettingItem/SettingItem";


class Counter extends React.Component {

    componentDidMount() {
        this.restoreState()
    }

    state = {
        settedMaxValue: 5,
        settedMinValue: 0,
        value: 0,
        isSetted: false,
    }

    saveState = () => {

        let stateAsString = JSON.stringify(this.state);
        localStorage.setItem('counter-state', stateAsString)
    }

    restoreState = () => {

        let stateAsString = localStorage.getItem('counter-state')
        if (stateAsString != null) {
            let state = JSON.parse(stateAsString);
            this.setState(state);
        }
    }

    onIncClick = () => {
        if (this.state.value < this.state.settedMaxValue) {
            this.setState({
                value: this.state.value + 1
            }, () => {
                this.saveState();
            })
        }
    }

    onResClick = () => {
        this.setState({
            value: this.state.settedMinValue,
        }, () => {
            this.saveState();
        })
    }

    onSettedValueChange = (e) => {
        const title = e.target.dataset.title
        let value;
        let property;
        if (title === 'maxValue') {
            value = this.state.settedMaxValue
            property = 'settedMaxValue'
        } else {
            value = this.state.settedMinValue
            property = 'settedMinValue'
        }
        if (e.currentTarget.value > value) {
            this.setState({
                isSetted: false,
                [property]: value + 1
            }, () => {
                this.saveState();
            })
        } else {
            this.setState({
                isSetted: false,
                [property]: value - 1
            }, () => {
                this.saveState();
            })
        }
    }


    onSetValue = () => {
        this.setState({
            isSetted: true,
            value: this.state.settedMinValue
        }, () => {
            this.saveState();
        })
    }

    deactivateSetMode = () => {
        this.setState({
            isSetted: false
        })
    }


    render = () => {


        const isErrorMax = (this.state.settedMaxValue <= this.state.settedMinValue) || this.state.settedMaxValue < 0
        const isErrorMin = (this.state.settedMaxValue <= this.state.settedMinValue) || this.state.settedMinValue < 0


        return (

            <div className={style.wrapper}>
                <CounterItem state={this.state}
                             isError={isErrorMin || isErrorMax}
                             onIncClick={this.onIncClick}
                             onResClick={this.onResClick}
                             isSetted={this.state.isSetted}/>

                <SettingItem settedMaxValue={this.state.settedMaxValue}
                             settedMinValue={this.state.settedMinValue}
                             isSetted={this.state.isSetted}
                             onSettedValueChange={this.onSettedValueChange}
                             onSetValue={this.onSetValue}
                             deactivateSetMode={this.deactivateSetMode}/>
            </div>
        );
    }
}

export default Counter;

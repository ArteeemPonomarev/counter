import React from 'react';
import style from './Counter.module.css';
import CounterItem from "../CounterItem/CounterItem";
import SettingItem from "../SettingItem/SettingItem";
import {incCurrentValue, resCurrentValue} from "../../store/reducer";
import {connect} from 'react-redux';


class Counter extends React.Component {


      onSettedValueChange = (e) => {
        const title = e.target.dataset.title
        let value;
        let property;
        if (title === 'maxValue') {
            value = this.props.settedMaxValue
            property = 'settedMaxValue'
        } else {
            value = this.props.settedMinValue
            property = 'settedMinValue'
        }
        if (e.currentTarget.value > value) {
            this.setState({
                isSetted: false,
                [property]: value + 1
            })
        } else {
            this.setState({
                isSetted: false,
                [property]: value - 1
            })
        }
    }


    onSetValue = () => {
        this.setState({
            isSetted: true,
            value: this.props.settedMinValue
        })
    }

    deactivateSetMode = () => {
        this.setState({
            isSetted: false
        })
    }


    render = () => {

        return (

            <div className={style.wrapper}>
                <CounterItem />

                <SettingItem
                    // settedMaxValue={this.props.settedMaxValue}
                    //          settedMinValue={this.props.settedMinValue}
                    //          isSetted={this.props.isSetted}
                    //          onSettedValueChange={this.onSettedValueChange}
                    //          onSetValue={this.onSetValue}
                    //          deactivateSetMode={this.deactivateSetMode}
                />
            </div>
        );
    }
}


export default Counter;

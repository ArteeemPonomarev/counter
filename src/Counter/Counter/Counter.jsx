import React from 'react';
import style from './Counter.module.css';
import CounterItem from "../CounterItem/CounterItem";
import SettingItem from "../SettingItem/SettingItem";
import {connect} from "react-redux";


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


        const isErrorMax = (this.props.settedMaxValue <= this.props.settedMinValue) || this.props.settedMaxValue < 0
        const isErrorMin = (this.props.settedMaxValue <= this.props.settedMinValue) || this.props.settedMinValue < 0


        return (

            <div className={style.wrapper}>
                <CounterItem
                    // state={this.state}
                    //          isError={isErrorMin || isErrorMax}
                             // isSetted={this.state.isSetted}
                />

                <SettingItem settedMaxValue={this.props.settedMaxValue}
                             settedMinValue={this.props.settedMinValue}
                             isSetted={this.props.isSetted}
                             onSettedValueChange={this.onSettedValueChange}
                             onSetValue={this.onSetValue}
                             deactivateSetMode={this.deactivateSetMode}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        settedMaxValue: state.settedMaxValue,
        settedMinValue: state.settedMinValue,
        value: state.value,
        isSetted: state.isSetted,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//
//     }
// }

export default connect(mapStateToProps)(Counter);

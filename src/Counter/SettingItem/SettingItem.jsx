import React from "react";
import style from './SettingItem.module.css'
import InputSet from "../InputSet";
import Button from "../Button";


class SettingItem extends React.Component {
    render = () => {

        const isErrorMax = (this.props.settedMaxValue <= this.props.settedMinValue) || this.props.settedMaxValue < 0
        const isErrorMin = (this.props.settedMaxValue <= this.props.settedMinValue) || this.props.settedMinValue < 0

        const classForSetBtn = this.props.isSetted || isErrorMin || isErrorMax ? 'disabled' : '';

        return (
            <div className={style.settingsBlock}>
                <div className={`${style.display} ${style.values}`}>

                    <InputSet title='maxValue'
                              type='number'
                              isError={isErrorMax}
                              value={this.props.settedMaxValue}
                              onClickChange={this.props.deactivateSetMode}
                              onChangeFunc={this.props.onSettedValueChange}/>

                    <InputSet title='minValue'
                              type='number'
                              value={this.props.settedMinValue}
                              isError={isErrorMin}
                              onClickChange={this.props.deactivateSetMode}
                              onChangeFunc={this.props.onSettedValueChange}/>
                </div>

                <div className={style.buttonsBlock}>
                    <Button onIncClick={this.props.onSetValue}
                            disabled={this.props.isSetted || isErrorMin || isErrorMax}
                            classForDis={classForSetBtn}>
                        Set
                    </Button>
                </div>
            </div>
        )
    }
}

export default SettingItem;
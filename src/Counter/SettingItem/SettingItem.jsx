import React from "react";
import style from './SettingItem.module.css'
import InputSet from "../InputSet/InputSet";
import Button from "../Button/Button";
import {BlockBorder, ButtonsBlock, DisplayBlock} from "../StyledElements/StyledElements";
import {connect} from 'react-redux';
import {changeSettedValue, deactivateSetMode, setValues} from "../../store/reducer";


class SettingItem extends React.Component {

    onSettedValueChange = (e) => {
        const title = e.target.dataset.title
        let property;
        if (title === 'maxValue') {
            property = 'settedMaxValue'
        } else {
            property = 'settedMinValue'
        }
        this.props.changeSettedValue(property, e.currentTarget.value)
    }


    render = () => {

        const isErrorMax = (this.props.settedMaxValue <= this.props.settedMinValue) || this.props.settedMaxValue < 0
        const isErrorMin = (this.props.settedMaxValue <= this.props.settedMinValue) || this.props.settedMinValue < 0

        const classForSetBtn = this.props.isSetted || isErrorMin || isErrorMax ? 'disabled' : '';

        return (
            <BlockBorder>
                <DisplayBlock>
                    <div className={style.values}>
                        <InputSet title='maxValue'
                                  type='number'
                                  isError={isErrorMax}
                                  value={this.props.settedMaxValue}
                                  onClickChange={this.props.deactivateSetMode}
                                  onChangeFunc={this.onSettedValueChange}/>

                        <InputSet title='minValue'
                                  type='number'
                                  value={this.props.settedMinValue}
                                  isError={isErrorMin}
                                  onClickChange={this.props.deactivateSetMode}
                                  onChangeFunc={this.onSettedValueChange}/>
                    </div>
                </DisplayBlock>

                <ButtonsBlock>
                    <Button onIncClick={this.props.setValues}
                            disabled={this.props.isSetted || isErrorMin || isErrorMax}
                            classForDis={classForSetBtn}>
                        Set
                    </Button>
                </ButtonsBlock>
            </BlockBorder>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        settedMaxValue: state.settedMaxValue,
        settedMinValue: state.settedMinValue,
        value: state.value,
        isSetted: state.isSetted
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deactivateSetMode: () => {
            dispatch(deactivateSetMode())
        },
        setValues: () => {
            dispatch(setValues())
        },
        changeSettedValue: (title, value) => {
            dispatch(changeSettedValue(title, value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SettingItem);
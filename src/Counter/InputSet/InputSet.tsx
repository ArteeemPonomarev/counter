import React from 'react';
import style from './InputSet.module.css';

type PropsType ={
    isError: boolean
    title: string
    type: string
    value: string
    onClickChange: () => void
    onChangeFunc: () => void
}


class InputSet extends React.Component<PropsType> {

    render = () => {

        let classForDisabled = this.props.isError ? 'disabled' : '';

        return (
            <div>
                {this.props.title} :
                <input type={this.props.type}
                       data-title={this.props.title}
                       className={style[classForDisabled]}
                       value={this.props.value}
                       onClick={this.props.onClickChange}
                       onChange={this.props.onChangeFunc}
                />
            </div>
        )
    }
}

export default InputSet;
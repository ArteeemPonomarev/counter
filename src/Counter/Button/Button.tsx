import React from 'react';
import style from './Button.module.css'

type PropsType = {
    classForDis: string
    onIncClick: () => void
    disabled: boolean
}

type StateType ={}

class Button extends React.Component<PropsType, StateType> {
    render = () => {
        return (
            <button className={`${style.button} ${style[this.props.classForDis]}`}
                    onClick={this.props.onIncClick}
                    disabled={this.props.disabled}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;
import React from 'react';
import style from './Button.module.css'

class Button extends React.Component {
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
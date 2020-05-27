import React from 'react';
import style from "./Display.module.css";

class Display extends React.Component {
    render = () => {

        const classForErrorMessage = this.props.isErrorMessage ? 'errorMessage' : '';


        return (
            <div className={`${style.display} ${style[this.props.classForStop]} ${style[this.props.classForSetted]} ${style[classForErrorMessage]}`}>
                {!this.props.isSeted ?
                    this.props.isErrorMessage ? 'Incorrect value' : 'enter values and press set'
                    : this.props.value }
            </div>
        );
    }
}

export default Display;
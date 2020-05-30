import React from 'react';
import style from "./Display.module.css";
import {DisplayBlock} from "../StyledElements/StyledElements";

class Display extends React.Component {
    render = () => {

        const classForErrorMessage = this.props.isErrorMessage ? 'errorMessage' : '';


        return (
            <DisplayBlock>
            <div className={`${style[this.props.classForStop]} ${style[this.props.classForSetted]} ${style[classForErrorMessage]}`}>
                {!this.props.isSeted ?
                    this.props.isErrorMessage ? 'Incorrect value' : 'enter values and press set'
                    : this.props.value }
            </div>
            </DisplayBlock>
        );
    }
}

export default Display;
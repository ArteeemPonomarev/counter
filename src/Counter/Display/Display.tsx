import React from 'react';
import style from "./Display.module.css";
import {DisplayBlock} from "../StyledElements/StyledElements";

type PropsType = {
    isErrorMessage: boolean
    classForStop: string
    isSeted: boolean
    value: string

}

class Display extends React.Component<PropsType> {
    render = () => {

        const classForErrorMessage = this.props.isErrorMessage ? 'errorMessage' : '';

        return (
            <DisplayBlock>
            <div className={`${style[this.props.classForStop]}  ${style[classForErrorMessage]}`}>
                {!this.props.isSeted ?
                    this.props.isErrorMessage ? 'Incorrect value' : <span className={style.values}>enter values and press 'set'</span>
                    : this.props.value }
            </div>
            </DisplayBlock>
        );
    }
}

export default Display;
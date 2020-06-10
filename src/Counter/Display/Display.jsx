import React from 'react';
import style from "./Display.module.css";
import {DisplayBlock} from "../StyledElements/StyledElements";

class Display extends React.Component {
    render = () => {

        const classForErrorMessage = this.props.isErrorMessage ? 'errorMessage' : '';

        return (
            <DisplayBlock>
            <div className={`${style[this.props.classForStop]} ${style[this.props.classForSeted]} ${style[classForErrorMessage]}`}>
                {/*{!this.props.isSeted ?*/}
                {/*    this.props.isErrorMessage ? 'Incorrect value' : <span className={style.values}>enter values and press 'set'</span>*/}
                {/*    : this.props.value }*/}
                {this.props.value}
            </div>
            </DisplayBlock>
        );
    }
}

export default Display;
import React from 'react';
import style from "./Display.module.css";

class Display extends React.Component {
    render = () => {
        return (
            <div className={`${style.display} ${style[this.props.classForStop]}`}>
                {this.props.value}
            </div>
        );
    }
}

export default Display;
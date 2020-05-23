import React from 'react';
import style from './InputSet.module.css';

class InputSet extends React.Component {
    render = () => {

        let classForDisabled = this.props.isError ? 'disabled' : '';

        return (
            <div>
                {this.props.title} :
                <input type={this.props.type}
                       className={style[classForDisabled]}
                       value = {this.props.value}
                       onClick={this.props.onClickChange}
                       onChange={this.props.onChangeFunc}/>
            </div>
        )
    }
}

export default InputSet;
import React from 'react';
import style from './Counter.module.css';
import CounterItem from "../CounterItem/CounterItem";
import SettingItem from "../SettingItem/SettingItem";


class Counter extends React.Component {


    render = () => {
        return (
            <div className={style.wrapper}>
                <CounterItem />
                <SettingItem />
            </div>
        );
    }
}


export default Counter;

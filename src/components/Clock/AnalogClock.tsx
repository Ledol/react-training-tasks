import React, {useEffect, useState} from 'react';
import style from './AnalogClock.module.css'

export const AnalogClock = () => {

    const [date, setDate] = useState(new Date())

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };

    useEffect(() => {

        const intervalID =  setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalID)
        }
    }, [])



    return (
        <div  className={style.clock}>
            <div className={style.analogClock}>
                <div className={style.dialSeconds} style={secondsStyle} />
                <div className={style.dialMinutes} style={minutesStyle}/>
                <div className={style.dialHours} style={hoursStyle}/>
            </div>
        </div>
    );
};


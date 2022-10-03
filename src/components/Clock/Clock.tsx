import React, {useEffect, useState} from 'react';

const secondNumberTime = (timeNumber: number) => timeNumber < 10 ? "0" + timeNumber : timeNumber

export const Clock = () => {

    const [date, setDate] = useState(new Date())

    let hour = secondNumberTime(date.getHours())
    let min = secondNumberTime(date.getMinutes())
    let sec = secondNumberTime(date.getSeconds())

    useEffect(() => {

        const intervalID =  setInterval(() => {
            setDate(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    return <>
        <div>
            <span>{hour}:</span>
            <span>{min}:</span>
            <span>{sec}</span>
        </div>
    </>
};

import {Clock} from "./Clock";
import {AnalogClock} from "./AnalogClock";
import {useState} from "react";

export default {
    title: "clock"
}

export const TimeExample = () => {
    return <Clock/>
}

export const AnalogClockExample = () => {
    return <AnalogClock/>
}

export const ToggleAnalogDigitalClock = () => {
    const [toggle, setToggle] = useState(false)

    return <div>
        <div> {toggle ? <AnalogClock/> : <Clock/>}</div>
        <button onClick={() => setToggle(!toggle)}>Switch clock</button>
    </div>


}
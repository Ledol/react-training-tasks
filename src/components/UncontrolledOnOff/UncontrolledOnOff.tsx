import React, {useState} from 'react';


export const UncontrolledOnOff = () => {
    const [on, setOn] = useState(false)
    console.log(`on: ${on} `)

    const onStyle = {
        width: "60px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "",
    }
    const offStyle = {
        width: "60px",
        height: "30px",
        border: "1px solid black",
        margin: "0px 5px",
        display: "inline-block",
        backgroundColor: !on ?"red" : "",
    }
    const lampStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        display: "inline-block",
        backgroundColor: on ? "green" : "red",

    }


        return (
            <div>
                <div onClick={()=> setOn(true)} style={onStyle}>ON</div>
                <div onClick={()=> setOn(false)} style={offStyle}>OFF</div>
                <div style={lampStyle}></div>
            </div>
        );

};


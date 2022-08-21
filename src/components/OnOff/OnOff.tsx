import React from 'react';


type OnOffType = {
    status: boolean
    callBack: (value: boolean) => void
}

export const OnOff = (props: OnOffType) => {

    const onStyle = {
        width: "60px",
        height: "30px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: props.status ? "green" : "",
    }
    const offStyle = {
        width: "60px",
        height: "30px",
        border: "1px solid black",
        margin: "0px 5px",
        display: "inline-block",
        backgroundColor: !props.status ?"red" : "",
    }
    const lampStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        display: "inline-block",
        backgroundColor: props.status ? "green" : "red",

    }


        return (
            <div>
                <div onClick={()=>props.callBack(true)} style={onStyle}>ON</div>
                <div onClick={()=>props.callBack(false)} style={offStyle}>OFF</div>
                <div style={lampStyle}></div>
            </div>
        );

};


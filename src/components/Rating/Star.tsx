import React from 'react';
import {RatingValueType} from "./Rating";

type StarType = {
    included: boolean
    value: RatingValueType
    callBack: (value: RatingValueType) => void
}

export const Star = (props: StarType) => {


    return <span onClick={()=>props.callBack(props.value)}>
        {props.included ? <b>star </b>: 'star '}
    </span>
};

import React from 'react';
import {Star} from "./Star";

export type RatingValueType = 0 |1 |2 |3 |4 |5;

type RatingType = {
    value: RatingValueType
    callBack: (value:RatingValueType) => void
}

export const Rating = (props: RatingType) => {

    return (
        <div>
            <Star included={props.value > 0} callBack={props.callBack} value={1}/>
            <Star included={props.value > 1} callBack={props.callBack} value={2}/>
            <Star included={props.value > 2} callBack={props.callBack} value={3}/>
            <Star included={props.value > 3} callBack={props.callBack} value={4}/>
            <Star included={props.value > 4} callBack={props.callBack} value={5}/>
        </div>
    );
};

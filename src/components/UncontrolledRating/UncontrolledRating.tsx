import React, {useState} from 'react';
import {Star} from "./UncontrolledStar";


export const UncontrolledRating = () => {
    let [value, setValue] = useState(0)

    return (
        <div>
            <Star included={value > 0} setValue={()=>setValue(1)}/>
            <Star included={value > 1} setValue={()=>setValue(2)}/>
            <Star included={value > 2} setValue={()=>setValue(3)}/>
            <Star included={value > 3} setValue={()=>setValue(4)}/>
            <Star included={value > 4} setValue={()=>setValue(5)}/>
        </div>
    );
};

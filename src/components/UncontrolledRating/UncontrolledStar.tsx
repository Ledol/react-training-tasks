import React from 'react';

type StarType = {
    included: boolean
    setValue: () => void
}

export const Star = (props: StarType) => {

    const changeStar = () =>{
        props.setValue()
    }
    return <span onClick={changeStar}>
        {props.included ? <b>star </b>: 'star '}
    </span>
};

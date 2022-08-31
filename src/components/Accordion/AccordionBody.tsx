import React from 'react';
import {ItemType} from "./Accordion";

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

export const AccordionBody = (props: AccordionBodyType) => {
    console.log('AccordionBody rendering')

    return (
        <ul>
            {props.items.map((i, index) => {
                return <li key={index}
                           onClick={()=>props.onClick(i.value)}>{i.title}</li>
            })}
        </ul>

    );
};

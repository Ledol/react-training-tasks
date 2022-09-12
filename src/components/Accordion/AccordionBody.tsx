import React from 'react';
import {ItemType} from "./Accordion";

type AccordionBodyType = {
    items: ItemType[]
    onClick: (value: any) => void
}

export const AccordionBody = React.memo((props: AccordionBodyType) => {
    console.log('AccordionBody rendering')

    const resultOfBody = props.items.map((i, index) => {
        return <li key={index}
                   onClick={()=>props.onClick(i.value)}>{i.title}</li>
    })

    return (
        <ul>
            {resultOfBody}
        </ul>

    );
});

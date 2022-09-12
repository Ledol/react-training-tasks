import React from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";


export type ItemType = {
    title: string
    value: any
}

export type AccordionType = {
    titleValue: string
    collapsed: boolean
    /**
     * callBack is called when clicked title (titleValue)
     */
    callBack: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

export const Accordion = (props: AccordionType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue} callBack={props.callBack}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    );

};

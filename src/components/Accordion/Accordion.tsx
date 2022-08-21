import React from 'react';
import {AccordionTitle} from "./AccordionTitle";
import {AccordionBody} from "./AccordionBody";

type AccordionType = {
    titleValue: string
    collapsed: boolean
    callBack: () => void
}

export const Accordion = (props: AccordionType) => {
    return (
        <div>
            <AccordionTitle title={props.titleValue} callBack={props.callBack}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );

};

import React, {useState} from 'react';
import {UncontrolledAccordionTitle} from "./UncontrolledAccordionTitle";
import {UncontrolledAccordionBody} from "./UncontrolledAccordionBody";

 type UncontrolledAccordionType = {
    titleValue: string

}

export const UncontrolledAccordion = (props: UncontrolledAccordionType) => {
     const [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <UncontrolledAccordionTitle callBack={() => setCollapsed(!collapsed)} title={props.titleValue}/>
            {!collapsed && <UncontrolledAccordionBody/>}
        </div>
    );

};

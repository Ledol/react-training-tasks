import React from 'react';

type AccordionTitleType = {
    title: string
    callBack: () => void
}

export const UncontrolledAccordionTitle = (props: AccordionTitleType) => {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={() => props.callBack()}>--- {props.title} ---</h3>
    );
};

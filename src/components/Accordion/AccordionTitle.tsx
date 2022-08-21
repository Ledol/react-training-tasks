import React from 'react';

type AccordionTitleType = {
    callBack: () => void
    title: string
}

export const AccordionTitle = (props: AccordionTitleType) => {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={(e)=>props.callBack()}>--- {props.title} ---</h3>
    );
};

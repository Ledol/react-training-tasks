import React from 'react';

type AccordionTitleType = {
    callBack: () => void
    title: string
}

export const AccordionTitle = React.memo((props: AccordionTitleType) => {
    console.log('AccordionTitle rendering')
    return (
        <h3 onClick={()=>props.callBack()}>--- {props.title} ---</h3>
    );
});

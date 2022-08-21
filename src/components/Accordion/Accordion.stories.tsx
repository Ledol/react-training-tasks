
import {Accordion} from "./Accordion";
import {useState} from "react";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Accordion stories',
    component: Accordion,
}
const actionHandler = action('accordion was change event fired')

export const MenuNotCollapsed = () => <Accordion titleValue={'Menu'} collapsed={false} callBack={actionHandler} />
export const UserCollapsed = () => <Accordion titleValue={'User'} collapsed={true} callBack={actionHandler} />
export const AccordionChange = () => {
    const [collaps, setCollaps] = useState<boolean>(false)
    return (
        <Accordion titleValue={'Menu'} collapsed={collaps} callBack={()=>setCollaps(!collaps)}/>
    )
}
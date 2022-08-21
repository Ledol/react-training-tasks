import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";
import {useState} from "react";

export default {
    title: 'OnOff stories',
    component: OnOff,
}

const actionHandler = action("Touch button On or Off ")

export const OnMode = () => <OnOff status={true} callBack={actionHandler}/>
export const OffMode = () => <OnOff status={false} callBack={actionHandler}/>
export const ChangeOnOff = () => {
    const [on, setOn] = useState<boolean>(false)
    return(
        <OnOff status={on} callBack={setOn}/>
    )
}
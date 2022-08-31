
import {Accordion, AccordionType} from "./Accordion";
import {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Story} from "@storybook/react";


export default {
    title: 'Components/Accordion stories',
    component: Accordion,
}

const actionHandler = action('accordion was change event fired')
const onClickCallback = action('some item was clicked')

const Template: Story<AccordionType> = (args) => <Accordion {...args} />

const callbacksProps = {
    callBack: actionHandler,
    onClick: onClickCallback,
}

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    ...callbacksProps,
    titleValue: "Menu",
    collapsed: false,
    items: [
        {title: "Dima", value: 1 },
        {title: "Kate", value: 2 },
        {title: "Vlad", value: 3 },
        {title: "Nikita", value: 4 },
    ],


}

export const UserCollapsed = Template.bind({});
UserCollapsed.args = {
    ...callbacksProps,
    titleValue: "User",
    collapsed: true,
    items: [],
}

export const AccordionMode: Story<AccordionType> = (args) => {
    const [value, setValue] = useState<boolean>(false)

    const callBackHandler = () => {
        setValue(!value)
    }

    return <Accordion {...args} collapsed={value} callBack={callBackHandler} />
}
AccordionMode.args = {
    titleValue: "Menu",
    items: [
        {title: "Dima", value: 1 },
        {title: "Kate", value: 2 },
        {title: "Vlad", value: 3 },
        {title: "Nikita", value: 4 },
    ],
    onClick: (value)=>{
        alert(`user with ID ${value} should be happy`)
    }

}
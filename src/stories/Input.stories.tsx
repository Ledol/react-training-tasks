
import {ChangeEvent, useRef, useState} from "react";

export default {
    title: 'Input stories',
}


export const UncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <>
        <input onChange={onChangeHandler}/> is {value}
    </>
}
export const UncontrolledInputRef = () => {
    const [value2, setValue2] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const saveValueHandler = () => {
    const el = inputRef.current as HTMLInputElement
        setValue2(el.value)
    }

    return <>
        <input ref={inputRef}/> <button onClick={saveValueHandler}>save</button> is {value2}
    </>
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler =(e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <>
        <input value={parentValue} onChange={onChangeHandler}/>
        </>
}
export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChangeHandler =(e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <>
        <input type='checkbox' checked={parentValue} onChange={onChangeHandler}/>
    </>
}
export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')
    const onChangeHandler =(e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <>
        <select value={parentValue} onChange={onChangeHandler}>
            <option value={'1'}>Minsk</option>
            <option value={'2'}>Moscow</option>
            <option value={'3'}>Kiev</option>
        </select>
    </>
}

export const ControlledInputFixed = () => <input value={"What's up"}/>

import React, {useEffect, useState} from "react";


export default {
    title: "useEffect demo"
}



export const StateExample = () => {
    console.log("StateExample")


    const [count, setCount] = useState(1)
    const [forUseEffect, setForUseEffect] = useState(5)

    useEffect(()=> {
        console.log("useEffect rendering every time")
        document.title = count.toString()
    })

    useEffect(()=> {
        console.log("useEffect render only first start")
        document.title = count.toString()
    }, [])

    useEffect(()=> {
        console.log("useEffect render first time and when change count")
        document.title = count.toString()
    }, [count])




    return <>
        <span>count - {count}</span>
        <button onClick={() => setCount(count +1)}>+</button>
        <div>
            useEffect -
            <span>{forUseEffect}</span>
            <button onClick={() => setForUseEffect(forUseEffect +1)}>+</button>
        </div>


    </>


}

export const SetTimeOutExample = () => {
    console.log("SetTimeOutExample")


    const [count, setCount] = useState<number>(1)
    const [forUseEffect, setForUseEffect] = useState<number>(5)

useEffect(()=>{

   const intervalID =  setInterval(() => {
        //console.log("tic")
        setCount((state) => state + 1)
    }, 1000)

    return () => {
        clearInterval(intervalID)
    }


}, [])

    return <>
        <span>count - {count}</span>
        <div>
            useEffect -
            <span>{forUseEffect}</span>
        </div>


    </>


}

export const ResetEffectExample = () => {

    const [count, setCount] = useState<number>(1)
    console.log("ResetEffectExample rendered " + ':' + count)

    useEffect(()=>{
        console.log('useEffect occurred ' + ':' + count)
        return ()=>{
            console.log('Reset is done ' + ':' + count)
        }

    }, [count])

    return <>

        <div>
            Hello, counter: {count} <button onClick={()=> setCount(count +1)}>+1</button>
        </div>


    </>


}

export const KeysTrackerExample = () => {

    const [text, setText] = useState<string>('')
    console.log("ResetEffectExample rendered " + text)

    useEffect(()=>{

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }

        window.addEventListener('keypress', handler)
        return ()=>{
            window.removeEventListener('keypress', handler)
            console.log('Reset is done ' + text)
        }

    }, [text])

    return <>

        <div>
            Text on press : {text}
        </div>


    </>


}


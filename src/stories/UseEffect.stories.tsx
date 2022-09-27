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
    setInterval(() => {
        //console.log("tic")
        setCount((state) => state + 1)
    }, 1000)
}, [])

    return <>
        <span>count - {count}</span>
        <div>
            useEffect -
            <span>{forUseEffect}</span>
        </div>


    </>


}


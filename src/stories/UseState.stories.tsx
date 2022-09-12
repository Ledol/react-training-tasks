import React, { useState} from "react";

export default {
    title: "useState demo"
}

function generateData () {
    console.log("generateData")
  return 3525555
}


export const useStateExample = () => {
    console.log("useStateExample")


    const [count, setCount] = useState(generateData)

    const changer = (state: number) => {
        console.log("changer")
        return state + 1
    }


    return <>
        <span>{count}</span>
        <button onClick={() => setCount(changer)}>+</button>

    </>


}
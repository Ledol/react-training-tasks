import React, {useCallback, useMemo, useState} from "react";


export default {
    title: "Use-memo"
}


export const DifficultCountingExample = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(()=>{
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while(fake < 10000000){
                fake++
                const fakeValue = Math.random();
            }
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(e) => setA(Number(e.currentTarget.value))}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>

}

const UsersContainer = (props: { users: Array<string> }) => {
    console.log("Books rendering")
    return <div>{props.users.map((u,i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersContainer);
export const ExampleToHelpReactMemo = () => {
    console.log('Help To ReactMemo rendering')

    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(["Dima", "Kate", "Vlad"])

    const addUserHandler = () => {
        let newUser = "Sveta " + new Date().getTime()
        setUsers([...users, newUser])
    }
    const filteredUsers = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])


    return <>
        <button onClick={() => setCount(count+1)}>Click</button>
        {count}
        <button onClick={addUserHandler}>Add user</button>
        <Users users={filteredUsers}/>
    </>


}





export const LikeUseCallback = () => {
    console.log('LikeUseCallback rendering')

    const [count, setCount] = useState(0)
    const [books, setBooks] = useState(["CSS", "REACT", "JS"])

    const addBookHandler = () => {
        console.log(books)
        let newBook = "REDUX " + new Date().getTime()
        setBooks([...books, newBook])
    }

    const memoizedAddBook = useCallback(addBookHandler, [books])

    return <>
        <button onClick={() => setCount(count+1)}>Click</button>
        {count}
        <Books addBookHandler={memoizedAddBook}/>
    </>
}

const BooksContainer = (props: {  addBookHandler: () => void }) => {
    console.log("Books Container rendering")
    return <>
        <button onClick={() => props.addBookHandler()}>add book</button>
    </>

}

const Books = React.memo(BooksContainer);


/*const cityValues = [
    {value: '1', title: 'Minsk'},
    {value: '2', title: 'Moscow'},
    {value: '3', title: 'Kiev'},
]

export const HelpToSelect = () => {
    console.log('HelpToSelect rendering')
    const [value, setValue] = useState('2')
    const [value2, setValue2] = useState('3')

    const copyCity = useMemo(() => {
       return cityValues.map(s => s)
    }, [cityValues])

    return (
        <>
            <Select onClick={setValue}
                    value={value}
                    items={copyCity}/>

            <Select onClick={setValue2}
                    value={value2}
                    items={copyCity}/>
        </>

    )
}*/

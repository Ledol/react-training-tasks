import React, {useState} from "react";

export default {
    title: "React-memo"
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
const UsersContainer = (props: { users: Array<string> }) => {
    console.log("Users rendering")
    return <div>{props.users.map((u,i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersContainer);


export const Example1 = () => {

    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(["Dima", "Kate", "Vlad"])

    const addUserHandler = () => {
        let newUser = "Sveta " + new Date().getTime()
        setUsers([...users, newUser])
    }

    return <>
        <button onClick={() => setCount(count+1)}>Click</button>
        <button onClick={addUserHandler}>Add user</button>

        <NewMessagesCounter count={count}/>
        <Users users={users}/>
    </>


}
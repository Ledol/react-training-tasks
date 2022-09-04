

type ActionType = toggleCollapsedACType;

export type StateType = {
    collapsed: boolean
}

export const UncontrolledAccordionReducer = (state: StateType, action: ActionType) => {
    console.log("REDUCER START")
    console.log(state)
    console.log(action)
    console.log("REDUCER FINISHED")
    switch (action.type) {
        case "TOGGLE-COLLAPSED":
            return {...state, collapsed: !state.collapsed}
        default:
            return state
    }
}

export type toggleCollapsedACType = ReturnType<typeof toggleCollapsedAC>
export const toggleCollapsedAC = () => {
    return{
        type: "TOGGLE-COLLAPSED"
    }as const

}
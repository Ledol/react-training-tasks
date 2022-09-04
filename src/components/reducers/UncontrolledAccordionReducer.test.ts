import {StateType, UncontrolledAccordionReducer} from "./UncontrolledAccordionReducer";

test("reducer should change value to opposite value", () => {

const state: StateType = {
    collapsed: false
}

const endState = UncontrolledAccordionReducer(state, {type: "TOGGLE-COLLAPSED"})


    expect(endState.collapsed).toBe(true)
})
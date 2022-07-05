const reducer = (state = {numbers: []}, action) => {
    if(action.type === "CHANGE_TEXT") {
        return {
            ...state, title: action.payload
        }
    } else if(action.type === "ADD_NUMBER") {
        return {
            ...state, numbers: [...state.numbers, +state.numbers + +action.payload]
        }
    } else {
        return state
    }
}

export default reducer;
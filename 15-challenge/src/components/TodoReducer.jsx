export const TodoReducer = (initialState, action) => {
    switch (action.type) {
        case "ABC":
            throw new Error("No se puede agregar un TODO con la palabra ABC")
            break;
        
        default:
            return initialState
    }
}
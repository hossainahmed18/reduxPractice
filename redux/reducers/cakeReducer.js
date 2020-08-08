let initialState = {
    numberOfCakes:20
}

function cakeReducer(state=initialState,action){
    switch (action.type) {
        case 'buyCakes':
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - action.payload
            }
        case 'cookCakes':
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.payload
            }
        default:
            return state
    }
}
export default cakeReducer
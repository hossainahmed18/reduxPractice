
const initialState = {
  numOfIceCreams: 20
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 1: return {
      ...state,
      numOfIceCreams: state.numOfIceCreams - 1
    }

    default: return state
  }
}

export default rootReducer
let initialState = {
    posts: []
}

function postOneReducer(state = initialState, action) {
    switch (action.type) {
        case 'addedSuccess':
            return {
                ...state,
                posts: action.payload
            }
        case 'updatedSuccess':
            return {
                ...state,
                posts: action.payload
            }
        case 'fetchSuccess':
            return {
                ...state,
                posts: action.payload
            }
        case 'suffle':
            return {
                ...state,
                posts: action.payload
            }
        case 'delete':
            let filteredPosts = state.posts.filter((item) => {
                return item.id != action.payload
            })
            return {
                ...state,
                posts: filteredPosts
            }
        default:
            return state
    }
}
export default postOneReducer
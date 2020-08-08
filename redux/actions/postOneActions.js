import axios from 'axios'

export function addPost(data,items) {
    return (dispatch) => {
        let postObject = {
            body:data.body,
            title:data.title,
            id:items.length+1,
            userId:1
        }
        axios.post('https://jsonplaceholder.typicode.com/posts', postObject)
            .then(Response => {
            
                const addedPost = {...Response.data,id:postObject.id}
                let postItems=[addedPost,...items]
                dispatch(addedSuccess(postItems))
            })
            .catch(error => {
                console.log(error)
            })

    }

}

export function addedSuccess(data) {
    return{
        type:"addedSuccess",
        payload: data
    }

}




export function updatePost(data,items) {
    return (dispatch) => {
        
        axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id}`, data)
            .then(Response => {
                let filteredPosts=items.filter((item)=>{
                    return item.id!=data.id
                 })
                let allItems=[Response.data,...filteredPosts]
                dispatch(updatedSuccess(allItems))


            })
            .catch(error => {
                console.log(error)
            })

    }

}

export function updatedSuccess(data) {
    return{
        type:"updatedSuccess",
        payload: data
    }

}

export function fetchPosts() {
    return (dispatch) => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(Response => {

                dispatch(fetchSuccess(Response.data.slice(0,20)))
            })
            .catch(error => {
                console.log(error)
            })

    }

}

export function fetchSuccess(data) {
    return{
        type:"fetchSuccess",
        payload: data
    }

}

export function sufflePost(items) {
    let posts = [...items.slice(items.length / 2),...items.slice(0, (items.length / 2))]
    return {
        type: "suffle",
        payload: posts
    }

}
export function deletePost(data) {
    return {
        type: "delete",
        payload:data
    }
}

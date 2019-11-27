import axios from "axios"

export const setPost=(post)=>{
    return{
        type:'SET_POST',
        payload:post
    }
}
export const stateInitialPost=()=>{
    return(dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            const post=response.data
            dispatch(setPost(post))
        })
    }
}

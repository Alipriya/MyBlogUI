import axios from "axios"

export const setAuthor=(author)=>{
    return {
        type:'SET_AUTHOR',
        payload:author
    }

}
export const setInitialAuthor=(id)=>{
    return(dispatch)=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response)=>{
            const author=response.data
            dispatch(setAuthor(author))
        })
    }
}
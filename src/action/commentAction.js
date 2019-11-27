import axios from 'axios'
export const setComment=(comment)=>{
    return {
        type:'SET_COMMENT',
        payload:comment
    }
}
 export const stateInitialComment=(id)=>{
    return(dispatch)=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response)=>{
            const comment=response.data
            console.log(comment)
            dispatch(setComment(comment))

        })

    }
}

const initialState={}
const authorReducer=(state=initialState,action)=>
{
    switch(action.type)
    {
        case 'SET_AUTHOR':{
            return Object.assign({},action.payload)
        }
        default:{
            return Object.assign({},state)
        }

    }
}
export default authorReducer
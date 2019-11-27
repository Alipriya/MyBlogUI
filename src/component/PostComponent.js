import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
function PostList(props)
{
    return (<div className="container">
        <div className="row">
        <div className="col-md-4 offset-md-4"style={{marginTop:"2%"}}>
        <h2>Listing Posts-{props.post.length}</h2>
        </div>
        </div>
        
        <div className="row">
            <div className="col-md-6 offset-md-3">
        {props.post.map((post)=>{
            // {pathname:{`/postShow/${post.id}`},state:  {authorId:post.userId}}
            return(<div className="modalfade" tabIndex="-1" role="dialog">
            <div  className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title"><Link to={{ pathname: `/postShow/${post.id}`, state: {authorId:post.userId}}}>{post.title}</Link></h5>
          
                </div>
                <div
                className="modal-body" style={{backgroundColor:"#A5C1F2"}}>
                  <p>{post.body}</p>
                </div>
              </div>
            </div>
          </div>)
        })}
          </div>
          </div>
          </div>)
    
        
    
    
}
const mapStateToProps=(state)=>{
   return{
    post:state.post

   } 
}
export default connect(mapStateToProps) (PostList)
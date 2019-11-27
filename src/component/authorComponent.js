import React from 'react'
import {connect} from 'react-redux'
function AuthorShowPostComponent(props)
{
        const post1=props.post.filter((post)=>{
        return post.userId==props.match.params.id
    })
    console.log("check posts ",post1)

    return(<div className="container">
        <div className="row">
        <h3>Post List By {props.author.name}</h3>
        </div>

        {post1.map((post)=>{

               return (
                   <div className="row" style={{marginTop:".5%"}}>
                   <div className="col-md-6 offset-md-3"></div>
                   <ul class="list-group-item list-group-item-action">
                   <li key={post.id} className="list-group-item list-group-item-action list-group-item-success">{post.title}</li>
                
                </ul>
                   </div>
                   ) 
              
                
            })}    </div>)
}
const mapStateToProps=(state)=>{
    return {
    author:state.author,
    post:state.post
}
}
export default connect(mapStateToProps)(AuthorShowPostComponent)
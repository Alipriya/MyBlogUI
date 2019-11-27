import React from 'react'
import {connect} from 'react-redux'
import CommentComponent from './CommentComponent'
import {setInitialAuthor} from '../action/authorAction'
import {Link} from 'react-router-dom'

class showPostComponent extends React.Component
{
    constructor(props){
    super(props)
    this.state={
        authorId:props.location.state.authorId,
        posts:{}
    }
    
    
    
}
    componentDidMount(){
        this.props.dispatch(setInitialAuthor(this.props.location.state.authorId))
        const posts=this.props.post.find((post)=>{
            //console.log("checking post ",post)
            return post.id==this.props.match.params.id
            
        })
        this.setState({posts})
    }

    render(){
        return(<div>
        {/* { pathname: `/postShow/${post.id}`, state: {authorId:post.userId}} */}
        <div className="container">
            <div className="row justify-content-center" style={{backgroundColor:'#CEEBEB',marginTop:'8%'}}>
                <div className="col-sm">
        <h3>AuthorName-<Link to={{pathname:`/authorShow/${this.state.authorId}`}}>{this.props.author.name}</Link></h3></div>
        </div>
        </div>
        <div className="container">
        <h3 style={{marginTop:"5%",color:"#2E6666"}}>PostTitle-{this.state.posts.title}</h3>
            <div className="card">
                <div className="card-body" style={{background:'#CEEBEB',paddingTop:"5%",paddingBottom:"5%"}}>
                {this.state.posts.body}
                </div>
            </div>
        </div>

        <CommentComponent id={this.props.match.params.id}/>

    </div>
    )}
}
const mapStateToProps=(state)=>{
return{
    post:state.post,
    author:state.author
}
}
export default connect(mapStateToProps) (showPostComponent)
import React from 'react'
import {connect} from 'react-redux'
import {stateInitialComment} from '../action/commentAction'

class commentComponent extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={comment:[]}
    }
    componentDidMount()
    {
        this.props.dispatch(stateInitialComment(this.props.id))


    }
    
            

    render()
    {
        return(<div>
            <div className="container">
                <div className="row justify-content-center" style={{marginTop:"10%"}}>
                    <h2>Listing comments</h2>
                </div>
            </div>
            {this.props.comment.map((comment)=>{
               return (
                   <div className="container" style={{marginTop:".5%"}}>
                   <div className="col-md-6 offset-md-3"></div>
                   <ul class="list-group-item list-group-item-action">
                   <li key={comment.id} className="list-group-item list-group-item-action list-group-item-info">{comment.name}</li>
                
                </ul>
                   </div>
                   ) 
              
                
            })}
            </div>
    )}
            
        
    
}
const mapStateToProps=(state)=>{
return{
    comment:state.comment
}
}
export default connect(mapStateToProps) (commentComponent)
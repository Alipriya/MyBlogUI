import React from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom'
import PostList from './component/PostComponent';
import showPostComponent from './component/showPostComponent'
import AuthorShowPostComponent from './component/authorComponent';


function App() {
  return (
    <BrowserRouter>
    
       
       <div className="container">     
                <div className="row justify-content-center">        
                    <h2>BLOG UI</h2> 
                </div>
        </div>
        <div classNamw="container" style={{marginTop:".5%"}}>
          <div className="row justify-content-center">
                <Link to="/post"><h5>List of Posts</h5></Link>
          </div>
        </div>
      <Route path="/post" component={PostList} exact={true}/>
      <Route path="/postShow/:id" component={showPostComponent} exact={true}/>
      <Route path="/authorShow/:id" component={AuthorShowPostComponent} exact={true}/>
      
    
    </BrowserRouter>
    
  );
}

export default App;

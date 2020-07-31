import React, { Component } from "react";
import Axios from "axios";
import Search from "../components/taskcompoment.jsx";
import Userpost from "../components/userpost/userpost.jsx";
class Task extends Component{
  constructor(){
    super();
    this.state={
      searchField:"",
      userpost:[]
    }
  };

  async componentDidMount(){
    let item=await Axios.get("https://jsonplaceholder.typicode.com/todos")
    //console.log(item)
    this.setState({userpost:item})
  }

    render(){
      console.log(this.state.searchField);
        return(
            <div className="container">
                <div className="row">
               <Search
               placeholder="search somthing....."
               search={e=>this.setState({searchField:e.target.value})}
               />
                </div>
                <div className="row">
                  <Userpost  post={this.state.userpost}/>
                </div>
            </div> 
        )
    }
    
}
export default Task;
import React, { Component } from "react";
import {Route,Switch ,Redirect}from "react-router-dom";
import Header from "./components/header/header.jsx";
import Login from "./components/login.jsx";
import Home from "./components/home.jsx";
import Task from "./components/task.jsx";
import User from "./components/user.jsx";
class App extends Component{
  constructor(){
    super();
  };
  render(){
   return(
<React.Fragment>
  <Header/>
  <Switch>
    <Route path="/"exact component={Login}/>
    <Route path="/login" exact component={Login}/>
    <Route path="/home" exact component={Home}/>
    <Route path="/task" exact component={Task}/>
    <Route path="/user" exact component={User}/>
  </Switch>
</React.Fragment>
   ) 
  }
}
export default App;
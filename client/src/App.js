


import React, { Component } from "react";
import loginPage from "./screens/loginPage";
import registerPage  from "./screens/registerPage";
import forgotPassword from "./screens/forgotPassword"
import { BrowserRouter as Router,Route } from "react-router-dom";
//import {Buttons} from "@material-ui/core/Button"
import "./App.css"
import ResetPassword from "./components/resetPassword";

class App extends Component{
  render(){
    return(
      <div>
        <Router>
          
            <div className="app">
            
              <Route path="/login" component={loginPage}></Route>
              <Route path="/register" component={registerPage}></Route>   
              <Route path="/forgotpassword" component={forgotPassword}></Route>            
              <Route path="/resetpassword" component={ResetPassword}></Route>


            </div>

          
        </Router>
      </div>
    );
  }
}

export default App;


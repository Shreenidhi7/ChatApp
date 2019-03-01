


import React, { Component } from "react";
import loginPage from "../src/screens/loginPage"
import registerPage  from "../src/screens/registerPage"
import forgotPassword from "../src/screens/forgotPassword"
import { BrowserRouter as Router,Route } from "react-router-dom";
//import {Buttons} from "@material-ui/core/Button"
import "./App.css"
import ResetPassword from "../src/screens/resetPassword";
import DashboardPage from "../src/screens/dashboardpage";

class App extends Component{
  render(){
    return(
      <div>
        <Router>
          
            <div className="app">
            
              <Route path="/login" component={loginPage}></Route>
              <Route path="/register" component={registerPage}></Route> 
              <Route path="/dashboard" component={DashboardPage}></Route>  
              <Route path="/forgotpassword" component={forgotPassword}></Route>            
              <Route path="/resetpassword" component={ResetPassword}></Route>
             

            </div>

          
        </Router>
      </div>
    );
  }
}

export default App;


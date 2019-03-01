import React, {Component} from "react";
import "../App.css"
import Reset from "../components/resetPassword"
class Resetpass extends Component {
    render() {
        return (
            <div className="form">
            
            <Reset props={this.props} />
            
            </div>
        );
    }
}

export default Resetpass;
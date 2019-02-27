import React,{Component} from "react";

class MessageDisplay extends Component {
    render() {
        return(
            this.props.MsgArray.map((key)=>
                <div>
                    {key.receiverId===localStorage.getItem("Sender")?
                    (
                        key.senderId===this.props.receiverId ?
                        (
                            <div className="sender-div">
                            <label>
                                {key.senderId}:
                            </label>
                            <div>{key.message}</div>
                            </div>
                        ):(
                            null
                        )
                    ):(
                        null
                    )}
                     {
                         key.receiverId===this.props.receiverId ? (
                             <div className="receiver-div">
                             <label>{key.senderId}</label>
                             <div>{key.message}</div>
                             </div>
                         ):(
                             null
                         )
                     }   
                </div>
            
            
            )
        )
    }
}

export default MessageDisplay;
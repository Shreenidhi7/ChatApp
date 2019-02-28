import axios from 'axios';
import io from 'socket.io-client';
const socket=io.connect('http://localhost:8000')
export function chatServices(data) {
    return axios('/getAllUsers',{
        method:"GET",
        data:data
    })
}

export function chatDisplay(Sender,Receiver,req) {
let request={
    senderId:Sender,
    receiverId:Receiver,
    message:req
}
socket.emit("new_msg",request);
socket.on("emutMsg",(result)=>{
    console.log("receiver data to services-->",result);
    
})
}

export function userChatArray(data) {
    return axios('/getAllChats',{
        method:"GET",
        data:data
    })
}
const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const saltRounds=10;
const UserSchema=mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
},
{
    timestamps:true
});
var user=mongoose.model('User',UserSchema);
function userModel()
{}
    

    function hash(password)
    {
        var hash=bcrypt.hashSync(password,saltRounds);
        return hash;
    }

    userModel.prototype.registration=(body,callback)=>{
        user.find({
            "email":body.email
        },(err,data)=>{
            if(err) {
                console.log("Error in Registration");
                callback("User Already Present")
            }
            else
            {
                const newUser=new user({
                    "firstName":body.firstName,
                    "lastName":body.lastName,
                    "email":body.email,
                    "password":hash(body.password)
                });
            
            newUser.save((err,result)=>{
                if(err){
                    console.log("Model not found");
                    callback(err);
                }else{
                    console.log("Registered Successfully");
                    callback(null,result)   
                } 
            })
        }
    });
}
userModel.prototype.login=(body,callback)=>
{
    user.findOne(
        {
        "email":body.email
        }, (err,data)=> {
     //   console.log(data);
        if(err){
            callback(err);
        } else if(data!=null) {
            //console.log(data);
        
        bcrypt.compare(body.password,data.password).then(function(res){
            if(res)
            {
                console.log("login successfully");
                callback(null,data);
            }
            else
            {
                console.log("Incorrect password");
                callback("incorrect password");
            }            
        });
    }
else
{
    console.log("Invalid User");
    callback("invalid user")
}
});
}







userModel.prototype.getAllUsers=(callback)=>{
    user.find({},(err,result)=>{
        if(err) {
            callback(err)
        }
        else 
        {
            callback(null,result);
        }
        });
}

module.exports=new userModel();


const mongoose=require('mongoose');
const schema=mongoose.Schema;

const UserSchema=new schema(

{
name:{
    type:String,
    required:true

},
email:{
    type:String,
    required:true

},
password:{
    type:String,
    required:true

},
avatar:{
    type:String,
    

}

}
);

module.exports=User=mongoose.model('User',UserSchema);
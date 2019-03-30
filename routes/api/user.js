const express=require("express");
const router=express.Router();
const gravatar=require('gravatar')
const bcrypt=require('bcryptjs')








//load user model
const User=require('../../models/User');

router.get("/test",(req,res)=>res.json({"msg":"hi"}));
module.exports=router;


router.post("/register",(req,res)=>{

User.findOne({email:req.body.email})
.then(
    user=>{
    if(user)
    {

        return res.status(400).json({email:'Email already exists'});
    }
    else{
         let avatar=gravatar.url({email:req.body.email,s:200,r:'pg',d:'mm'});
         console.log(req.body.password);
        newuser=new User({
            name:req.body.name,
            email:req.body.email,
            avatar,
            password:req.body.password
        
        
        });
        console.log(newuser.password);
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(newuser.password,salt,(err,hash)=>{
            if(err) throw err;
            newuser.password=hash;
            newuser.save()
                    .then(user=>res.json(user))
                    .catch(err=>console.log("could not save the user"));





            });

            
        })

    }


}).catch();

});
const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');


const user=require('./routes/api/user');
const profile=require('./routes/api/profile');
const posts=require('./routes/api/posts');


const db=require('./Config/keys').mongoURI;
const app=express();


mongoose
.connect(db)
.then(()=>console.log("connected"))
.catch(err=>console.log(err));

app.get('/',(req,res)=>{
res.send("how are you");


})

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());


app.use('/api/user',user);
app.use('/api/profile',profile);
app.use('/api/posts',posts);

const port=5003 || process.env.PORT;


app.listen(port,()=>console.log(`listening on ${port}`));
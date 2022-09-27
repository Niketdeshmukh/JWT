const jwt = require('jsonwebtoken');
const user = require('../models/dummyUser');

module.exports =(app)=>{
    app.post('/user/login' , (req,res,next)=>{
        const{body}= req;
        const {username}= body;
        const {password}= body;
        if(username == user.username && password == user.password){
            jwt.sign({user},'privateKey',{expiresIn:'1h'},(err,token)=>{
                    if(err){console.log(err)}
                    res.send(token);
            })
        }
        else console.log('ERROR: Could not log in');
    })


    app.get('/user/data',)
}
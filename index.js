const express = require('express')
require('dotenv').config()
const app = express()
const port = 3500

app.get('/',(req,res)=>{
    res.send("it wassuccessfully")
})

app.get('/twiter',(req,res)=>{
    res.send("hello bro")
})

app.listen(process.env.PORT,()=>{
    console.log('your surver has been round')
})
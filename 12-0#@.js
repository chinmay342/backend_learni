require('dotenv').config()
const express = require('express')
const app = express()
const port =process.env.PORT

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/login',(req,res)=>{
    res.send('<h1>CHINMAYA SAHOO</h1>')
})
app.listen(port,()=>{
    console.log(`Example app listining at${port}`);
})
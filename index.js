require('dotenv').config()

const express = require('express')

const cors = require('cors')

require('./DB/connection')

const routes = require('./Routes/router')

 const nestoServer = express()

 nestoServer.use(cors())

 nestoServer.use(express.json())

 nestoServer.use(routes)

 const PORT =3000 || process.env.PORT
 nestoServer.listen(PORT,()=>{
    console.log(`nesto server listens to ${PORT}`);
 })

 nestoServer.get('/',(req,res)=>{
    res.send("HELLO NESTO SERVER ARE YOU THERE!")
 })
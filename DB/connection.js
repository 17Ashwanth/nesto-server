const mongoose = require('mongoose')

const connection_string = process.env.CONNECTION_STRING

mongoose.connect(connection_string).then((res)=>{
    console.log("hello mongoose");
}).catch((err)=>{
    console.error(`Could not connect to database: ${err}`);
})
const mongoose = require("mongoose")

const connectionToDB = async () =>{
    await mongoose.connect(process.env.mongo_URI)
    .then((conn)=>{
        console.log(`MongoDB Atlas Connected Successfully: ${conn.connection.host}`)
    })
    .catch((error)=>{
        console.log("Fail to Connect MongoDB Atlas",error.message)
    }) 
}


module.exports = connectionToDB
require('dotenv').config()
const express = require("express")
const app = express()
const connectionToDB = require('./config/dbConnection.js')
const cors = require('cors')
const routers = require('./routers/userRouters.js')

app.get("/",(req,res)=>{
    res.send({message:"Hello World"})
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

connectionToDB()
app.use('/',routers)
module.exports = app
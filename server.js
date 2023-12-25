const app = require('./app.js')

app.listen(process.env.PORT || 5000,()=>{
    console.log(`Server is Running on PORT http://localhost:${process.env.PORT}`)
})
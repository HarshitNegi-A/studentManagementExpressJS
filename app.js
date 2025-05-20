const express=require('express')
const app=express()
const db=require('./utils/db-connection')
const studentRouter=require('./routes/studentRoutes')

const studentModel=require('./models/students')
require('./models')

app.use(express.json())
app.use('/students',studentRouter)

db.sync({force:true}).then(()=>{
    app.listen(3000,()=>console.log("Server is running now"))
}).catch((err)=>{
    console.log(err)
})


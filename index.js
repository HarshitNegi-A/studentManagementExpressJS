const express=require('express')
const app=express()
const studentRouter=require('./routes/studentRoutes')
app.use(express.json())
app.use('/students',studentRouter)


app.listen(3000,()=>console.log("Server is running now"))
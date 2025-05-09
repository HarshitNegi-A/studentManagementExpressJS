const { Sequelize } = require('sequelize');

const sequelize=new Sequelize('studentManagement','root','Harshit@123',{
    host:'localhost',
    dialect:'mysql'
});

(async()=>{
    try{
    await sequelize.authenticate()
    console.log("Connection to the database has been created")
}
catch(err){
    console.log(err)
}
})()

module.exports=sequelize















// const mysql=require('mysql2')

// const connection=mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'Harshit@123',
//     database:'studentManagement'
// })

// connection.connect((err)=>{
//     if(err){
//         console.log(err)
//         return;
//     }
//     console.log("Connection is established")
//     connection.query(`create table if not exists students(
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name varchar(20) not null,
//         email varchar(255) not null unique,
//         age int not null
//         )`,(err)=>{
//             if(err){
//                 console.log(err)
//             }
//             else{
//                 console.log("Table created successfully")
//             }
//         })
// })

// module.exports=connection
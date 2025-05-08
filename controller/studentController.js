const db=require('../utils/db-connection')

const addStudents=(req,res)=>{
    const {name,email,age}=req.body;
    const insertQuery="insert into students(name,email,age) values(?,?,?)"

    db.execute(insertQuery,[name,email,age],(err)=>{
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            return;
        }
        console.log("Student has been added")
        res.status(200).send(`Student with name ${name} is successfully added`)
    })
}

const getStudents=(req,res)=>{
    const selectQuery="select * from students"
    db.execute(selectQuery,(err,result)=>{
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            connection.end()
            return;
        }
        console.log("Students' data is fetched")
        console.log(result)
        const resultArray=result.map((data)=>(
            `<tr>
            <td>${data.name}<td>
            <td>${data.email}<td>
            <td>${data.age}<td>
            <tr>`
        )).join("")
        res.status(200).send(`
            <table>
            <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            </tr>
            </thead>
            <tbody>${resultArray}</tbody>
            </table>
            `)
    })
}

const updateStudent=(req,res)=>{
    const {id}=req.params
    const {name,email,age}=req.body
    const updateQuery="UPDATE students set name=?,email=?,age=? where id=?"

    db.execute(updateQuery,[name,email,age,id],(err,result)=>{
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            connection.end()
            return;
        }
        if(result.affectedRows===0){
            res.status(400).send("Student not found")
            return;
        }
        console.log("Student has been updated")
        res.status(200).send(`Student with name ${name} successfully updated.`)
    })

}

const deleteStudent=(req,res)=>{
    const {id}=req.params;
    const deleteQuery="DELETE FROM students Where id= ?"

    db.execute(deleteQuery,[id],(err,result)=>{
        if(err){
            console.log(err.message)
            res.status(500).send(err.message)
            return
        }

        if(result.affectedRows===0){
            res.status(400).send("student not found")
            return
        }
        res.status(200).send(`User with ${id} is deleted`)
    })
}

const fetchDetailsOfStudent=(req,res)=>{
    const {id}=req.params
    const getQuery="select * from students where id=?"
    db.execute(getQuery,[id],(err,result)=>{
        if(err){
            console.log(err)
            res.status(500).send(err.message)
            connection.end()
            return;
        }
        console.log("Student data is fetched")
        console.log(result)
        const resultArray=result.map((data)=>(
            `<tr>
            <td>${data.name}<td>
            <td>${data.email}<td>
            <td>${data.age}<td>
            <tr>`
        )).join("")
        res.status(200).send(`
            <table>
            <thead>
            <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            </tr>
            </thead>
            <tbody>${resultArray}</tbody>
            </table>
            `)
    })
}

module.exports={
    addStudents,
    getStudents,
    deleteStudent,
    updateStudent,
    fetchDetailsOfStudent
}
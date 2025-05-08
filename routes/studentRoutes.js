const express=require('express')
const router=express.Router()
const studentController=require('../controller/studentController')

router.post('/',studentController.addStudents)
router.get('/',studentController.getStudents)
router.put('/:id',studentController.updateStudent)
router.delete('/:id',studentController.deleteStudent)
router.get('/:id',studentController.fetchDetailsOfStudent)




module.exports=router
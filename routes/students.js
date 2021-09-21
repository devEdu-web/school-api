const express = require('express');
const router = express.Router()
const studentsController = require('../controllers/students')

router.get('/all-students')

router.get('/student/:studentId')

router.post('/new-student', studentsController.postStudent)

router.delete('/delete-student')



module.exports = router
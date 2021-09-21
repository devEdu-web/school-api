const express = require('express');
const router = express.Router()
const studentsController = require('../controllers/students');
const { deleteStudent } = require('../models/students');

router.get('/all-students', studentsController.getAllStudents)

router.get('/student/:studentId', studentsController.getStudent)

router.post('/new-student', studentsController.postStudent)

router.delete('/delete-student/:studentId', studentsController.deleteStudent)

router.delete('/delete-all', studentsController.deleteAllStudents)

router.put('/edit-student/:studentId', studentsController.editStudent)

module.exports = router
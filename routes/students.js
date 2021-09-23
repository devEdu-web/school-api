const express = require('express');
const router = express.Router()
const studentsController = require('../controllers/students');
const { deleteStudent } = require('../models/students');

router.get('/all-students', studentsController.getAllStudents)

router.get('/get-student/:studentId', studentsController.getStudent)

router.get('/get-by-period/:period', studentsController.getByPeriod)

router.get('/get-by-class/:class', studentsController.getByClass)

router.post('/new-student', studentsController.postStudent)

router.delete('/delete-student/:studentId', studentsController.deleteStudent)

router.delete('/delete-all-students', studentsController.deleteAllStudents)

router.put('/edit-student/:studentId', studentsController.editStudent)

module.exports = router
const express = require('express');
const router = express.Router()
const classesController = require('../controllers/classes')

router.get('/all-classes',classesController.getAllClasses)

router.get('/get-class/:class_name', classesController.getClass)

router.get('/get-by-period/:period', classesController.getByPeriod)

router.get('/get-by-grade/:class_grade', classesController.getByGrade)

router.post('/new-class', classesController.postClass)

router.delete('/delete-class/:class_name', classesController.deleteClass)

router.delete('/delete-all-classes', classesController.deleteAllClasses)

router.put('/edit-class/:class_name', classesController.editClass)

module.exports = router
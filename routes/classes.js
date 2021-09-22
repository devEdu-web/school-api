const express = require('express');
const router = express.Router()
const classesController = require('../controllers/classes')

router.get('/all-classes',classesController.getAllClasses)

router.get('/get-class/:class_name', classesController.getClass)

router.post('/new-class', classesController.postClass)

router.delete('/delete-class/:class_name', classesController.deleteClass)

router.delete('/delete-classes', classesController.deleteAllClasses)

router.put('/edit-class/:class_name', classesController.editClass)

module.exports = router
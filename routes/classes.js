const express = require('express');
const router = express.Router()
const classesController = require('../controllers/classes')

router.get('/all-classes')

router.get('/get-class/:classId', classesController.getClass)

router.post('/new-class', classesController.postClass)

router.delete('/delete-class')

router.put('/edit-class/:classId', classesController.editClass)

module.exports = router
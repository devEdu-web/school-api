const express = require('express');
const router = express.Router()
const classesController = require('../controllers/classes')

router.get('/all-classes')

router.get('/class/:classId')

router.post('/new-class', classesController.postClass)

router.delete('/delete-class')

module.exports = router
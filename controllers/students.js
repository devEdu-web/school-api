const Students = require('../models/students')

exports.getAllStudents = (req, res, next) => {
    Students.getAllStudents()
    .then(students => res.send(students[0]))
    .catch(err => res.send(err))
}

exports.getStudent = (req, res, next) => {}

exports.postStudent = (req, res, next) => {
    const student = req.body
    Students.createStudent(student.name, student.age, student.grade, student.className)
    .then(result => {
        res.send(result)
    })
    .catch(err => res.send(err))

}

exports.editStudent = (req, res, next) => {}

exports.deleteStudent = (req, res, next) => {}

exports.deleteAllStudents = (req, res, next) => {}

// classes is basically finished, work on the students now
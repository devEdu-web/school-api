const Students = require('../models/students')

exports.getAllStudents = (req, res, next) => {
    Students.getAllStudents()
    .then(students => res.send(students[0]))
    .catch(err => res.send(err))
}

exports.getStudent = (req, res, next) => {
    const studentId = req.params.studentId
    Students.getStudent(studentId)
    .then(student => res.send(student[0]))
    .catch(err => res.send(err))
}

exports.getByClass = (req, res, next) => {
    const studentClass = req.params.class
    Students.getStudentsByClass(studentClass)
    .then(students => res.send(students[0]))
    .catch(err => res.send(err))
}

exports.getByPeriod = (req, res, next) => {
    const period = req.params.period
    // res.send(period)
    Students.getStudentsByPeriod(period)
    .then(students => res.send(students))
    .catch(err => res.send(err))
}

exports.postStudent = (req, res, next) => {
    const student = req.body
    Students.createStudent(student.name, student.age, student.grade, student.class_name)
    .then(result => {
        res.send(result)
    })
    .catch(err => res.send(err))

}

exports.editStudent = (req, res, next) => {
    const studentId = req.params.studentId
    const student = req.body

    Students.editStudent(studentId, student.name, student.age, student.grade, student.class_name)
    .then(result => res.send(result))
    .catch(err => res.send(err))

}

exports.deleteStudent = (req, res, next) => {
    const studentId = req.params.studentId
    Students.deleteStudent(studentId)
    .then(result => res.send(result))
    .catch(err => res.send(err))
}

exports.deleteAllStudents = (req, res, next) => {
    Students.deleteAll()
    .then(result => res.send(result))
    .catch(err => res.send(err))
}

// classes is basically finished, work on the students now
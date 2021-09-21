const database = require('../util/database')

module.exports = class Student {
    constructor(studentId, name, age, classId) {
        this.studentId = studentId
        this.name = name,
        this.age = age,
        this.classId = classId
    }

    static createStudent(name = null, age = null, grade = null, className = null) {
        
        return database.query('INSERT INTO students (name, age, grade, class_name) values (?, ?, ?, ?)', [name, age, grade, className])

    }

    static getAllStudents() {
        return database.query('SELECT * FROM students')
    }

    static getStudent(id) {
        return database.query('SELECT * FROM students where student_id = ?', [id])
    }
}
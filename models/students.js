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
        return database.query('SELECT * FROM students WHERE student_id = ?', [id])
    }

    static deleteStudent(id) {
        return database.query('DELETE FROM students WHERE student_id = ?', [id])
    }

    static deleteAll() {
        return database.query('DELETE FROM students')
    }

    static editStudent(id, name = null, age = null, grade = null, className = null) {
        return this.getStudent(id)
        .then(student => {

            const currentStudent = student[0][0]
            const updatedStudent = {
                studentId: currentStudent.student_id,
                studentName: name || currentStudent.name,
                studentAge: age || currentStudent.age,
                studentGrade: grade || currentStudent.grade,
                studentClass: className || currentStudent.class_name
            }

            return database.query('UPDATE students SET name = ?, age = ?, grade = ?, class_name = ?', [updatedStudent.studentName, updatedStudent.studentAge, updatedStudent.studentGrade, updatedStudent.studentClass])
            
        })
        .catch(err => err)
    }
}
const database = require('../util/database');

module.exports = class Class {
    constructor(classId, className, classGrade) {
        this.classId = classId,
        this.className = className,
        this.classGrade = classGrade
    }

    static createNewClass(className, classGrade) {
        return database.query(`INSERT INTO classes (class_name, class_grade) VALUES (?, ?)`, [className, classGrade])
    }

    static editClassById(classId, class_name = null, class_grade = null) {
        // const classToUpdate = this.fetchClass(id).then(fetchedClass => {
        //     return fetchedClass
        // }).catch(err => console.log(err))

        // return classToUpdate
        return database.query('UPDATE classes set class_name = ?, class_grade = ? where class_id = ?', [class_name, class_grade, classId])
    }

    static fetchAllClasses() {
        return database.query('SELECT * FROM classes')
    }

    static fetchClass(id) {
        return database.query('SELECT class_id, class_name, class_grade FROM classes where class_id = ?', [id])
    }

    static deleteById(id) {
        return database.query('DELETE FROM classes where class_id = ?', [id])
    }

    static deleteAll() {

    }
}
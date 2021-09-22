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

    static editClassById(classIdentity, class_name = null, class_grade = null) {

        return this.fetchClass(classIdentity)
        .then(fetchedClass => {

            const classToUpdate = fetchedClass[0][0]
            const updatedClass = {
                class_name: class_name || classToUpdate.class_name,
                class_grade: class_grade || classToUpdate.class_grade
            }
            
            return database.query('UPDATE classes set class_name = ?, class_grade = ? where class_name = ?', [updatedClass.class_name, updatedClass.class_grade, classIdentity])
        })
        .catch(err => err)

    }

    static fetchAllClasses() {
        return database.query('SELECT * FROM classes')
    }

    static fetchClass(class_name) {
        return database.query('SELECT * FROM classes where class_name = ?', [class_name])
    }

    static deleteById(id) {
        return database.query('DELETE FROM classes where class_id = ?', [id])
    }

    static deleteAll() {
        return database.query('DELETE FROM classes')
    }
}
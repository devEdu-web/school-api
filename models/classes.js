const database = require('../util/database');

module.exports = class Class {
    constructor(classId, className, classGrade) {
        this.classId = classId,
        this.className = className,
        this.classGrade = classGrade
    }

    static createNewClass(className, classGrade) {
        let name = className.toUpperCase()
        let grade = classGrade
        // let error = false
        


        // if(grade > 12) {
        //     name = null
        // }

        // if(name.length < 3) {
        //     name = null
        // }

        // if(name[0] || 'E' || name[0] != 'M' || name[0] != 'H') {
        //     name = null
        // }

        return database.query(`INSERT INTO classes (class_name, class_grade) VALUES (?, ?)`, [name, grade])
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

    static fetchByGrade(grade) {
        return database.query('SELECT * FROM classes where class_grade = ?', [grade])
    }

    static fetchByperiod(period) {

        const classPeriodIdentifier = period[0].toUpperCase()

        return this.fetchAllClasses()
        .then(classes => {

            const fetchedClasses = classes[0]
            const classesInThisPeriod = []
            

            fetchedClasses.forEach(c => {
                if(c.class_name[0] == classPeriodIdentifier) {
                    classesInThisPeriod.push(c)
                }
            })

            return classesInThisPeriod
        })
        .catch(err => err)

    }

    static deleteClass(className) {
        return database.query('DELETE FROM classes where class_name = ?', [className])
    }

    static deleteAll() {
        return database.query('DELETE FROM classes')
    }
}
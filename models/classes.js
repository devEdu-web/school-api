const database = require('../util/database');

module.exports = class Class {
    constructor(classId, className, classGrade) {
        this.classId = classId,
        this.className = className,
        this.classGrade = classGrade
    }

    static createNewClass(className, classGrade) {
        return database.query(`INSERT INTO classes (class_name, class_grade) VALUES ('${className}', '${classGrade}');`).then()
    }
}
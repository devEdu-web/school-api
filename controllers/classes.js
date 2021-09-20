const Class = require('../models/classes')

exports.getAllClasses = (req, res, next) => {

}

exports.getClass = (req, res, next) => {}

exports.postClass = (req, res, next) => {
    const className = req.body.className
    const classGrade = req.body.classGrade
    
    if(className && classGrade) {
        Class.createNewClass(className, classGrade).then(result => {
            res.send(result)
        }).catch(err => {
            res.send(err)
        })

    } else {
        res.status(400).send('There is one or more information missing.')
    }
}


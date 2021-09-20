const Class = require('../models/classes')

exports.getAllClasses = (req, res, next) => {
    Class.fetchAllClasses().then(classes => {
        res.send(classes[0])
    }).catch(err => res.send(err))
}

exports.getClass = (req, res, next) => {
    const classId = req.params.classId
    // res.send(classId)
    Class.fetchClass(classId)
    .then(fetchedClass => {
        res.json(fetchedClass[0][0])
    })
    .catch(err => console.log(err))

}

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

exports.editClass = (req, res, next) => {
    const id = req.params.classId
    const className = req.body.class_name
    const classGrade = req.body.class_grade

    Class.editClassById(id, className, classGrade).then(result => {
        res.send(result)
    }).catch(err => {
        res.send(err)
    })
}

exports.deleteClass = (req, res, next) => {
    const classId = req.params.classId

    Class.deleteById(classId).then(result => {
        res.send(result)
    }).catch(err => res.send(err))
}
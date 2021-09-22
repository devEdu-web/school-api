const Class = require('../models/classes')

exports.getAllClasses = (req, res, next) => {
    Class.fetchAllClasses().then(classes => {
        res.send(classes[0])
    }).catch(err => res.send(err))
}

exports.getClass = (req, res, next) => {
    const className = req.params.class_name
    // res.send(classId)
    Class.fetchClass(className)
    .then(fetchedClass => {
        res.json(fetchedClass[0][0])
    })
    .catch(err => console.log(err))

}

exports.getByPeriod = (req, res, next) => {
    const classPeriod = req.params.period
    Class.fetchByperiod(classPeriod)
    .then(result => res.send(result))
    .catch(err => res.send(err))

}

exports.getByGrade = (req, res, next) => {
    const classGrade = req.params.classGrade

    Class.fetchByGrade(classGrade)
    .then(classes => {res.send(classes[0])})
    .catch(err => res.send(err))

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
    const incomingClass = req.params.class_name
    const className = req.body.class_name
    const classGrade = req.body.class_grade

    
    Class.editClassById(incomingClass, className, classGrade).then(result => {
        res.send(result)
    }).catch(err => {
        res.send(err)
    })
}

exports.deleteClass = (req, res, next) => {
    const incomingClass = req.params.class_name

    Class.deleteClass(incomingClass).then(result => {
        res.send(result)
    }).catch(err => res.send(err))
}

exports.deleteAllClasses = (req, res, next) => {
    Class.deleteAll().then(result => {
        res.send(result)
    }).catch(err => res.send(err))
}
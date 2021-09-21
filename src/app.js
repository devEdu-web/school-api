const express = require('express');
const app = express()
const studentsRoutes = require('../routes/students')
const classesRoutes = require('../routes/classes')
const database = require('../util/database')

app.use(express.json())
app.use('/api/students', studentsRoutes)
app.use('/api/classes', classesRoutes)

database.query(
    'CREATE TABLE IF NOT EXISTS classes (class_name varchar(255) not null, class_grade int unsigned not null, primary key (class_name))'
).then(result => console.log(result)).catch(err => console.log(err))


database.query(
    'CREATE TABLE IF NOT EXISTS students (student_id int unsigned not null auto_increment, name varchar(255) not null, age int unsigned not null, grade int unsigned not null, class_name varchar(255) not null, primary key (student_id), foreign key (class_name) references classes (class_name))'
).then(result => console.log(result)).catch(err => console.log(err))

// Tu precisa traalhar no database
// suas rotas nao tem nada
// seus controllers não tem nada



module.exports = app

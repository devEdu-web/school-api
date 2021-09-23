# School API - Not available for use

Recently I started studying about data bases and I intend to study one of each of them (SQL and NSQL). To start, I chose MySQL, because it is one of the most popular SQL data bases and also because I liked its dynamic. After a few days studying about it, I had to put in practice what I was learning that is why I created this project witch is simple and a little bit complex at the same time. It was the first thing I could think of regarding working with data bases. 

In this API the user can use multiple funcionalities, from add a student/class to delete them. To start using it you must undertand some concepts first.

*** 

## Periods and Grades

Periods is how is divided the grades.

* Elemtary - **First grade to fifth grade**
* Middle = **Sixth grade to eighth grade**
* High = **Nineth grade to twelfth grade**

The grades are represented by number from 1 to 10, where 1 is the first grade and 12 is the twelfth grade.

***

## Classes

The classes are named with three characteres: XYZ.

<br>

X = Period <br>
Y = Grade <br>
Z = Class Identifier

<br>

### Examples

Class name | X | Y | Z
:---|:---:|:---:|:---:
`E1A` | `E` = Elementary school | `1` = Grade | `A` = Class identifier
`M6B` | `M` = Middle School | `6` = Grade | `B` = Class identifier
`H9C` | `h` = High School | `9` = Grade | `C` = Class identifier

***

## Requests URL

Since this API is not available for public use, is only a project to practice, the requests are sent to my `localhost`.

<br>

`http://localhost:3000/api/subject/action/params`

<br>

* Subject - Represents the table.
  
  
* Action - What you want to do in that table.


* Params - Values to filter a user, class, period, etc...

<br>

### Subject

Here you have two options: **classes** or **students**, this will specifying witch table is going to suffer the action you will send.

<br>

### Classes Actions

GET | POST | PUT | DELETE 
:---|:---:|:---:|:---:|
`/all-classes` | `/new-class` | `/edit-class/:class_name` |`/delete-class/:class_name`
`/get-class/:class_name` | - | - | `/delete-all-classes`
`/get-by-period/:period` | - | - | - 
`/get-by-grade:classGrade` | - | - | - 

<br>

### Students Actions

GET | POST | PUT | DELETE 
:---|:---:|:---:|:---:|
`/all-students` | `/new/students` | `/edit-students/:studentId` |`/delete-student/:studentId`
`/get-student/:studentId` | - | - | `/delete-all-students`
`/get-by-period/:period`| - | - | - 
`/get-by-class/:class` | - | - | - 

***

<br>

## Sending Requests (POST)

The data type you are going to sent is `JSON`

<br>

### Classes

#### POST METHOD

Sending a `POST` request means you're trying to register a new class. So you have to send the body request in this way:


    {
        "className": "E1A",
        "classGrade": 1
    } 

Both values **_CAN NOT BE NULL_**!

<br>

#### PUT METHOD

Sending a `PUT` request means you're trying to update a class. So you have to send the body request in this way:


    {
        "className": "E1A",
        "classGrade": 1
    } 

You can send one attribute and not send another one, in case you want to update only onde of them.



***

### Students

<br>

#### POST METHOD

Sending a `POST` request means you're trying to register a new student. So you have to send the body request in this way:


    {
        "name": "Example",
        "age": 15,
        "grade": 10,
        "class_name": "H1A" 
    } 

The values **_CAN NOT BE NULL_**!

<br>

#### PUT METHOD

Sending a `PUT` request means you're trying to update a student. So you have to send the body request in this way:


    {
        "name": "Updated name",
        "age": 30,
        "grade": 1,
        "class_name": "Updated class"
    } 

You can send one attribute and not send another one, in case you want to update only onde of them.

***

<br>

## Technologies used

* NodeJS 
* Express

***

<br>

## What I learn?

* Basic SQL syntax
* Basic MYSQL concepts (Tables, PK, FK)
* How SQL statements can avoid SQL Injection
* Basic knowledge on databases in general
* Improved my habilities in Node and Express
* HTTP Methods
* Really basic API concepts

This project was more focused in practice my knowledge in Mysql and I'm pleased I was able to do this, at first was a little difficult understand about Primary Key and Foreign key and how two tables can be related, but eventually it started to become more clear.

***

<br>

## What I can improve in the future?

While I was designing this project, I decided how the division of classes and grades was going to work as I mentioned before. But, after finishing the project I realized that this method is rather especific, so if onde day I want to change it, it's gonna be difficult because I would have to change practically the whole code. So in the future it is viable create a new organization method that is more flexible and easy to modify or also, refactor the code so that it could support more than one method.



<!-- * GET ACTIONS
  
  * classes
    * `/all-classes`
    * `/get-class/:class_name`
    * `/get-by-period/:period`
    * `/get-by-grade:classGrade`
  * students
    * `/all-students`
    * `/get-student/:studentId`
    * `/get-by-period/:period`
    * `/get-by-class/:class`
  
* POST ACTIONS

  * classes
    * `/new-class`
  * students
    * `/new/students`
  
* DELETE ACTIONS
  
  * classes
    * `/delete-class/:class_name`
    * `/delete-all-classes`
  * students
    * `/delete-student/studentId`
    * `/delete-all-students`

* PUT ACTIONS
  * classes
    * `/edit-class/:class_name`
  * students
    * `/edit-students/:studentId` -->

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
let activities = [];
/*let courses : course [] = [];*/
let gradebook = [];
var Area;
(function (Area) {
    Area["Programacion"] = "Programacion Visual";
    Area["BasedeDatos"] = "Base de Datos";
    Area["Metodologias"] = "Metodologias";
    Area["Dise\u00F1odeInterface"] = "Dise\u00F1odeInterface";
})(Area || (Area = {}));
var Course;
(function (Course) {
    Course["Programacion"] = "Programacion Visual";
    Course["BasedeDatos"] = "Base de Datos";
    Course["Metodologias"] = "Metodologias";
})(Course || (Course = {}));
function addStudent() {
    let currentStudent = {
        name: readFromHtml("name"),
        identification: parseInt(readFromHtml("identification")),
        gmail: readFromHtml("mail"),
        adress: readFromHtml("adress"),
        enrollment: parseInt(readFromHtml("enrollment")),
        carrer: readFromHtml("carrer"),
        carrerLevel: parseInt(readFromHtml("carrerLevel")),
    };
    students.push(currentStudent);
    console.log(students);
}
;
function addTeacher() {
    let currentTeacher = {
        name: readFromHtml("name-teachers"),
        identification: parseInt(readFromHtml("identification-teachers")),
        gmail: readFromHtml("mail-teachers"),
        adress: readFromHtml("adress-teachers"),
        title: readFromHtml("title"),
        gradeLevel: readFromHtml("gradeLevel"),
        area: readFromHtml("area"),
    };
    teachers.push(currentTeacher);
    console.log(teachers);
}
;
function addactivities() {
    let currentActivity = {
        name_activity: readFromHtml("name_activity")
    };
    activities.push(currentActivity);
    console.log(activities);
}
;
/*function addcourses (){

    let currentCourse :course = {
         name_courses : readFromHtml("name_courses"),
         number_hours : parseInt(readFromHtml("number_hours")),
         parallel : readFromHtml("parallel")
    }
    courses.push(currentCourse);
    console.log(courses);
};*/
function addgradebook() {
    let currentGradebook = {
        value: readFromHtml("value-gradebook"),
        Course: readFromHtml("course-gradebook"),
        activity: readFromHtml("activity-gradebook"),
        maximunGrade: parseInt(readFromHtml("maximunGrade")),
    };
    gradebook.push(currentGradebook);
    console.log(gradebook);
}
;
initCourse();
function initCourse() {
    let coursegradebook = document.getElementById("course-gradebook");
    let Courses = Object.values(Course);
    Courses.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value;
        coursegradebook.add(option);
    });
}
function initArea() {
    let areas = document.getElementById("area");
    let area = Object.values(Area);
    area.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value;
        areas.add(option);
    });
}
initArea();
function readFromHtml(id) {
    return document.getElementById(id).value;
}

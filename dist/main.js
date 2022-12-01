"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
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
let teachers = [];
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
let activities = [];
function addactivities() {
    let currentActivity = {
        name_activity: readFromHtml("name_activity")
    };
    activities.push(currentActivity);
    console.log(activities);
}
;
let courses = [];
function addcourses() {
    let currentCourse = {
        name_courses: readFromHtml("name_courses"),
        number_hours: parseInt(readFromHtml("number_hours")),
        parallel: readFromHtml("parallel")
    };
    courses.push(currentCourse);
    console.log(courses);
}
;
function readFromHtml(id) {
    return document.getElementById(id).value;
}

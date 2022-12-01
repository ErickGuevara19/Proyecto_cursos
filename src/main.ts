import { Student } from "./entities/student";
import { Teacher } from "./entities/teacher";


let students: Student[] = [];

function addStudent():void{

    let currentStudent : Student = {
        name: readFromHtml("name"),
        identification: parseInt(readFromHtml("identification")),
        gmail: readFromHtml("mail"),
        adress: readFromHtml("adress"),
        enrollment: parseInt(readFromHtml("enrollment")),
        carrer: readFromHtml("carrer"),
        carrerLevel: parseInt(readFromHtml("carrerLevel")),
    }
    students.push(currentStudent);
    console.log(students);
};
let teachers: Teacher[] = [];

function addTeacher(){

    let currentTeacher : Teacher = {
        name: readFromHtml("name-teachers"),
        identification: parseInt(readFromHtml("identification-teachers")),
        gmail: readFromHtml("mail-teachers"),
        adress: readFromHtml("adress-teachers"),
        title: readFromHtml("title"),
        gradeLevel: readFromHtml("gradeLevel"),
        area: readFromHtml("area"),
    }
    teachers.push(currentTeacher);
    console.log(teachers);
};

let activities : activity [] = [];

function addactivities (){

    let currentActivity : activity = {
        name_activity : readFromHtml("name_activity")


    }
    activities.push(currentActivity);
    console.log(activities);
};
let courses : course [] = [];

function addcourses (){

    let currentCourse :course = {
         name_courses : readFromHtml("name_courses"),
         number_hours : parseInt(readFromHtml("number_hours")),
         parallel : readFromHtml("parallel")
    }
    courses.push(currentCourse);
    console.log(courses);
};

function readFromHtml(id:string):string{
    return (<HTMLInputElement>document.getElementById(id)).value;

}
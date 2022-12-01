/*Erick Guevara*/
import { activity } from "./entities/activity";

/*import { course } from "./entities/courses";*/
import { GradeBookSeutp } from "./entities/gradesBookSeutp";
import { Student } from "./entities/student";
import { Teacher } from "./entities/teacher";


let students: Student[] = [];
let teachers: Teacher[] = [];
let activities : activity [] = [];
/*let courses : course [] = [];*/
let gradebook : GradeBookSeutp [] = [];

enum Area{
    Programacion ="Programacion Visual",
    BasedeDatos = "Base de Datos",
    Metodologias= "Metodologias",
    DiseñodeInterface ="DiseñodeInterface"
    
}

enum Course{
    Programacion ="Programacion Visual",
    BasedeDatos = "Base de Datos",
    Metodologias= "Metodologias"


}
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





function addactivities (){

    let currentActivity : activity = {
        name_activity : readFromHtml("name_activity")


    }
    activities.push(currentActivity);
    console.log(activities);
};


/*function addcourses (){

    let currentCourse :course = {
         name_courses : readFromHtml("name_courses"),
         number_hours : parseInt(readFromHtml("number_hours")),
         parallel : readFromHtml("parallel")
    }
    courses.push(currentCourse);
    console.log(courses);
};*/



function addgradebook (){

    let currentGradebook :GradeBookSeutp = {
         value: readFromHtml("value-gradebook"),
         Course : readFromHtml("course-gradebook"),
         activity : readFromHtml("activity-gradebook"),
         maximunGrade : parseInt(readFromHtml("maximunGrade")),
    }
    gradebook.push(currentGradebook);
    console.log(gradebook);
   

};
initCourse();
function initCourse():void{
    let coursegradebook = document.getElementById("course-gradebook") as HTMLSelectElement;

    let Courses = Object.values(Course);
    Courses.forEach(
        (value) => {
             let option = document.createElement("option");
             option.value = value;
             option.text = value;
             coursegradebook.add(option);
        }
    )

}

function initArea():void{
    let areas = document.getElementById("area") as HTMLSelectElement;

    let area = Object.values(Area);
    area.forEach(
        (value)=>{
            let option = document.createElement("option");
            option.value = value;
            option.text = value;
            areas.add(option)
        }
    )
    
}
initArea();



function readFromHtml(id:string):string{
    return (<HTMLInputElement>document.getElementById(id)).value;

}

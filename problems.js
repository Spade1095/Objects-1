//Problem 1
const movie = {
  title: "Interstellar",
  year: 2014,
  director: "Christopher Nolan",
  rating: "PG-13",
  runtime: 169
};

/* console.log(movie.title)
console.log(movie.director)
if(movie.runtime>120){
    console.log('true')
}else{
    console.log('false')
}
console.log("Title:", movie.title)
console.log("Year:", movie.year)
console.log("Director:", movie.director)
console.log("Rating:",movie.rating)
console.log("Runtime:",movie.runtime) */

//Problem 2

function makeStudents(name,grade,gpa){
    const student = {
        name:name,
        grade:grade,
        gpa:gpa
    }
    if (gpa>=3.5){
        student.honors = true;
    }else{
        student.honors =false;
    }
    return student;
}
// console.log(students("Justin", 10, 2.3))

//Problem 3
const students = [
  { name: "Jane", grade: 11, gpa: 3.8, isHonors: true },
  { name: "ChenZee", grade: 12, gpa: 3.5, isHonors: false },
  { name: "Dakota", grade: 10, gpa: 3.9, isHonors: true },
];
function findStudent(students, name){
    if (students.find((student) =>student.name ===name) === null){
        return null
    } else{
        return students.find((student) =>student.name ===name)
    }
}
// console.log(findStudent(students,"Joe"))

//Problem 4




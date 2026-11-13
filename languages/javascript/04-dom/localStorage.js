const students = ["Amir","Abdullahi","Musa","Ibrahim","Aisha"];

localStorage.setItem("students", JSON.stringify(students));

const savedStudents = localStorage.getItem("students");

const newStudent = JSON.parse(localStorage.getItem("students"));

newStudent.push("Fatima");

localStorage.setItem("students", JSON.stringify(newStudent));

console.log(savedStudents);
console.log(newStudent[0]);
console.log(newStudent);
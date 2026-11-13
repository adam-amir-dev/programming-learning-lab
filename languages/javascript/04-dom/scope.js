const students = [];

function addStudent(name, score){
    const newUser = {
        name: name,
        score: score
    };

    students.push(newUser)
}

function displayStudents(){
    for(let i = 0; i < students.length; i++){
        console.log(students[i])
    }
}

function calculateAverage(){
    let average = 0;
    students.forEach((student)=>{
        console.log[student]
    })
}

console.log(students)
addStudent("amir", 100)
addStudent("Samir", 80)
addStudent("salma", 90)
displayStudents()
calculateAverage()
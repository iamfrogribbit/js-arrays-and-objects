// init students array
const students = [];

// add student
function addStudent(name, grade) {
    students.push({
        name,
        grade
    });
}

function removeStudent(name) {
    const index = students.findIndex(student => student.name === name);
    if (index !== -1) {
        students.splice(index, 1);
        console.log(name, 'has been removed');
    } else {
        console.log(name, 'was not found');
    }
}

function filterTopStudents(minGrade) {
    return students.filter(student => student.grade >= minGrade);
};

// function to map students in formatted list
function formatStudentList() {
    return students.map(student => `${student.name} - Grade: ${student.grade}`);
};

//start
console.log('Students = ', students);

//Add Students
addStudent('Alice', 85);
addStudent('Bob', 90);
addStudent('Charles', 78);
addStudent('Davey', 60);
addStudent('Emma', 92);

console.log('Students = ', students);
console.log(filterTopStudents(80));



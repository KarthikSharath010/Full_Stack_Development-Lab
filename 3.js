//Create an object student with properties: name (string), grade (number), subjects (array) displayInfo() (method to log the student's details). Write a script to dynamically add a passed property to the student object, with a value of true or false based on their grade. Create a loop to log all keys and values of the student object.

let Student={
    name: "Karthik",
    grade: "95",
    subjects: ["English", "Spanish", "Maths", "Kannada"]
};

function displayInfo()
{
    console.log(Student.name);
    console.log(Student.grade);
    console.log(Student.subjects);    
}

Student.passed=Student.grade>=35;

for(let key in Student)
    console.log(`${key}: ${Student[key]}`);

displayInfo();
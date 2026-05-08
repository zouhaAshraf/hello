// logic one (marksheet)

const studentName = "Zouha";

// marks per subject
const totalMarksPerSubject = 100;

// marks obtained
let english = 68;
let math = 84;
let science = 79;
let computer = 91;
let urdu = 77;

let obtainedMarks = english + math + science + computer + urdu;

const totalMarks = totalMarksPerSubject * 5;

let percentage = (obtainedMarks / totalMarks) * 100;

let grade;

if (percentage >= 80) {
    grade = "A+";
} else if (percentage >= 70) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 50) {
    grade = "C";
} else {
    grade = "Fail";
}


document.write(`
    <h1>Student Mark Sheet</h1>
    
    <p><b>Student Name:</b> ${studentName}</p>
    
    <p><b>English:</b> ${english}</p>
    <p><b>Math:</b> ${math}</p>
    <p><b>Science:</b> ${science}</p>
    <p><b>Computer:</b> ${computer}</p>
    <p><b>Urdu:</b> ${urdu}</p>

    <p><b>Total Marks:</b> ${totalMarks}</p>
    <p><b>Obtained Marks:</b> ${obtainedMarks}</p>
    
    <p><b>Percentage:</b> ${percentage}%</p>
    
    <p><b>Grade:</b> ${grade}</p>
`);

// logic two

function login() {

    console.log(isLoggedIn);

    var isLoggedIn = true;

    if (isLoggedIn) {
        console.log("Welcome User");
    }
}

login();

// logic three 

function myReduce(arr, callback, initialValue) {

    var accumulator;
    var startIndex;

    if (initialValue !== undefined) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        accumulator = arr[0];
        startIndex = 1;
    }

    // Loop through array
    for (var i = startIndex; i < arr.length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }

    return accumulator;
}

// sum example
var numbers = [6, 2, 12, 5];

var sum = myReduce(numbers, function(total, current) {
    return total + current;
});

console.log("Sum:", sum);

// Multiplication Example
var multiply = myReduce(numbers, function(total, current) {
    return total * current;
}, 1);

console.log("Multiplication:", multiply); 


// logic three array in place

var arr = [17, 29, 34, 16, 23];

var start = 0;
var end = arr.length - 1;

while (start < end) {

var temp = arr[start];
arr[start] = arr[end];
arr[end] = temp;

start++;
end--;
}

console.log(arr);

// logic four merge two arrays

var arr1 = [10, 5, 6];
var arr2 = [7, 24, 21];

var mergedArray = [];

// Add first array
for (var i = 0; i < arr1.length; i++) {
    mergedArray[mergedArray.length] = arr1[i];
}

// Add second array
for (var j = 0; j < arr2.length; j++) {
    mergedArray[mergedArray.length] = arr2[j];
}

console.log(mergedArray);

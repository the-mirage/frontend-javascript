// Implement the Director class
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
// Implement the Teacher class
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
// Create the createEmployee function
function createEmployee(salary) {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
// Type predicate function to check if employee is a Director
function isDirector(employee) {
    return employee instanceof Director;
}
// Execute work function based on employee type
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
// Function to teach a class based on subject
function teachClass(todayClass) {
    if (todayClass === "Math") {
        return "Teaching Math";
    }
    else {
        return "Teaching History";
    }
}
// Test the implementation
console.log("=== Testing Director ===");
var director = new Director();
console.log(director.workFromHome()); // Working from home
console.log(director.getCoffeeBreak()); // Getting a coffee break
console.log(director.workDirectorTasks()); // Getting to director tasks
console.log("\n=== Testing Teacher ===");
var teacher = new Teacher();
console.log(teacher.workFromHome()); // Cannot work from home
console.log(teacher.getCoffeeBreak()); // Cannot have a break
console.log(teacher.workTeacherTasks()); // Getting to work
console.log("\n=== Testing createEmployee function ===");
console.log(createEmployee(200));
// Teacher
console.log(createEmployee(1000));
// Director
console.log(createEmployee("$500"));
// Director
console.log("\n=== Testing isDirector and executeWork functions ===");
console.log(executeWork(createEmployee(200)));
// Getting to work
console.log(executeWork(createEmployee(1000)));
// Getting to director tasks
console.log("\n=== Testing teachClass function ===");
console.log(teachClass("Math"));
// Teaching Math
console.log(teachClass("History"));
// Teaching History

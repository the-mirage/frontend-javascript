// Define the DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define the TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement the Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Implement the Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Create the createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Type predicate function to check if employee is a Director
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Execute work function based on employee type
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// String literal type for Subjects
type Subjects = "Math" | "History";

// Function to teach a class based on subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

// Test the implementation
console.log("=== Testing Director ===");
const director = new Director();
console.log(director.workFromHome()); // Working from home
console.log(director.getCoffeeBreak()); // Getting a coffee break
console.log(director.workDirectorTasks()); // Getting to director tasks

console.log("\n=== Testing Teacher ===");
const teacher = new Teacher();
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

// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Define the interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
): string => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Create a teacher object
const teacher3: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: false,
  location: "London",
  contract: false,
};

// Create another teacher with years of experience
const teacher4: Teacher = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "New York",
  contract: true,
  department: "Mathematics",
};

// Create a director object using the Directors interface
const director1: Directors = {
  firstName: "Mike",
  lastName: "Johnson",
  fullTimeEmployee: true,
  location: "San Francisco",
  numberOfReports: 15,
  yearsOfExperience: 8,
  department: "Engineering",
};

console.log(teacher3);
console.log(teacher4);
console.log(director1);

// Test the printTeacher function
console.log(printTeacher("John", "Doe")); // Output: J. Doe
console.log(printTeacher("Jane", "Smith")); // Output: J. Smith

// Define the interface for the StudentClass constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}
// Define the interface for the StudentClass
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Test the printTeacher function
console.log(printTeacher("John", "Doe")); // Output: J. Doe
console.log(printTeacher("Jane", "Smith")); // Output: J. Smith

// Create and test StudentClass instances
const student1 = new StudentClass("Alice", "Johnson");
const student2 = new StudentClass("Bob", "Williams");

console.log(student1.displayName()); // Output: Alice
console.log(student1.workOnHomework()); // Output: Currently working
console.log(student2.displayName()); // Output: Bob
console.log(student2.workOnHomework()); // Output: Currently working

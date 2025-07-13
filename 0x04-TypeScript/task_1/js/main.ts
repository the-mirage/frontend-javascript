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

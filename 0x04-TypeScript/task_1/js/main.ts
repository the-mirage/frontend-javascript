// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
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

console.log(teacher3);
console.log(teacher4);

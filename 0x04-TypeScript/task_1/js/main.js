// Implement the printTeacher function
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName.charAt(0), ". ").concat(lastName);
};
// Create a teacher object
var teacher3 = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: false,
    location: "London",
    contract: false,
};
// Create another teacher with years of experience
var teacher4 = {
    firstName: "Jane",
    lastName: "Smith",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "New York",
    contract: true,
    department: "Mathematics",
};
// Create a director object using the Directors interface
var director1 = {
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
// Implement the StudentClass
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
// Test the printTeacher function
console.log(printTeacher("John", "Doe")); // Output: J. Doe
console.log(printTeacher("Jane", "Smith")); // Output: J. Smith
// Create and test StudentClass instances
var student1 = new StudentClass("Alice", "Johnson");
var student2 = new StudentClass("Bob", "Williams");
console.log(student1.displayName()); // Output: Alice
console.log(student1.workOnHomework()); // Output: Currently working
console.log(student2.displayName()); // Output: Bob
console.log(student2.workOnHomework()); // Output: Currently working

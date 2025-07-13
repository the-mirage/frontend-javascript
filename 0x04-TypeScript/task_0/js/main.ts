interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "California",
};

// Create an array containing the two students
const studentsList: Student[] = [student1, student2];

// Create and render the table using Vanilla JavaScript
const table = document.createElement("table");

// Iterate through studentsList and create rows
studentsList.forEach((student: Student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  //   const lastNameCell = document.createElement("td");
  //   const ageCell = document.createElement("td");
  const locationCell = document.createElement("td");

  firstNameCell.textContent = student.firstName;
  //   lastNameCell.textContent = student.lastName;
  //   ageCell.textContent = student.age.toString();
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  //   row.appendChild(lastNameCell);
  //   row.appendChild(ageCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Append table to the document body
document.body.appendChild(table);

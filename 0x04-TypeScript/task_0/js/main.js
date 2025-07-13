// Create two students
var student1 = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};
var student2 = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "California",
};
// Create an array containing the two students
var studentsList = [student1, student2];
// Create and render the table using Vanilla JavaScript
var table = document.createElement("table");
// Iterate through studentsList and create rows
studentsList.forEach(function (student) {
  var row = document.createElement("tr");
  var firstNameCell = document.createElement("td");
  //   const lastNameCell = document.createElement("td");
  //   const ageCell = document.createElement("td");
  var locationCell = document.createElement("td");
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

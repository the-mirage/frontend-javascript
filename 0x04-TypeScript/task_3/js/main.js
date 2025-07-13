"use strict";
/// <reference path="./crud.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
var CRUD = require("./crud.js");
// Create a row object
var row = {
    firstName: "Guillaume",
    lastName: "Salva",
};
// Insert the row and get the new row ID
var newRowID = CRUD.insertRow(row);
// Create an updated row with age
var updatedRow = {
    firstName: "Guillaume",
    lastName: "Salva",
    age: 23,
};
// Update the row
CRUD.updateRow(newRowID, updatedRow);
// Delete the row
CRUD.deleteRow(newRowID);

//Create a function inside an object that returns the object's own name property using the this keyword.
// Defines an object with a name property and a method to return its name
var person = {
    name: "Sikandar",
    getName: function () {
        return this.name; // Uses 'this' to refer to the object itself and return its 'name' property
    },
};
console.log(person.getName()); // Outputs: Alice
// This method correctly identifies and returns the object's 'name' property using 'this'.

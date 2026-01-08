// ✅ Object.create(): Creates a new object with the specified prototype.
// create() create copy of the object's properties and methods.
// Example:
let obj = {
  greet: function () {
    console.log("Hello World!");
  }
};


// Create a new object with obj as its prototype
let obj1 = Object.create(obj);
obj1.greet(); // Output: Hello World!

// ✅ Object.keys(): Returns an array of property names.
let s = {
  name: "John",
  age: 30,
  city: ["New York", "Los Angeles", "Chicago"],
  subjects: ["Math", "Science", "English"]
};

console.log(Object.keys(s));
// Output: ["name", "age", "city", "subjects"]

Object.keys(s).forEach((key) => console.log(key));
// Output: name, age, city, subjects

// ✅ Object.values(): Returns an array of property values.
console.log(Object.values(s));
// Output: ["John", 30, [...], [...]]

Object.values(s).forEach((value) => console.log(value));
// Output: John, 30, [Array of cities], [Array of subjects]

// ✅ Object.entries(): Returns an array of key-value pairs.
console.log(Object.entries(s));
// Output: [["name","John"],["age",30],["city",[...]],["subjects",[...]]]

Object.entries(s).forEach(([key, value]) => console.log(key, value));
// Output: name John
//         age 30
//         city [Array]
//         subjects [Array]

// ✅ Object.assign(): Copies properties from source objects into a target object.
let obj2 = { name: "John", age: 30 };
let obj3 = { city: "New York", subjects: ["Math", "Science"] };
// syntax: Object.assign(target, source1, source2,...
// This will create a new object with properties from obj2 and obj3.
// obj4 will have properties from both obj2 and obj3.
let obj10;
let obj4 = Object.assign({}, obj2, obj3);
Object.assign({obj10}, obj2, obj3); // obj10 will have properties from both obj2 and obj3.
console.log("Obj4:",obj4);
console.log("Obj10:", obj10); // Output: { name: "John", age: 30, city: "New York", subjects: ["Math", "Science"] }

// Output: { name: "John", age: 30, city: "New York", subjects: ["Math", "Science"] }

// ✅ Object.hasOwn(): Checks if property exists on object (not prototype).
let obj5 = { pi: 3.14 };
console.log(Object.hasOwn(obj5, "pi")); // Output: true

// hasOwnProperty() Example
let obj6 = Object.create(obj5);
console.log(obj6.hasOwnProperty("pi")); // Output: false

// diffrence between hasOwn() and Object.hasOwnProperty()
// hasOwn() checks if a property exists on the object itself, not on the prototype chain.
// Object.hasOwnProperty() checks if a property exists on the object itself, not on the prototype chain.


// Adding property to obj7
let obj7 = Object.create(obj5);
obj7.pi = 3.14159;
console.log(obj5.pi); // Output: 3.14
console.log(obj7.pi); // Output: 3.14159

// ✅ Object.seal(): Prevent adding new properties, but allows modifying existing ones.
Object.seal(obj7);
obj7.age = 35;
console.log(obj7.age); // Output: undefined
// obj7.newProp = "test"; // ❌ Won't add because object is sealed

// ✅ Object.freeze(): Prevents all modifications (read-only object).
Object.freeze(obj7);
obj7.pi = 40; // ❌ Won't change because object is frozen
console.log(obj7.pi); // Output: 3.14159

// ✅ delete Operator: Removes a property from an object.
let obj8 = { name: "John", age: 30 };
delete obj8.name;
console.log(obj8.name); // Output: undefined

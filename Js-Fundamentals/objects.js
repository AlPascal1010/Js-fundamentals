// what is an object in JavaScript?
// An object in JavaScript is a collection of properties, where each property is defined as a key-value pair. Objects can represent real-world entities and can contain various types of data, including strings, numbers, arrays, functions, and even other objects. They are a fundamental part of JavaScript and are used to store and manipulate data in a structured way.

//ways to create objects
// 1. Object Literal
const person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
console.log(person);


// 2. Using the Object Constructor
const car = new Object();
car.make = "Toyota";
car.model = "Camry";
car.year = 2020;

console.log(car);

const bikes = new Object({
    make: "Giant",
    model: "Talon",
    year: 2021
});

console.log(bikes);

// 3. Using a Constructor Function
function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
}
console.log(new Student("John", 20, "A"));

// 4. Using Object.create()
const animal = {
    type: "Mammal",
    sound: "Roar"
};
const dog = Object.create(animal);
dog.name = "Buddy";
console.log(dog);

// 5. Using ES6 Classes
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
}

const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
console.log(book);

// 6. Using Object.assign()
const source = { a: 1, b: 2 };
const target = {};
Object.assign(target, source);
console.log(target);

// 7. Using JSON.parse()
const jsonString = '{"name": "Alice", "age": 30, "city": "New York"}';
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject);

// 8. Using the Spread Operator
const original = { x: 1, y: 2 };
const copy = { ...original };
console.log(copy);

// 9. Using Object.fromEntries()
const entries = [['name', 'Alice'], ['age', 30], ['city', 'New York']];
const objFromEntries = Object.fromEntries(entries);
console.log(objFromEntries);

// 10. Using Object.defineProperty()
const person2 = {};
Object.defineProperty(person2, 'name', {
    value: 'Alice',
    writable: true,
    enumerable: true,
    configurable: true
});
console.log(person2);

// 11. Using Object.defineProperties()
const person3 = {};
Object.defineProperties(person3, {
    name: {
        value: 'Alice',
        writable: true,
        enumerable: true,
        configurable: true
    },
    age: {
        value: 30,
        writable: true,
        enumerable: true,
        configurable: true
    }
});
console.log(person3);

// 12. Using Object.freeze()
const frozenObject = Object.freeze({ name: 'Alice', age: 30 });
console.log(frozenObject);

// 13. Using Object.seal()
const sealedObject = Object.seal({ name: 'Alice', age: 30 });
console.log(sealedObject);

// 14. Using Object.getOwnPropertyDescriptors()
const obj = { name: 'Alice', age: 30 };
const descriptors = Object.getOwnPropertyDescriptors(obj);
console.log(descriptors);

// 15. Using Object.getOwnPropertyNames()
const obj2 = { name: 'Alice', age: 30 };
const propertyNames = Object.getOwnPropertyNames(obj2);
console.log(propertyNames);

// 16. Using Object.getOwnPropertySymbols()
const obj3 = { name: 'Alice', age: 30 };
const symbol1 = Symbol('symbol1');
obj3[symbol1] = 'symbol value';

// Accessing properties in an object
console.log(obj3.name); // 'Alice'
console.log(obj3.age); // 30
console.log(obj3[symbol1]); // 'symbol value'
console.log(Object.getOwnPropertySymbols(obj3)); // [Symbol(symbol1)]




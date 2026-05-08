"use strict";
// problem 1
function filterEvenNumbers(numbers) {
    return numbers.filter((number) => number % 2 === 0);
}
// problem 2
function reverseString(value) {
    return value.split("").reverse().join("");
}
function checkType(value) {
    if (typeof value === "string") {
        return "String";
    }
    return "Number";
}
// problem 4
function getProperty(obj, key) {
    return obj[key];
}
function toggleReadStatus(book) {
    return {
        ...book,
        isRead: true,
    };
}
// problem 6
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
// problem 7
function getIntersection(array1, array2) {
    return array1.filter((item) => array2.includes(item));
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
console.log(reverseString("typescript"));
console.log(checkType("Hello"));
console.log(checkType(42));
const user = {
    id: 1,
    name: "John Doe",
    age: 21,
};
console.log(getProperty(user, "name"));
const myBook = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024,
};
console.log(toggleReadStatus(myBook));
const student = new Student("Alice", 20, "A");
console.log(student.getDetails());
console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

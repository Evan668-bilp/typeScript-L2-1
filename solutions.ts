// problem 1

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((number) => number % 2 === 0);
}


// problem 2


function reverseString(value: string): string {
  return value.split("").reverse().join("");
}




// problem 3

type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  }

  return "Number";
}





// problem 4


function getProperty<T, K extends keyof T>(
  obj: T,
  key: K
): T[K] {
  return obj[key];
}




// problem 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(
  book: Book
): Book & { isRead: boolean } {
  return {
    ...book,
    isRead: true,
  };
}




// problem 6

class Person {
  constructor(
    public name: string,
    public age: number
  ) {}
}

class Student extends Person {
  constructor(
    name: string,
    age: number,
    public grade: string
  ) {
    super(name, age);
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}





// problem 7
function getIntersection(
  array1: number[],
  array2: number[]
): number[] {
  return array1.filter((item) =>
    array2.includes(item)
  );
}



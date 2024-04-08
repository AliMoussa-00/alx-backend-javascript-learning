# 0x00. ES6 Basics

### What is ES6?

ES6, short for ECMAScript 6, is a significant update to the JavaScript language, bringing in a bunch of new features and improvements. It enhances the readability and efficiency of your code, making JavaScript development more enjoyable.

### Constants vs Variables

In JavaScript, you have two ways to declare things you want to store values in: constants and variables.

- **Constants** (`const`): Use these when you want something to stay the same once you've set it. It's like nailing something to the wall; you can't move it later.
  
  ```javascript
  const pi = 3.14;
  ```
  
- **Variables** (`let`): These are for when you might need to change the value later. It's like a sticky note; you can write and rewrite on it.
  
  ```javascript
  let count = 0;
  ```
  

### Block-Scoped Variables

When you declare a variable inside a curly brace `{}`, it stays inside there. Think of it like a secret code written on a sticky note in a room; it's only visible inside that room.

```javascript
{
  let secret = 'Shhh!';
  console.log(secret); // 'Shhh!'
}

console.log(secret); // Error: secret is not defined
```

### Arrow Functions and Default Parameters

Arrow functions are like shortcuts for writing functions. They're cool because they're shorter and can have default values for their parameters.

```javascript
const double = (x) => x * 2;

const greet = (name = 'stranger') => {
  console.log(`Hello, ${name}!`);
};

double(5); // 10
greet();   // Hello, stranger!
```

[more of arrow functions]([Arrow function expressions - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions))

### Rest and Spread Parameters

Rest parameters collect all remaining arguments into an array, while the spread operator spreads elements of an iterable (like an array) into individual elements.

```javascript
const sum = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

const numbers = [1, 2, 3, 4, 5];
console.log(sum(...numbers)); // 15
```

### String Templating

String templating lets you embed expressions within strings using `${}`.

```javascript
const name = 'John';
console.log(`Hello, ${name}!`); // Hello, John!
```

### Object Creation and Properties

- **Shorthand Property Assignment**:
  

In ES6, if the property name and variable name are the same, you can omit the property name when creating an object literal.

```javascript
const x = 10, y = 20;

// Shorthand property assignment
const point = { x, y };

console.log(point); // Output: { x: 10, y: 20 }
```

- **Computed Property Names**:
  

ES6 allows you to use expressions for property names in object literals using square brackets (`[]`).

```javascript
const propName = 'color';
const obj = {
  [propName]: 'blue'
};

console.log(obj.color); // Output: 'blue'

```

- **Object Destructuring**:
  

Object destructuring is a powerful feature that allows you to extract properties from objects and assign them to variables.

```javascript
const person = {
  name: 'John',
  age: 30,
  country: 'USA'
};

const { name, age } = person;

console.log(name); // Output: 'John'
console.log(age);  // Output: 30

```

You can also assign default values to variables in case the property doesn't exist in the object:

```javascript
const { name, age, gender = 'Male' } = person;

console.log(gender); // Output: 'Male' (since 'gender' property doesn't exist in 'person')

```

### Iterators and `for-of` Loops

Iterators are like tour guides for collections. They help you navigate through arrays, strings, and more.

- An **iterable** is like the collection itself, such as an array or a string. It's something that you can loop over or iterate through.
- An **iterator** is like the "pointer" or "index" that keeps track of where you are in the collection and provides a way to access the current element and move to the next one.

```javascript
const numbers = [1, 2, 3];

for (const num of numbers) {
  console.log(num); // 1, 2, 3
}
```

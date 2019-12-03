//es6 destructuring
let numbers = [45, 234, 56, 234, 7];
[one, two, three] = numbers;
//we can put an thing insted of one two and ...
console.log(one);

let obj = {
  name: "sina",
  birthYear: 1999,
  studying: ["HTML", "JS", "CSS"]
  // for obj we don`t need ;
};
let { studying } = obj;
console.log(studying);

let whatDoYouStudy = ({ studying }) => {
  for (let i = 0; i < studying.length; i++) {
    console.log(studying[i]);
  }
};
whatDoYouStudy(obj);

//es6 spread operator

let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [6, 7, 8, 9, 10];

let numbers3 = [...numbers1, ...numbers2];
console.log(numbers3);

//es6 classes
class Person {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }

  speak() {
    console.log("hello my name is " + this.name);
  }
  //same as th e function on top
  //   speak = () => {
  //     console.log("hello my name is " + this.name);
  //   };
}

let Sina = new Person("Sina", "604 987 65 23");
console.log(Sina);
Sina.speak();

class Student extends Person {
  constructor(name, phone, program) {
    super(name, phone);
    this.program = program;
  }
  study = () => {
    console.log("I`m stduying" + this.program);
  };
}
let Jose = new Student("Jose", "604 987 65 23", "IT");
console.log(Jose);
Jose.study();
Jose.speak();

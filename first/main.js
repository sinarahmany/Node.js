let students = ["jose","sina","taylor","tom"];
students.push("hamed");
students.pop();
students.unshift("alexa");
//students.shift();
//will remove the unshift item
console.log(students);

students.splice(1,2);
console.log(students);
console.log("The lenght of the students array is : ",students.length);

//************************** */

//template string literal

//let name = "Sina";
//console.log("hello my name is " + name );
//console.log(`hello my name is ${name} `);

let student = {
    name:"john doe",
    birthday:2000,
    hobby:["dancing","skiing","sleeping"]
    };
console.log(`hello my name is ${student.name}
i have borned in ${student.birthday}
and i like to ${student.hobby}` );

//es6 we have arrow functions 

function add(a,b){
    return a+b;
}
//same as the function up
// let add = function(a,b){
//     return a+b;
// }
//or 
//let add (a,b)=> return a+b;
console.log(add(10,5));



let doubleTheVal = val => val*2;
console.log(doubleTheVal(12));

let sayHi = () => "hi" ;
console.log(sayHi());
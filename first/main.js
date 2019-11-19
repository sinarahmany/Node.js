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


//********************************************** */





let john={
    name: "john doe",
    hobbies:["dancing","playing","running"],
    activity : function(){
        console.log(this.hobbies);
    }
};
john.activity();

//self ivoking functions
//by putting one more () before and after the function it will automatically call itself
let satHello = (()=>{
    console.log("HELL OOOOOOO!");
})();

//events to web page
//document.addEventListener("whats the actions?","whats the function");
document.getElementById("test").addEventListener("click",annoyingAlert);
function annoyingAlert (){
    alert("I am an annoying Alert");
}


//*************************** */
//map, filter, foreach ...
let primeNumbers = [2,3,5,7,11,13,17,19];
console.log(primeNumbers);
//we made the function below shorter
let doubleTheValues =  primeNumbers.map(number => number*2);
console.log("Double the values",doubleTheValues);

let lessThan10 = primeNumbers.filter(function (number){
    return number< 10 ;
});
console.log('less than ten',lessThan10);


/*let multiply = (firstValue) =>{
    return function(secondValue){
        return firstValue*secondValue;
    }
}*/
//shorter version of the function on top
let multiply = firstValue => (secondValue => firstValue*secondValue);
console.log(multiply(4)(5));
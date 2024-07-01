//! Object Definition:
//? An object refers to a fundamental data structure used to store and organize data through key-value pairs.
export {};
//! Objects
//? Syntax of an Object
//? Properties
//? Methods
//? Object Destructuring
//? Object Array
//! Types
//? Type Alias
//? Union Type
//? Intersection
//? Interface
//? Index Signature
//! For in loop
// const personName = "Muhammad Fasih";
//    personName : "Muhamad Fasih"
// const personAge = 20;
// const personID = 1234;
//! Objects
// const personInfo = {
// //? key : value
//   name: "Muhammad Fasih",
//   age: 20,
//   Id: 1234,
// };
//! Accessing a single property
//?1
// const myName: string = personInfo.name
// console.log(myName);
// const myAge: number = personInfo.age
// console.log(myAge);
//?2
// const myName: string = personInfo["name"];
//                       personInfo.name
// console.log(myName);
//?3 Object Destructure
// const myPerosonalInformation = {
//     name: "Muhammad Fasih",
//     age: 20,
//     isMarried: false,
// }
// console.log(myPerosonalInformation.name);
// let {name, age} = myPerosonalInformation;
// name = "Salman Shahid";
// console.log(`Destructured Name: ${name}`);
// console.log(`Object Name: ${myPerosonalInformation.name}`);
// console.log(age);
// console.log(myPerosonalInformation.isMarried);
//! Suppose
// const myObj : any = {
//     key1: "value1",
//     key2: "value2",
//     key3: "value3",
//     key4: "value4",
//     key5: "value5",
// }
// const unknownKey: string = "key3";
// const key = myObj[unknownKey];
// console.log(key);
//! Array
// const myInfo = ["Muhammad Fasih", 20, 12];
// console.log(myInfo[0]);
// const myObj = {
//     name: "Muhammad Fasih",
//     age: 20,
// }
// const myName: string = myObj.name;
// console.log(myObj.name);
//! In 2023
// const person = {
//     name:"Muhammad Fasih",
//     rollNum: 1234,
// }
// console.log(`In 2023`, person);
// //! 2024
// person.name = "Ahmed Naseem";
// person.rollNum = 678;
// console.log(`In 2024`, person);
// const myObj = {
//     name: "Muhammad Fasih",
//     age: 20,
// }
// console.log(myObj["age"]);
//! Methods
// function sum(a: number, b: number) {
//   return a + b;
// }
// const myAnswer: number = sum(10, 2);
// console.log(myAnswer);
// const myObj = {
//     name: 'Muhammad Fasih',
//     myFunc:() => {
//         return "Hello World!"
//     },
//     rollNum: 1234
// }
// const myAnswer = myObj.myFunc()
// console.log(myAnswer);
//! Array of Objects
//? Method 1
// const person1 = {
//     name:"Muhammad Fasih"
// }
// const person2 = {
//     name:"Ahmed Naseem"
// }
// const person3 = {
//     name:"Salman Shahid"
// }
// const myObjectArray = [person1, person2, person3];
// console.log(myObjectArray);
//? Method 2
// const myObjArray = [
//     {name:"Muhammad Fasih"},
//     {name:"Salman Shahid"},
//     {name:"Ahmed Naseem"},
// ]
//! Nested Object
// const myData = {
//     name: "Muhammad Fasih",
//     adress:{
//         location: "Karachi",
//     }
// }
// Accessing name
// console.log(myData)
// Accesing Karachi
// console.log(myData.adress.location);
// const myData = {
//   name: "Muhammad Fasih",
//   adress: {
//     country: {
//       city: {
//         location: "Johar",
//       },
//     },
//   },
// };
// Accessing name
// console.log(myData.name);
//Accesing Karachi
// console.log(myData.adress.country.city.location);
//! Destructure
// const {location} = myData.adress.country.city;
// console.log(location);
//! Types
// const person1: {
//     name: string;
//     age: number;
// } = {
//     name: "Muhammad Fasih",
//     age:20,
// }
// const person2: {
//     name: string;
//     age: number;
// } = {
//     name: "Muhammad Fasih",
//     age:20,
// }
// const person3: {
//     name: string;
//     age: number;
// } = {
//     name: "Muhammad Fasih",
//     age:20,
// }
//! Type alias
// const myName: string = "Fasih";
// type myType = {
//     name: string;
//     age: number;
// }
// const person1: myType = {
//     name: "Muhammad Fasih",
//     age: 20,
// }
// const person2: myType = {
//     name: "Muhammad Fasih",
//     age: 20,
// }
// const person3: myType = {
//     name: "Muhammad Fasih",
//     age: 20,
// }
//! Implicit
// const myObj = {
//     name: "Muhammad Fasih",
//     age: 20,
// }
//! Explicit
// type MyType = {
//     name: string;
//     age: number;
// }
// const myData: myType = {
//     name: "Muhammad Fasih",
//     age:20,
// }
// console.log(myData);
// {
//     name: string;
//     age: number;
// }
// ===
//  {
//     name: string;
//     age: number;
// }
//! Union type
// type A = {
//     name: string;
//     age: number;
// }
// type B = {
//     name: string;
//     rollNum: number;
//     isMArried: boolean;
// }
// type combined = A | B;
// const myObj: combined = {
//     name: "Muhammad Fasih",
//     age: 20,
//     rollNum: 123,
// }
//! Intersection &
// type Student = {
//     name: string;
//     rollNum: number;
// }
// type Teacher = {
//     name: string;
//     subject: string;
// }
// type combined = Student & Teacher;
// const myData:combined = {
//     name: "Muhammad Fasih",
//     rollNum: 1234,
//     subject: "Computer Science",
// }
//! Optional Key
// type abc = {
//     name: string,
//     age?: number,
// }
// const user: abc = {
//     name: "Muhammad Fasih",
//     age: 20,
// }
//! index Signature
// type abc = {
//      key       :  value    
// [dummy:string]: any;
// string means key is written with alphabets 
// }
// const myObj:abc = {
//     name: "Muhammad Fasih",
//     age:20,
//     isMarried: false,
// }
// const myObj: abc = {
//     obj: {
//         name:"Muhammad Fasih"
//     }
// }
//! For in loop (objects)
// const myObj: any = {
//     name: "Muhammad Fasih",
//     age:20,
// }
// for(const x in myObj){
//     console.log(myObj[x]); //Values
//     console.log(x); // Keys
// }
// for(const x in myObj){
//     console.log(`Keys: ${x}, Values: ${myObj[x]}`);
// }
//! Object.values
// const myObj = {
//     name:"Muhammad Fasih",
//     age:20,
// }
// const valueArray = Object.values(myObj);
// console.log(valueArray);
// //! Object.keys
// const myObj = {
//     name:"Muhammad Fasih",
//     age:20,
// }
// const valueArray = Object.keys(myObj);
// console.log(valueArray);
// console.log(Object.entries(myObj));
// const myObj = {
//     name: "Muhammad Fasih",
//     myFunc:() => {
//         myObj.name = "Ahmed Naseem";
//     }
// }
// let {name, myFunc} = myObj;
// name = "abc"
// console.log(name);
// myFunc()
// console.log(myObj.name);
// const myObj = {
//     name: "Muhamad Fasih",
//     age: 20,
//     isMArried: false,
// }
// const {name, age} = myObj;
//! Array
// const myArray = ["Fasih","Salman","Ahmed","Ali","Hamza"];
// const [person1, person2, person3] = myArray;
//       0          1        2
// console.log(person2);
// const num1: number = 10
// const num2: number = 5
// console.log(num2 < num1);
//           5      10

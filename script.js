// console.log('Welcome to JS');
// // alert('Hello, Welcome to JS');

// // Variables
// var a=9;

// // var a=10;
// console.log(a);   //Block 1

// {
//     var a=20;
//     console.log(a);  //Block 2
// }
// let b=23;
// console.log(b);
// {
//     let b=34;
//     console.log(b);
// }
// console.log(b);
// //const
// const t=30;
// console.log(t);
// {
//     const t=90;
//     console.log(t);
// }
// console.log(t);
// // Data Types
// var nam='Varna';
// console.log(typeof(nam));
// var nam='Enjoy Programming';
// console.log(typeof(nam));
// // Numbers
// var count=10;
// console.log(typeof(count));
// // Boolean
// var ab=true;
// console.log(typeof(ab));
// var gtype;
// console.log(typeof(gtype));
// // Arrays
// let ar=['Red','Blue','White',10];
// console.log(ar[3]);
// console.log(ar.length);
// ar.push('Violet');
// console.log(ar);
// ar.pop();
// console.log(ar);
// // JavaScript Objects
// let car={
//     mileage:100,
//     model:'i10',
//     color:'Red'
// }
// console.log(car);
// console.log(car.model);
// console.log(car.mileage);
// let person=new Object();
// person.gender='male';
// person.height=180;
// console.log(person);

// Arithmetic Operators
// var A=5, B=3;
// console.log(A+B);
// console.log(A-B);
// console.log(A*B);
// console.log(A/B);
// console.log(A%B);

// var a=10;
// var b=a++
// console.log(b);
// console.log(a);

// var a=10;
// var b=++a
// console.log(b);
// console.log(a);

// // If ELSE
// if (a==b && a==10) {
//     console.log('a is equal to b');
    
// } else {
//     console.log('a is not equal to b and a is not to 10');
    
// }

// if (a!=b) {
//     console.log('a is not equal to b');
    
// } else {
//     console.log('a is greater than b');
    
// }
 
// c=10, d='10';
// if (c==d) {
//     console.log('c is equal to d');
// } else {
//     console.log('c is not equal to d') ;
// }

// a=20, b=40;
// if (a>b || a==20) {
//     console.log('a is greater than b or a is equal to 20');
// } else {
//     console.log('a is not greater than b or a not is equal to 20')
// }

// if (a>b && a==20) {
//     console.log('a is greater than b and a is equal to 20');
// } else {
//     console.log('a is not greater than b and a not is equal to 20')
// }

// Assignment Operators
// let add=6;
// add /= 3;
// console.log(add);

// Bitwise Operators
// var add=exp;
// let a=10, b=34, c=70, d=12;
// // console.log(add);
// var exp=a+b*(c-d)-7;
// console.log(exp);

const arr2=[
    {
        Name:"Maya"
    },{
        Name:"Krishna"
    }
]

// Functions
function display(name)
{
    console.log('Hi '+name+" Welcome to JS");
}
display("Varna");  

function add(x,y)
{
    var result=x+y;
    return result;
}
var result=add(10,20);
console.log('The sum is '+result);

// Substraction
function sub(a,b)
{
    var result=a-b;
    return result;
}
var result=sub(40,20);
console.log('The substraction is '+result);

// Multiplication
function pro(c,d)
{
    var result=c*d;
    return result;
}
var result=pro(5,6);
console.log('The product is '+result);
















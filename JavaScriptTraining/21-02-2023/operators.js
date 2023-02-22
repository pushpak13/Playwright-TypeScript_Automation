let x=23,y=35;

//Arithmetic operations
console.log(x+y);

x=10;
y=80;
//x=x+y;
x+=y;
console.log(x);

let num=6
let str = "Hello"
x=num/str
console.log(x);

//exponential
x=2**3**2
console.log(x);

//post increment
num=8
x=num++
console.log(x, num);//result will be x=8, num=9

//pre increment
num=7
x=++num
console.log(x, num);// result will be x=8, num=8

//Relational operators
x=5
y=6
console.log(x>y);

x="5"
y=4
console.log(x>y);

x="Name"
y="Namesake"
console.log(x<y);

x="4"
y=4
console.log(x==y);//Even though x and y are of different types it shows true when checked for equality
//to check for type as well as data equality use '==='
console.log(x===y);//result is false

//Logical Operators
x=4, y=6, z=5
let result = x<y && y<z
console.log(result);
x=6, y=9, z=8
result = x<y || y<z
console.log(result);
let n = !result
console.log(result, n);
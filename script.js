//console table 01
const user = [
    { id: 1, name: 'Dasun Kumara' },
    { id: 2, name: 'Kavinda Nuwan' }
];

console.table(user);

//see how mutch time got to fetch data  02
console.time('fetching')
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(() => console.timeEnd('fetching'));


//console dir 03
const obj = {
    name: 'Dasun',
    age: 22
}

console.dir(obj);


//console trace 04
function fun1() {
    console.trace();
}
function fun2() {
    fun1();
}

fun2();

//console assert 05
const add = (a, b) => a - b;
const result = add(2, 3);
console.assert(result === 5, "Expected 5");

//console count 06
function fun(x) {
    console.count(x);
}

fun("Hi");
fun("Hi");
fun("Hi");

//console clear 07
console.log("pre message");
// console.clear(); uncommmet this line only when you testing 
console.log("new message");

//console group 08
console.group("Do This");
console.log("Follow");
console.log("like");
console.groupEnd();



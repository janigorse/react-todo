/*
function add(a, b) {
    return a + b;
}

console.log(add(3, 1));

var toAdd = [9, 5];
console.log(add(...toAdd));
*/

/*var groupA = ['Jen', 'Cory'];
var groupB = ['Vikram'];
var final = [...groupB, 3, ...groupA];

console.log(final);*/

// Example 1
var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
// Hi Andrew, you are 25
function textName(name, age) {
    console.log('Hi ' + name + ', you are ' + age);
}

textName(...person);
textName(...personTwo);

// Example 2
var names = ['Mike', 'Ben'];
var final = ['Jani', ...names];

function writeNames(finalArray) {
    for(var count = 0; count < finalArray.length; count++) {
        console.log('Hi ' + finalArray[count]);
    }
}

writeNames(final);
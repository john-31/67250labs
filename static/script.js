let x = 5
let y = 7

let A = 'Hello ';
let B = 'world!';
function SumNPrint(x1, x2) {
    let x3 = x1 + x2;
    console.log(x3);
    return x3;
}

let z = SumNPrint(x, y);

let C = SumNPrint(A, B);

console.log(z);
console.log(C);

if (C.length > z) {
    console.log(C);

} else if (C.length < z) {
    console.log(z);
} else {
    console.log('good job!');
}


let L1 = ['Watermelon', 'Pineapple', 'Pear','Banana'];
let L2 = ['Apple', 'Banana', 'Kiwi', 'Orange']

function findTheBanana(array, arrayName) {
    array.forEach((item, index) => {
        if (item === "Banana") {
            alert(`We found a banana in the ${arrayName} at index ${index}`);
            return;
        }
    });
}
findTheBanana(L1, 'first array');
findTheBanana(L2, 'second array');

function greetingFunc() {
    let d = new Date();
    let h = d.getHours();
    let greetingMessage = '';
    if (h < 12) {
        greetingMessage = 'Good morning, I am John';
    } else if (h < 18) {
        greetingMessage = 'Good afternoon, I am John';
    } else if (h < 20) {
        greetingMessage = 'Good evening, I am John';
    } else {
        greetingMessage = 'Good night, I am John';
    }


    document.getElementById("greeting").innerHTML = greetingMessage;
}
greetingFunc();
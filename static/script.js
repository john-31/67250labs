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


document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("funList")) {
        let L1 = ['Watermelon', 'Pineapple', 'Pear', 'Banana'];
        let L2 = ['Apple', 'Banana', 'Kiwi', 'Orange'];

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
    }

    if (document.getElementById("contactForm")) {
        document.getElementById("contactForm").addEventListener("submit", function (event) {
            let isValid = true;

            let nameField = document.getElementById("name");
            let emailField = document.getElementById("email");
            let messageField = document.getElementById("message");

            let nameError = document.getElementById("nameError");
            let emailError = document.getElementById("emailError");
            let messageError = document.getElementById("messageError");

            nameError.textContent = "";
            emailError.textContent = "";
            messageError.textContent = "";

            if (nameField.value.trim() === "") {
                nameError.textContent = "Please enter your name.";
                isValid = false;
            }

            if (emailField.value.trim() === "") {
                emailError.textContent = "Please enter your email.";
                isValid = false;
            } else if (!/\S+@\S+\.\S+/.test(emailField.value)) {
                emailError.textContent = "Please enter a valid email address.";
                isValid = false;
            }

            if (messageField.value.trim() === "") {
                messageError.textContent = "Please enter your message.";
                isValid = false;
            }

            if (!isValid) {
                event.preventDefault();
            }
        });
    }
});

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

function addYear() {
    let currentYear = new Date().getFullYear();
    document.getElementById("copyYear").innerHTML = `&copy; ${currentYear}`;
}

function showList() {
    let list = document.getElementById("funList");
    let button = document.getElementById("showButton");

    if (list && button) { 
        list.style.display = "block"; 
        button.style.display = "none"; 
    }
}

$(document).ready(function () {
    $("#readMoreBtn").click(function () {
        $("#shortBio").hide();
        $("#fullBio").slideDown();
        $("#readMoreBtn").hide();
        $("#readLessBtn").show();
    });

    $("#readLessBtn").click(function () {
        $("#fullBio").slideUp();
        $("#shortBio").show();
        $("#readMoreBtn").show();
        $("#readLessBtn").hide();
    });
});

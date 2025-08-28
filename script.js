// =======================
// Part 1: Variables & Conditionals
// =======================
const ageInput = document.getElementById('ageInput');
const checkAgeBtn = document.getElementById('checkAgeBtn');
const ageResult = document.getElementById('ageResult');

checkAgeBtn.addEventListener('click', function() {
    let age = Number(ageInput.value); // Variable declaration & type conversion
    if (isNaN(age) || age <= 0) { // Conditional
        ageResult.textContent = "Please enter a valid age.";
    } else if (age >= 18) {
        ageResult.textContent = "You are an adult.";
    } else {
        ageResult.textContent = "You are a minor.";
    }
});

// =======================
// Part 2: Functions
// =======================

// Function to calculate square
function squareNumber(num) {
    return num * num;
}

const numInput = document.getElementById('numInput');
const squareBtn = document.getElementById('squareBtn');
const squareResult = document.getElementById('squareResult');

squareBtn.addEventListener('click', function() {
    let number = Number(numInput.value);
    if (isNaN(number)) {
        squareResult.textContent = "Please enter a number.";
    } else {
        squareResult.textContent = `Square: ${squareNumber(number)}`; // Function usage
    }
});

// Another function example: greeting
function greetUser(name) {
    return `Hello, ${name}! Welcome to the site.`;
}

// =======================
// Part 3: Loops
// =======================
const loopBtn = document.getElementById('loopBtn');
const loopResult = document.getElementById('loopResult');

loopBtn.addEventListener('click', function() {
    let numbers = [];
    for (let i = 1; i <= 5; i++) { // for loop
        numbers.push(i);
    }
    loopResult.textContent = "Numbers: " + numbers.join(", ");

    // while loop example
    let count = 5;
    let countdown = "";
    while (count > 0) {
        countdown += count + " ";
        count--;
    }
    loopResult.textContent += "\nCountdown using while loop: " + countdown;
});

// =======================
// Part 4: DOM Manipulation
// =======================
const changeTextBtn = document.getElementById('changeTextBtn');
const toggleColorBtn = document.getElementById('toggleColorBtn');
const addElementBtn = document.getElementById('addElementBtn');
const dynamicContainer = document.getElementById('dynamicContainer');
const heading = document.querySelector('h1');

// Change heading text
changeTextBtn.addEventListener('click', function() {
    heading.textContent = "Heading Text Changed!";
});

// Toggle background color
toggleColorBtn.addEventListener('click', function() {
    document.body.style.backgroundColor =
        document.body.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
});

// Add new paragraph dynamically
addElementBtn.addEventListener('click', function() {
    const p = document.createElement('p');
    p.textContent = "This paragraph was added dynamically!";
    dynamicContainer.appendChild(p);
});

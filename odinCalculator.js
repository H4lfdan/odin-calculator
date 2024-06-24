const output = document.getElementById('output');
function add() {
    const x = parseInt(document.getElementById('inputOne').value);
    const y = parseInt(document.getElementById('inputTwo').value);
    let z = x + y;
    output.innerHTML = z;
    console.log(z);
}

function subtract() {
    const x = parseInt(document.getElementById('inputOne').value);
    const y = parseInt(document.getElementById('inputTwo').value);
    let z = x - y;
    output.innerHTML = z;
    console.log(z);
}

function multiply() {
    const x = parseInt(document.getElementById('inputOne').value);
    const y = parseInt(document.getElementById('inputTwo').value);
    let z = x * y;
    output.innerHTML = z;
    console.log(z);
}

function divide() {
    const x = parseInt(document.getElementById('inputOne').value);
    const y = parseInt(document.getElementById('inputTwo').value);
    let z = x / y;
    output.innerHTML = z;
    console.log(z);
}
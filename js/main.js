//Generate random number
function getPin() {
    let random = Math.random() * 10000;
    let pin = (random + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}


//display generate pic
function generatePin() {
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}


//handle calculator button event
const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        //handle backspace
        //handle clear
    } else {
        const typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + digit;
    }
})


//check Pin
function checkPin() {
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typed-pin').value;
    if (pin === typedPin) {
        const correct = document.getElementById('correct-pin');
        correct.style.display = 'block';
    } else {
        const incorrect = document.getElementById('incorrect-pin');
        incorrect.style.display = 'block';
    }
}
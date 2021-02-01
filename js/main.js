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


//click on Generate Pin button hide the correct and incorrect message 
const generateBtn = document.getElementById('pin-generate');
generateBtn.addEventListener('click', function () {
    const hideCorrectPin = document.getElementById('correct-pin');
    hideCorrectPin.style.display = 'none';

    const hideIncorrectPin = document.getElementById('incorrect-pin');
    hideIncorrectPin.style.display = 'none';

    //Reload the typed pin area
    document.getElementById('typed-pin').value = "";

})


//handle calculator button event
const buttonContainer = document.getElementById('digits-container');
buttonContainer.addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        // //handle backspace
        // // const backSpace = document.getElementById('backspace');
        // // backSpace.addEventListener('click', function () {
        // //     typedInput = document.getElementById('typed-pin');
        // //     typedInput.value = digit - " ";

        // });
        //handle clear
        const clear = document.getElementById('clear');
        clear.addEventListener('click', function () {
            document.getElementById('typed-pin').value = "";
        });

    } else {
        let typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + digit;
    }
})


//check Pin
function checkPin() {
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typed-pin').value;
    if (pin === typedPin) {
        displayMatchResult('block', 'none');

    } else {
        displayMatchResult('none', 'block');
    }
}


//display match result
function displayMatchResult(correctStatus, inCorrectStatus) {
    const correct = document.getElementById('correct-pin');
    correct.style.display = correctStatus;
    const incorrect = document.getElementById('incorrect-pin');
    incorrect.style.display = inCorrectStatus;
}
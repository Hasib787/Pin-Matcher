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

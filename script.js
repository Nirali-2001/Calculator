document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (!isNaN(key) || key === '.') {
        changeToDisplay(key);  // Add numbers and decimal point to display
    } else if (key === '+' || key === '-' || key === '*' || key === '/' || key === '%') {
        changeToDisplay(key);  // Add operators to display
    } else if (key === 'Enter') {
        calculate();  // Calculate result on Enter key
    } else if (key === 'Backspace') {
        delet();  // Delete last character on Backspace key
    } else if (key === 'Escape') {
        clearDisplay();  // Clear the display on Escape key
    }
});
function changeToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function delet() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        var result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
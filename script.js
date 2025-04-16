let display = document.getElementById("display");

function appendValue(value) {
    display.value += value; // Append the clicked button's value to the display
}

function clearDisplay() {
    display.value = ""; // Clear the display
}

function calculate() {
    try {
        display.value = eval(display.value); // Evaluate the expression in the display
    } catch (error) {
        alert("Invalid Expression"); // Handle invalid expressions
        clearDisplay();
    }
}
let display = document.getElementById("display");

function addValue(value) {
    if (display.value === "Error") {
        display.value = "";
    }

    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteNumber() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;

        if (expression === "") {
            return;
        }

        if (!/^[0-9+\-*/%.()\s]+$/.test(expression)) {
            display.value = "Error";
            return;
        }

        let result = Function('"use strict"; return (' + expression + ')')();

        if (!Number.isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = parseFloat(result.toFixed(10)).toString();
        }
    } catch {
        display.value = "Error";
    }
}
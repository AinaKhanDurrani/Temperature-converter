let fahInput = document.getElementById("fah");
let celInput = document.getElementById("cel");


function convert() {
    if (celInput.value !== "") {
        to_fahrenheit();
    } else if (fahInput.value !== "") {
        to_celsius();
    }
}

function to_fahrenheit() {
    let celsius = parseFloat(celInput.value);
    let fahrenheit = (celsius * 9/5) + 32;
    fah.value = fahrenheit.toFixed(2) +"°F";
}

function to_celsius() {
    let fahrenheit = parseFloat(fahInput.value);
    let celsius = (fahrenheit - 32) * 5/9;
    cel.value = celsius.toFixed(2)+"°C";
}
function clearIfEmpty(currentFieldId, otherFieldId) {
    var currentField = document.getElementById(currentFieldId);
    var otherField = document.getElementById(otherFieldId);

    if (currentField.value === "") {
        otherField.value = "";
    }
}
// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a "loop" variable
var x;

// Full-width images
function one() {
    for (x = 0; x < elements.length; x++) {
        elements[x].style.flex = "100%";
    }
}

// Two images side by side
function two() {
    for (x = 0; x < elements.length; x++) {
        elements[x].style.flex = "50%";
    }
}

// Four images side by side
function four() {
    for (x = 0; x < elements.length; x++) {
        elements[x].style.flex = "25%";
    }
}
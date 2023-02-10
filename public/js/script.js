var score = document.getElementById("score");
var output = document.getElementById("demo")
output.innerHTML = score.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
score.oninput = function() {
    output.innerHTML = this.value;
}
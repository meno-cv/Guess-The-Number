let randomNum = Math.floor(Math.random() * 10) + 1;
console.log("Random Number:", randomNum);

let attempts = 0;
const maxAttempts = 3;

function submitBtn() {

    let numinput = Number(document.getElementById("guessInput").value);
    let heading = document.getElementById("result");
    let submitButton = document.getElementById("submitButton");
    if (numinput<1 || numinput>10 || isNaN(numinput)) {
        heading.innerText = "Please enter a number between 1 and 10.";
        return;
    }

    attempts++;

    if (numinput > randomNum) {
        heading.innerText = `Too High! Attempts Left: ${maxAttempts - attempts}`;
        Swal.fire({
            icon: "error",
            title: "Too High!",
            text: "Try again!",
        });
    }
    else if (numinput < randomNum) {
        heading.innerText = `Too Low! Attempts Left: ${maxAttempts - attempts}`;
        Swal.fire({
            icon: "error",
            title: "Too Low!",
            text: "Try again!",
        });
    }
    else {
        heading.innerText = `You guessed the number in ${attempts} attempts!`;
        submitButton.disabled = true;
        Swal.fire({
            title: "You Guessed the Number!",
            icon: "success",
            draggable: true
        });
        return;
    }

    // Game over after 3 attempts 
    if (attempts >= maxAttempts) {
        heading.innerText = `Game Over! The number was ${randomNum}.`;
        submitButton.disabled = true;
    }
}

function resetBtn() {
    randomNum = Math.floor(Math.random() * 10) + 1;
    console.log("New Random Number:", randomNum);

    attempts = 0;

    document.getElementById("guessInput").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("submitButton").disabled = false;
}




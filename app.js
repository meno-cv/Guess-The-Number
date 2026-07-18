function submitBtn() {

    let randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);

    let numinput = Number(document.getElementById("guessInput").value);
    let heading = document.getElementById("result");

    if (numinput > randomNum) {
        heading.innerText = "Too High!";
    }
    else if (numinput < randomNum) {
        heading.innerText = "Too Low!";
    }
    else {
        heading.innerText = "You guessed the Number!";
    }
}

function resetBtn(){
    document.getElementById("guessInput").value = "";
    document.getElementById("result").innerText = "";
}

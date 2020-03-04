console.log("Classwork JS Linked");//Link Check

main = () => {
    // ex1();
    ex2();
    // ex3();
}


ex1 = () => {
    //     ### Exercise 1: click handler/text
    // Create a simple form with a single `checkbox` and the message `DON'T CLICK THIS CHECKBOX!`. When the User tries to click checkbox, change the label for the checkbox to say, `I TOLD YOU NOT TO CLICK THIS!!!`

    // Make reference variables for elements you intend to interact with
    let boxLabel = document.querySelector("label");
    let checkBox = document.getElementById("checkbox");
    console.log(boxLabel);
    console.log(checkBox);
    // Create Function to perform action on event signal
    changeText = (click) => {
        console.log("changeText Called");//Debug Message
        boxLabel.innerText = ("I TOLD YOU NOT TO CLICK THIS!!!");
    }
    checkBox.addEventListener("click", changeText);
}

ex2 = () => {
    //     ### Exercise 2: add/remove attributes
    // Create a simple form with a fieldset, legend of `Post Text`, textarea, a *hidden* `<h2>` message with the text `Start typing`, and a button that says `Allow Typing`. 

    // Make reference variables for elements you intend to interact with
    let postBox = document.getElementById("userText");
    console.log(postBox);
    let allowButton = document.getElementById("AllowButton");
    console.log(allowButton);
    let hiddenH2 = document.querySelector("h2");
    console.log(hiddenH2);

    // Create Function to perform action on event signal
    allowUserText = (click) => {
        hiddenH2.removeAttribute(click);
        console.log("ChangeText2 Called");//Debug Message
    }

    allowButton.addEventListener("click", allowUserText);
}

ex3 = () => {
    //     ### Exercise 3: timers
    // Create a button with the text `Start countdown!`. When the User clicks the button, display a countdown sequence in the browser as an `<h2>` from 10 to `LIFTOFF!!`. Display each number during the countdown for *1 second*, leading up to the word `LIFTOFF`.



}

main();
function HideServerValidationPanel(errorBox) {
    if (document.getElementById(errorBox) != null) {
        document.getElementById(errorBox).style.display = "none";
    }
}
function LoadValidationErrorPanel(arrMessage) {

    let myMain = document.getElementById("MainErrorTag");
    if (myMain.firstChild != null) {
        myMain.removeChild(myMain.firstChild);
    }
    let myDiv = document.createElement("div");
    let myUL = document.createElement("ul");
    let myPara = document.createElement("p");
    let myImg = document.createElement("img");
    let myDesc = document.createElement("strong");

    myDiv.className = "ofWrapper";
    myDesc.innerText = "Please correct the following details before proceeding ...";
    myPara.appendChild(myImg);

    myPara.appendChild(myDesc);
    myDiv.appendChild(myPara);
    let myLi;
    for (let j = 0; j < arrMessage.length; j++) {
        myLi = document.createElement("li");
        myLi.innerText = arrMessage[j];
        myUL.appendChild(myLi);
    }
    myDiv.appendChild(myUL);
    myMain.appendChild(myDiv);
}

function checkLists(myInput, arrayMatches) {
    // Validate lowercase letters
    let i = 0;
    let lowerCaseLetters = /[a-z]/g;
    if (!myInput.value.match(lowerCaseLetters))
        arrayMatches[i++] = "> User lowercase alphabets";

    // Validate capital letters
    let upperCaseLetters = /[A-Z]/g;
    if (!myInput.value.match(upperCaseLetters))
        arrayMatches[i++] = "> User uppercase alphabets";

    // Validate numbers
    let numbers = /[0-9]/g;
    if (!myInput.value.match(numbers))
        arrayMatches[i++] = "> User numbers '0-9'";

    // Validate special characters
    let specialChars = /['%','$','#','@','!']/g;
    if (!myInput.value.match(specialChars))
        arrayMatches[i++] = "> User special characters include '%$#@!'";

    // Validate length
    if (myInput.value.length < 6)
        arrayMatches[i++] = "> password should be at lease 6 alphanumerics";

    if (arrayMatches.length == 0)
        document.getElementById("pnlMessage").style.display = "none";
    else
        document.getElementById("pnlMessage").style.display = "block";
}
function DisplayErrorsbtn() {
    let arrayMatches = [];
    checkLists(myInput, arrayMatches)
    if (arrayMatches.length > 0) {
        LoadValidationErrorPanel(arrayMatches);
        console.log("has error in pass");
    }
    else {
        console.log("pass is ok");
    }
}
function onFocus() {
    document.getElementById("pnlMessage").style.display = "block";
}
function onBlur() {
    document.getElementById("pnlMessage").style.display = "none";
}

function validateEmail() {
    let result = true;
    let userError = document.getElementById("userError")
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(myUser.value)) {
        if (myUser.value.indexOf("@gmail.com", myUser.value.length - "@gmail.com".length) == -1) {
            result = false;
        }
    } else {
        result = false;
    }
    if (!result) {
        
        userError.textContent = "Invalid email- please enter a valid mail in gmail domain";
        userError.style.color = 'red';
        userError.display = "inline-block";
    }
    else {
        userError.display = "none";
        userError.textContent = "";
    }

}

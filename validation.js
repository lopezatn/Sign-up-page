function validateForm() {
    
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    if (!isValidName(firstName) || !isValidName(lastName)) {
        alert("The name you choosed is not valid. (make sure you're not using any special characters and your name is longer than one character.)")
        return;
    }
    
    document.getElementById("signupForm").submit();
}

function isValidName(value) {

    return typeof value === "string" && value.length >= 1;

}
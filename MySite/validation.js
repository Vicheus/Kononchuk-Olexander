function formValidation() {
    var uname = document.login.userName;
    var pass = document.login.password;
    if (validationPassword(pass, 25, 1)) {
        if (validationUsername(uname)) {
        }
    window.open("index.php", "_self")
    }
    return false;
}
function validationUsername(uname) {
    var letters = /^[A-Za-z]+$/;
    if (userName.value.match(letters)) {
        return true;
    }
    else {
        alert("User name must contains only alphabetic characters");
        userName.focus();
        return false;
    }
}
function validationPassword(pass, max, min) {
    var passLength = password.value.length;
    if (passLength == 0 || passLength < min || passlength > max) {
        alert("Min length of the password must be: " + min + ", max length must be: " + max + " and password can not be empty");
        password.vocus();
        return false;
    }
    else {
        window.open("index.php", "_self");
        return true;
    }
}

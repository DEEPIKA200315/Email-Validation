 // functionfor email validation
 function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Invalid email address!");
        return false;
    }
    alert("Email is valid!");
    return true;
}

// funtion for username validation

function validateUser(user) {
    var userPattern = /^[a-zA-Z0-9]{0,8}$/;
    if (!userPattern.test(user)) {
        // alert("Invalid user name");
        return false;
    }
    else {
        // alert("Valid user name");
        return true;
    }
}

//funtion for Password validationP

function validatePassword(pass) {
    var passwordPattern = /^[a-zA-Z]+@[0-9]{0,8}$/;
    if (!passwordPattern.test(pass)) {
        alert("Invalid Username and Password");
    }
    else {
        alert("Valid Username and Password");
    }
}
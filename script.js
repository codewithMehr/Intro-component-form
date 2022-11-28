const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener('submit', e => {
    e.preventDefault();


    var firstName = fname.value.trim();
    var lastName = lname.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (firstName === '') {
        errorfunc(fname, "First name cannot be empty")
    }
    else {
        successfunc(fname);
    }
    if (lastName === '') {
        errorfunc(lname, "Last name cannot be empty")
    }
    else {
        successfunc(lname);
    }
    if (emailValue === '') {
        errorfunc(email, "email cannot be empty")
    } else if (!emailValue.match(pattern)) {
        errorfunc(email, "Looks like this is not an email")
    }
    else {
        successfunc(email);
    }
    if (passwordValue === '') {
        errorfunc(password, "password cannot be empty")
    }
    else {
        successfunc(password);
    }
})

function errorfunc(req, message) {
    const formControl = req.parentElement;
    const span = formControl.querySelector('span');
    span.innerText = message;
    req.className = 'error';
    span.className = 'error-text'

}

function successfunc(req) {
    req.className = 'success'
}
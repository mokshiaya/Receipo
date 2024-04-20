function signUp(event) {
    var username = document.getElementById('signup-username').value.trim();
    var email = document.getElementById('signup-email').value.trim();
    var pass= document.getElementById('signup-password').value.trim();
    var confirmPass = document.getElementById('confirm-password').value.trim();
    event.preventDefault();

    if (username.trim() === '' || email.trim() === '' || pass.trim() === '' || confirmPass.trim() === '') {
        alert('Please fill in all fields');
        return;
    }
    var atposition=mail.indexOf("@");
    var dotposition=mail.lastIndexOf(".");
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=mail.length) {
        window.alert("Please enter valid email");
        return;
    }
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*()\-+.]).{6,20}$/;
            if (!regex.test(pass)){
                  window.alert("Format is incorrect");
                  return;
            }


    if (pass !== confirmPass) {
        alert('Passwords do not match');
        return;
    }
    localStorage.setItem(username, JSON.stringify({ email: email, pass: pass }));
    alert('Signup successful!');
}

function login() {
    var username = document.getElementById('login-username').value;
    var pass = document.getElementById('login-password').value;

    var userData = JSON.parse(localStorage.getItem(username));
    if (!userData) {
        alert('User not found. Please sign up.');
        return;
    }

    if (pass!== userData.pass) {
        alert('Incorrect password');
        return;
    }

    alert('Login successful!');
}

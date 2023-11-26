const signUpInput = document.getElementsByClassName('signUp');
const creAccoptionLabel = document.getElementsByClassName('advanLogin')[0];
const accOption = document.getElementsByClassName('acc')[0];
const inputLabel1 = document.getElementsByClassName('input-label')[1];
let dd = false;
document.getElementById('signUp').onclick = function() {
    if (dd == false) {
        signUp();
    } else if (dd == true) {
        login();
    }
}
document.getElementById('btn').onclick = function() {
    if (dd == false) {
        checkDataLogin();
        // console.log(dd);
    } else if (dd == true) {
        checkDataSignIn();
        // console.log(dd);
    }
}

function signUp() {
    signUpInput[0].style.display = 'block';
    signUpInput[1].style.display = 'block';
    signUpInput[2].style.display = 'block';
    creAccoptionLabel.innerText = 'Have account! ';
    accOption.innerText = 'Login an account'
    dd = true;
    inputLabel1.innerText = 'Email'
}

function login() {
    creAccoptionLabel.innerText = "Don't have account! "
    signUpInput[0].style.display = 'none'
    signUpInput[1].style.display = 'none'
    signUpInput[2].style.display = 'none'
    accOption.innerText = 'Create an account'
    dd = false;
    inputLabel1.innerText = 'Email or username'
}

function checkDataSignIn() {
    var checkFullName = document.getElementById('fullName').value;
    var checkUserName = document.getElementById('userName').value;
    var checkEmail = document.getElementById('email').value;
    var checkPass = document.getElementById('pass').value;
    var checkComfilmPass = document.getElementById('comfilmPass').value;
    if (checkFullName == '') {
        alert('Full Name must fill out!');
    } else if (checkUserName == '') {
        alert('User Name must fill out!');
    } else if (checkEmail == '') {
        alert('Email Sign up must fill out!');
    } else if (checkPass == '') {
        alert('Pass Word must fill out!');
    } else if (checkComfilmPass == '') {
        alert('Comfilm Password must fill out!')
    } else if (checkComfilmPass !== checkPass) {
        alert("Comfilm Password doesn't match with password sign up")
    } else {
        saveAccount()
    }
}

function checkDataLogin() {
    var checkEmail = document.getElementById('email').value;
    var checkPass = document.getElementById('pass').value;
    // console.log(dd);
    if (checkEmail == "") {
        alert('Please put Email or username into box input');
    } else if (checkPass == "") {
        alert('Please put password into box input');
    }
}
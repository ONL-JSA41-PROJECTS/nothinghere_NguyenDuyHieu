function CheckBrowser() { //Check Brower can support HTML5
    if ('localStorage' in window && window['localStorage'] !== null) {
        return true;
    } else {
        return false;
    }
}

function saveAccount() { //Create Account
    var fullName = document.getElementById('fullName').value;
    var userName = document.getElementById('userName').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('userName', userName);
    localStorage.setItem('email', email);
    localStorage.setItem('pass', md5(pass));
    localStorage.setItem('status', true);
    window.location.href = 'home.html';
    alert('Create account sucess!');
    // localStorage.isAnonymous = false;
    // localStorage.
}

function loginAccount() { //Login Account
    var userName = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    if (userName == localStorage.getItem('userName') ||
        localStorage.getItem('status') ||
        userName == localStorage.getItem('email') &&
        md5(pass) == localStorage.getItem('pass')) {
        localStorage.status = true;
        alert('Login Sucess!');
        window.location.href = 'home.html';
        // localStorage.isAnonymous = false;
    } else {
        alert('UserName and Password error or not match!');
        localStorage.status = false;
    }
}
const displayNameUser = document.getElementById('account');
const displayUserIcon = document.getElementById('iconUser');

function checkStatus() { //Change Text when Login of Logout
    // if (localStorage.getItem('isAnonymous') == 'true') {
    //     displayNameUser.innerHTML = 'anonymous';
    // } else
    if (localStorage.getItem('status') == 'undefined' ||
        localStorage.getItem('status') == 'undefined' ||
        localStorage.getItem('userName') == 'undefined' ||
        localStorage.getItem('email') == 'undefined' ||
        localStorage.getItem('pass') == 'undefined') {
        localStorage.setItem('status', false);
        displayNameUser.innerHTML = 'login';
        console.log('checked account 2');
    } else if (localStorage.getItem('status') == 'true') {
        displayNameUser.innerHTML = localStorage.userName;
        displayNameUser.setAttribute('href', 'login.after.html');
        console.log('checked account 1');
    } else if (localStorage.getItem('status') == 'false') {
        displayNameUser.innerHTML = 'Login';
        console.log('checked account 0');
    };
}

function logOutAccount() { //Logout Account
    localStorage.status = false;
    window.location.href = 'login.html';
    // window.location.reload;
    checkStatus();
}

function checkLogin() {
    if (localStorage.status = true) {
        document.getElementsByClassName('fix')[0].style.display = 'none';
    }
    checkStatus();
}
function CheckBrowser() { //Check Brower can support HTML5
    if ('localStorage' in window && window['localStorage'] !== null) {
        return true;
    } else {
        return false;
    }
}

function saveAccount() { //Create Account
    localStorage.quantity = localStorage.quantity + 1;
    var fullName = document.getElementById('fullName').value;
    var userName = document.getElementById('userName').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('userName', userName);
    localStorage.setItem('email', email);
    localStorage.setItem('pass', pass);
    localStorage.setItem('status', true);
    window.location.href = 'home.html';
    alert('Create account sucess!');
    // localStorage.
}

function loginAccount() { //Login Account
    var userName = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    if (userName == localStorage.getItem('userName') && pass == localStorage.getItem('pass')) {
        alert('Login Sucess!');
        localStorage.status = true;
        window.location.href = 'home.html';
    } else {
        alert('UserName and Password error or not match!');
    }
}
const displayNameUser = document.getElementById('account');
const displayUserIcon = document.getElementById('iconUser');

function checkStatus() { //Change Text when Login of Logout
    if (localStorage.getItem('status') == 'true') {
        displayNameUser.innerHTML = localStorage.userName;
        displayNameUser.setAttribute('href', 'login.before.html');
        displayUserIcon.style.display = 'block';
        console.log('checked account 1');
    } else if (localStorage.getItem('status') == 'false') {
        displayNameUser.innerHTML = 'Login';
        displayUserIcon.style.display = 'none';
        console.log('checked account 0');
        console.log('')
        ''
    }
}

function logOutAccount() { //Logout Account
    localStorage.status = false;
    window.location.href = 'login.html';
    checkStatus();
}
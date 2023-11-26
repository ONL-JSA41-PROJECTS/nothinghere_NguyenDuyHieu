function CheckBrowser() {
    if ('localStorage' in window && window['localStorage'] !== null) {
        return true;
    } else {
        return false;
    }
}
createQuanity();

function createQuanity() {}
if (localStorage.quantity) {
    console.log('ok');
} else {
    localStorage.quantity = 0;
}

function saveAccount() {
    localStorage.quantity = localStorage.quantity + 1;
    var fullName = document.getElementById('fullName').value;
    var userName = document.getElementById('userName').value;
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    localStorage.setItem('fullName ', fullName);
    localStorage.setItem('userName', userName);
    localStorage.setItem('email', email);
    localStorage.setItem('pass', pass);
    localStorage.setItem('status', true);
    // localStorage.
}

function loginAccount() {
    var userName = document.getElementById('fullName').value;
    var pass = document.getElementById('pass').value;
    if (userName == localStorage.getItem('userName') && pass == localStorage.getItem('pass')) {
        alert('Login Sucess!')
    } else {
        alert('UserName and Password error or not match!')
    }
}

function checkStatus() {
    const displayNameUser = document.getElementById('account');
    if (localStorage.userName) {
        displayNameUser.innerHTML = localStorage.userName;
        displayNameUser.setAttribute('href', 'login.before.html')
    }
}
// function SaveItem() {
//     var user_name = document.forms.ShoppingList.name.value;
//     var user_pass = document.forms.ShoppingList.data.value;
//     localStorage.setItem(user_name, user_pass);
//     doShowAll();
// }   doShowAll();
// }
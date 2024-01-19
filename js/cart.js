function startUp() {
    // console.log(data);
    checkLogin();
}

function itemModify() {};

function itemDelete() {};

document.getElementById('btnNotAdd').onclick = function() {
    window.location.href = 'shop.html';
}

document.getElementById('btnNotLogin').onclick = function() {
    window.location.href = 'login.html';
}

function onload() {
    if (localStorage.status == 'false') {
        document.getElementById('isNotLogin').style.display = 'block';
    } else if (localStorage.isAddItem == 'false') {
        document.getElementById('isNotAddItem').style.display = 'block';
    } else {
        document.getElementById('isAddItem');
    }
}
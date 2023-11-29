const displayUserFullName = document.getElementById("showUserFullName");
// const displayUserIcon = document.getElementById("userIcon");
const displayUserEmail = document.getElementById("showEmail");
accountPersonal()

function accountPersonal() { //Show infomation
    displayUserFullName.innerHTML = ' ' + localStorage.fullName;
    displayUserEmail.innerHTML = ' ' + localStorage.email;
}
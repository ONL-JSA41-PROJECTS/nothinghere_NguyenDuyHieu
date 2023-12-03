function logOutAccount() {
    localStorage.status = false;
    window.location.href = 'login.html';
    window.location.reload;
    checkStatus();
}
function startLoad() {
    if (localStorage.getItem('status') == 'undefined' ||
        localStorage.getItem('status') == 'undefined' ||
        localStorage.getItem('userName') == 'undefined' ||
        localStorage.getItem('email') == 'undefined' ||
        localStorage.getItem('pass') == 'undefined') {
            localStorage.status = false;
        }
    checkStatus();
    window.location.href = 'login.html';
}
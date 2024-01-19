function addToCart(inputItems) {
    if (localStorage.status == 'false') {
        alert('You are not logged in, please log in to continue shopping');
        window.location.href = 'login.html';
    } else {
        addItem(inputItems);
    }
}

function addItem(inputItems) {
    if (localStorage.getItem(`${inputItems}`) == undefined) {
        localStorage.setItem(`${inputItems}`, 1);
        console.log("added " + inputItems);
        localStorage.isAddItem = 'true'
        let data = JSON.parse(localStorage.data);
        if (localStorage.isAddItem = false) {
            data = [];
        };

        data.push(inputItems);
        localStorage.setItem('data', JSON.stringify(data));
    } else {
        let data = JSON.parse(localStorage.data);
        let index = localStorage.getItem(`${inputItems}`);
        index++;
        localStorage.setItem(`${inputItems}`, index);
    }
}

function addItems(item) {
    let menu = [];
    if (localStorage.isAddItem !== false) {
        menu = JSON.parse(localStorage.data);
        menu.push(item);
        localStorage.setItem('data', JSON.stringify(menu));
    } else {
        localStorage.isAddItem = true;
        menu.push(item);
        localStorage.setItem('data', JSON.stringify(menu));
    }
    localStorage.count++;
};
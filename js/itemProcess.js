function addToCart(inputItems) {
    if (localStorage.status == undefined){
        alert('You must login to continue shopping');
        window.location.href = 'login.html';
    } else
    if (localStorage.getItem(`${inputItems}`) == undefined) {
        localStorage.setItem(`${inputItems}`, 1);
        console.log("added " + inputItems);
    } else {
        let index = localStorage.getItem(`${inputItems}`);
        index++;
        localStorage.setItem(`${inputItems}`, index);
    }
    addItems(inputItems);
    console.log(localStorage);
    alert('added to Cart! Check your Cart');
}


function addItems(item) {
    let menu = [];
    if (localStorage.isAddItem == false){
        localStorage.isAddItem = true;
        menu.push(item);
        localStorage.setItem('data', JSON.stringify(menu));
    } else if (localStorage.isAddItem == true){
        menu = JSON.parse(localStorage.data);
        menu.push(item);
        localStorage.data = JSON.stringify(menu);
    }
    console.log(menu);
};
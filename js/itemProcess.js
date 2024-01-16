function addToCart(inputItems) {
    if (localStorage.getItem(`${inputItems}`) == undefined) {
        localStorage.setItem(`${inputItems}`, 1);
        console.log("added " + inputItems);
    } else {
        let index = localStorage.getItem(`${inputItems}`);
        index++;
        localStorage.setItem(`${inputItems}`, index);
    }
    addItems(inputItems);
    alert('added to Cart! Check your Cart')
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
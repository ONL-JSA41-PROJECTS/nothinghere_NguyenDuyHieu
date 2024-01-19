function addToCart(inputItems) {
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
    addItems(inputItems);
    console.log(localStorage);
    alert('added to Cart! Check your Cart');
}

function addItems(item) {
    let menu = [];
    if (localStorage.isAddItem == false) {
        localStorage.isAddItem = true;
        menu.push(item);
        localStorage.setItem('data', JSON.stringify(menu));
    } else if (localStorage.isAddItem == true) {
        menu = JSON.parse(localStorage.data);
        menu.push(item);
        localStorage.data = JSON.stringify(menu);
    }
    console.log(menu);
};
function addToCart(inputItems) {
    if (localStorage.getItem(`${inputItems}`) == undefined) {
        localStorage.setItem(`${inputItems}`, 1);
        console.log("added " + inputItems);
    } else {
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
//test

// let data = ['win_1', 'win_2', 'win_3'];

// localStorage.setItem('data', data);
// let data_test = JSON.stringify(data);
// // data_test = localStorage.getItem('data');
// console.log(data_test);

// localStorage.setItem('data', data_test);

// data_string = localStorage.data;

// data_json = JSON.parse(data_string);
// console.log(data_string);
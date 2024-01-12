let data_n = undefined;
async function requestReponse(keyWord) {
    const response = await fetch(`./data/${keyWord}.json`); //note: Use go live to fetch data
    const data = await response.json();
    console.log(data);
    for (let items of data.data) {
        let item = document.createElement("div");
        item.classList.add("items");

        let imgContainer = document.createElement("div");
        imgContainer.classList.add("imgContaner");

        let img = document.createElement("img");
        img.src = items.image;
        img.alt = "Image not Found";
        img.classList.add("imgItem");
        imgContainer.appendChild(img);

        let itemContainer = document.createElement("div");
        itemContainer.classList.add("itemContainer");

        itemContainer.appendChild(imgContainer);

        let name = document.createElement("strong");
        name.classList.add("itemName");
        name.innerHTML = items.name.toUpperCase();
        itemContainer.appendChild(name);

        let price = document.createElement("h5");
        price.classList.add("itemPrice");
        price.innerHTML = "Price: " + items.price + "$\n";
        itemContainer.appendChild(price);

        let status = document.createElement("h4");
        status.classList.add("itemStatus");
        status.classList.add(items.status);
        status.innerHTML = "Status:";

        let statusShow = document.createElement("span");
        statusShow.classList.add(items.price);
        if (items.status == "soldOut") {
            statusShow.innerHTML = "Sold Out"
        } else {
            statusShow.innerHTML = "Available"
        }
        status.appendChild(statusShow);

        itemContainer.appendChild(status);

        let btnAct = document.createElement("input");
        btnAct.value = "Add to cart";
        btnAct.type = "button";
        btnAct.setAttribute("onclick", `addToCart("${keyWord}_${items.index}")`);
        btnAct.classList.add("itemBtn");
        itemContainer.appendChild(btnAct);

        document.getElementsByClassName(`productChild`)[0].appendChild(itemContainer);
        console.log(items.name + " loaded");
    }
}

function showCategory(keyWord) {
    const delChildD = document.getElementsByClassName('showContent')[0];
    // const delChildC = document.getElementsByClassName('productChild')[0];
    delChildD.removeChild(delChildD.firstElementChild)
    let createDiv = document.createElement("div");
    // let createDivChild = document.createElement("div");
    localStorage.setItem("lastItem", keyWord);
    createDiv.classList.add(`productChild`);
    document.getElementsByClassName("showContent")[0].appendChild(createDiv);
    requestReponse(keyWord);
}

showCategory("winKey");

if (localStorage.data == null | localStorage.data == undefined) {
    data = ['none'];
    data_string = JSON.stringify(data);
    localStorage.setItem('isAddItem', false);
    localStorage.setItem('data', data_string);
    localStorage.setItem('countItem', 0);
}
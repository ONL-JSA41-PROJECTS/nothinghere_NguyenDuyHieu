let data_n = undefined;
async function requestReponse() {
    const response = await fetch("./data.json");
    const data = await response.json();
    console.log(data);
    // localStorage.setItem("data", data);
    data_n = data;
    for (let items of data.winKey) {
        console.log(items);
        let item = document.createElement("div");
        item.classList.add("item");

        let imgItems = document.createElement("div");
        imgItems.classList.add("image-items");

        let image = document.createElement("img");
        image.setAttribute("src", items.image);
        imgItems.appendChild(image);
        item.appendChild(imgItems);

        let contentItem = document.createElement("div");
        contentItem.classList.add("contentItem");

        let name = document.createElement("h5");
        name.classList.add("product-name");
        name.innerText = items.name.toUpperCase();
        contentItem.appendChild(name);

        let price = document.createElement("h6");
        price.innerHTML = "<b>Price:</b> " + items.price;
        contentItem.appendChild(price);

        let btn = document.createElement("button");
        btn.setAttribute("onclick", "addToCart()");
        btn.innerHTML = "Buy and to cart"
        contentItem.appendChild(btn);

        item.appendChild(contentItem);
        document.getElementsByClassName("showContent")[0].appendChild(item);
        console.log(items);
    }
}

function showCategory(keyWord) {
    requestReponse();
}

requestReponse();
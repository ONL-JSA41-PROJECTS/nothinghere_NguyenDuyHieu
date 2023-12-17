let data_n = undefined;
(async function() {
    const response = await fetch("./data.json");
    const data = await response.json();
    console.log(data);
    // localStorage.setItem("data", data);
    data_n = data;
})();
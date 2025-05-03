
const marketproducts = {product:["Rocket Tier 1", "Kit Coins", "Kit Turbo"], 
    prices:[150, 25, 75], 
    description:["New tyres to have more grip", "Kit Coins 5L", "Kit Turbo Padaria"], 
    clickpassive:[1, 2, 5, 10]}; // Presta atenção que o dinheiro passivo sempre tem que ter 1 a mais que os itens

let count = 0;
let price = 0; 
let marketpointer = 0;

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && event.target.tagName !== "TEXTAREA") {
        event.preventDefault();
    }
});


//SIDEBAR

document.getElementById("toggleBtn").addEventListener("click", function() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.style.left === "-250px") {
        sidebar.style.left = "0";
    } else {
        sidebar.style.left = "-250px";
    }
});

//STARTUI

function start(){
    document.getElementById("product").textContent = marketproducts.product[marketpointer];
    document.getElementById("price").textContent = marketproducts.prices[marketpointer];
    document.getElementById("description").textContent = marketproducts.description[marketpointer];
}

//SLEEP FUNCTION

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//PASSIVE CLICK

async function passiveclick (){
    while(marketpointer>-1){
        count+=marketproducts.clickpassive[marketpointer];
        await sleep(1000);
        document.getElementById("Coins").textContent ="Coins: " + count;
        
    }

}

//CLICKER BUTTON

document.getElementById("clicker").addEventListener("click", function() {
    count++;
    document.getElementById("Coins").textContent ="Coins: " + count;
});

//MARKET BUTTON

document.getElementById("market").addEventListener("click", async function buy () {
    price = marketproducts.prices[marketpointer];
    if (marketpointer == marketproducts.product.length){
        marketpointer = marketpointer;
    } else if (price > count) {
        document.getElementById("errormessage").textContent = "You can't buy it.";
        await sleep(2000);
        document.getElementById("errormessage").textContent = "";
    } else {
        count -= price;
        document.getElementById("Coins").textContent = "Coins: " + count;
        marketpointer++;
    }
    document.getElementById("product").textContent = marketproducts.product[marketpointer];
    document.getElementById("price").textContent = marketproducts.prices[marketpointer];
    document.getElementById("description").textContent = marketproducts.description[marketpointer];
});

start();
passiveclick();
let count = 0;
let priceText = document.getElementById("price").textContent;
let price = 0; 
let pointer = 0;

const marketproducts = {product:["New tyres", "Kit Nitro", "Kit Turbo"], prices:[15, 25, 75],
    description:["New tyres to have more grip", "Kit Nitro 5L", "Kit Turbo Padaria"], clickpassive:[0, 2, 5, 5]};

function start(){
    document.getElementById("product").textContent = marketproducts.product[pointer];
    document.getElementById("price").textContent = marketproducts.prices[pointer];
    document.getElementById("description").textContent = marketproducts.description[pointer];
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function passiveclick (){
    while(pointer>-1){
        count+=marketproducts.clickpassive[pointer];
        await sleep(1000);
        document.getElementById("nitro").textContent ="Nitro: " + count;
    }

}




document.getElementById("clicker").addEventListener("click", function() {
    count++;
    document.getElementById("nitro").textContent ="Nitro: " + count;
});


document.getElementById("market").addEventListener("click", async function buy () {
    price = marketproducts.prices[pointer];
    if (price > count) {
        document.getElementById("errormessage").textContent = "You can't buy it.";
        await sleep(2000);
        document.getElementById("errormessage").textContent = "";
    } else {
        count -= price;
        document.getElementById("nitro").textContent = "Nitro: " + count;
        pointer++;
    }
    document.getElementById("product").textContent = marketproducts.product[pointer];
    document.getElementById("price").textContent = marketproducts.prices[pointer];
    document.getElementById("description").textContent = marketproducts.description[pointer];
});

start();
passiveclick();
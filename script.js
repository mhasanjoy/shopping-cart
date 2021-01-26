function total(){
    const totalAmount = parseInt(document.getElementById("iphone-price").innerText) + parseInt(document.getElementById("iphone-case-price").innerText);
    document.getElementById("subtotal").innerText = totalAmount;
    document.getElementById("total").innerText = totalAmount;
}

function price(inputPriceId, inputNumber){
    let inputPrice;
    if(inputNumber < 0){
        inputNumber = 0;
    }
    if(inputPriceId == "iphone-price"){
        inputPrice = inputNumber * 1219;
    }
    else{
        inputPrice = inputNumber * 59;
    }
    document.getElementById(inputPriceId).innerText = inputPrice;
    total();
}

function plus(inputNumberId, inputPriceId){
    let inputNumber = parseInt(document.getElementById(inputNumberId).value);
    inputNumber++;
    document.getElementById(inputNumberId).value = inputNumber;

    price(inputPriceId, inputNumber);
}

function minus(inputNumberId, inputPriceId){
    let inputNumber = parseInt(document.getElementById(inputNumberId).value);
    inputNumber--;
    document.getElementById(inputNumberId).value = inputNumber;
    
    price(inputPriceId, inputNumber);
}

function updateTotal(itemId, itemPriceId){
    document.getElementById(itemId).style.display = "none";
    document.getElementById(itemPriceId).innerText = "0";
    total();
}


document.getElementById("iphone-remove").addEventListener("click", function(){
    updateTotal("iphone", "iphone-price");
});

document.getElementById("iphone-case-remove").addEventListener("click", function(){
    updateTotal("iphone-case", "iphone-case-price");
});


document.getElementById("iphone-minus-btn").addEventListener("click", function(){
    minus("iphone-number", "iphone-price");
});

document.getElementById("iphone-plus-btn").addEventListener("click", function(){
    plus("iphone-number", "iphone-price");
});


document.getElementById("iphone-case-minus-btn").addEventListener("click", function(){
    minus("iphone-case-number", "iphone-case-price");
});

document.getElementById("iphone-case-plus-btn").addEventListener("click", function(){
    plus("iphone-case-number", "iphone-case-price");
});
function updatePrice(product, priceMultiplier, isClicked){
    
    if (isClicked == true){
        rootPrice = 0;
    }
    else {
        rootPrice = 20;
    }

    // update total

    const productTotal = document.getElementById(product + '-cost');
    productTotal.innerText = rootPrice * priceMultiplier;

    // calculate total

    calculateTotal()
    
}

function calculateTotal(){
    const baseCost = parseInt(document.getElementById('base-cost').innerText);
    const memoryCost = parseInt(document.getElementById('memory-cost').innerText);
    const storageCost = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryCost = parseInt(document.getElementById('delivery-cost').innerText);

    totalPrice = baseCost + memoryCost + storageCost + deliveryCost;

    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('total-price-bonus').innerText = totalPrice;
}

// memory cost handle

document.getElementById('8gb-memory').addEventListener('click',function(){
    updatePrice('memory', 0, true);
})

document.getElementById('16gb-memory').addEventListener('click',function(){
    updatePrice('memory', 9, false);
})

// storage cost handle

document.getElementById('256gb-ssd').addEventListener('click',function(){
    updatePrice('storage', 0, true);
})

document.getElementById('512gb-ssd').addEventListener('click',function(){
    updatePrice('storage', 5, false);
})

document.getElementById('1tb-ssd').addEventListener('click',function(){
    updatePrice('storage', 9, false);
})

// delivery cost handle

document.getElementById('free-delivery').addEventListener('click',function(){
    updatePrice('delivery', 0, true);
})

document.getElementById('cash-on-delivery').addEventListener('click',function(){
    updatePrice('delivery', 1, false);
})

// promo code handle

document.getElementById('promo-code-apply').addEventListener('click',function(){
    const promoCode = document.getElementById('promo-code');
    if (promoCode.value == 'stevekaku'){
        document.getElementById('total-price-bonus').innerText = parseFloat(document.getElementById('total-price').innerText) * 0.8;
    }
    promoCode.value = '';
})
const discountButton = document.getElementById('btn-discount').addEventListener('click', function () {
    const price = document.getElementById('price');
    const priceString = price.innerText;
    const mainPrice = parseFloat(priceString);
    // discount
    const discountCode = document.getElementById('discount-code');
    const validCode = discountCode.value;
    console.log(validCode);

    if (validCode !== 'DOM') {
        alert('Code not valid')
        discountCode.value = '';
        return;
    }
    else {
        const discount = (mainPrice / 100) * 30;
        const afterDiscount = mainPrice - discount;
        price.innerText = afterDiscount;
        discountCode.value = '';
    }
})
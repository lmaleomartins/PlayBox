    // Função para atualizar a quantidade do produto e o preço total
    function updateProductQuantity(isIncreasing) {
        const productQuantityElement = document.getElementById('product-quantity');
        const productTotalElement = document.getElementById('product-total');
        const productPrice = parseFloat(document.getElementById('product-price').innerText.replace('R$ ', ''));
        let productQuantity = parseInt(productQuantityElement.innerText);
        if (isIncreasing) {
            productQuantity++;
        } else if (productQuantity > 1) {
            productQuantity--;
        }
        productQuantityElement.innerText = productQuantity;
        productTotalElement.innerText = 'R$ ' + (productPrice * productQuantity).toFixed(2);

        // Atualiza o subtotal e o preço total
        calculateTotal();
    }

    // Função para calcular o subtotal e o preço total
    function calculateTotal() {
        const productPrice = parseFloat(document.getElementById('product-price').innerText.replace('R$ ', ''));
        const productQuantity = parseInt(document.getElementById('product-quantity').innerText);
        const subTotal = productPrice * productQuantity;
        const totalPrice = subTotal;

        // Atualiza o subtotal e o preço total
        document.getElementById('sub-total').innerText = 'R$ ' + subTotal.toFixed(2);
        document.getElementById('total-price').innerText = 'R$ ' + totalPrice.toFixed(2);
    }

    // Adiciona os listeners de evento para os botões de aumento e redução da quantidade do produto
    document.getElementById('increase-quantity').addEventListener('click', function () {
        updateProductQuantity(true);
    });

    document.getElementById('decrease-quantity').addEventListener('click', function () {
        updateProductQuantity(false);
    });

    // Listener de evento para o botão "Finalizar Compra"
    document.getElementById('checkout-button').addEventListener('click', function () {
        // Adicione aqui a lógica para finalizar a compra
        alert('Compra finalizada!');
    });
document.addEventListener('DOMContentLoaded', function() {
    const minusButtons = document.querySelectorAll('.btn-minus');
    const plusButtons = document.querySelectorAll('.btn-plus');
    const removeButtons = document.querySelectorAll('.remove');
  
    minusButtons.forEach(button => {
      button.addEventListener('click', function() {
        const qtyElement = button.nextElementSibling;
        let qty = parseInt(qtyElement.textContent);
        if (qty > 1) {
          qty--;
          qtyElement.textContent = qty;
          updateTotal(button);
        }
      });
    });
  
    plusButtons.forEach(button => {
      button.addEventListener('click', function() {
        const qtyElement = button.previousElementSibling;
        let qty = parseInt(qtyElement.textContent);
        qty++;
        qtyElement.textContent = qty;
        updateTotal(button);
      });
    });
  
    removeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const row = button.closest('tr');
        row.remove();
        updateTotal(button);
      });
    });
  
    function updateTotal(button) {
      const row = button.closest('tr');
      const price = parseFloat(row.querySelector('td:nth-child(2)').textContent.replace('R$', '').replace(',', '.'));
      const qty = parseInt(row.querySelector('.qty span').textContent);
      const total = price * qty;
      row.querySelector('td:nth-child(4)').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
  
      let subtotal = 0;
      document.querySelectorAll('tbody tr').forEach(row => {
        const rowTotal = parseFloat(row.querySelector('td:nth-child(4)').textContent.replace('R$', '').replace(',', '.'));
        subtotal += rowTotal;
      });
      document.querySelector('aside .info div:nth-child(1) span:nth-child(2)').textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
      document.querySelector('aside footer span:nth-child(2)').textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    }
  });
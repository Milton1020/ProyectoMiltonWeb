const cardNumberInput = document.getElementById('cardNumber');
const expiryDateInput = document.getElementById('expiryDate');

cardNumberInput.addEventListener('input', function () {
  let value = this.value.replace(/\D+/g, ''); 
  value = value.replace(/(.{4})/g, '$1 '); 
  this.value = value;
});

expiryDateInput.addEventListener('input', function () {
  let value = this.value.replace(/\D+/g, ''); 
  let month = value.substring(0, 2);
  let year = value.substring(2);
  if (month.length === 2 && year.length === 2) {
    this.value = `${month}/${year}`;
  } else {
    this.value = value;
  }
});
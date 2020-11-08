// Choosing elements

var amount_in_UZS = document.querySelector('.amount_in_UZS');
var formBtn = document.querySelector('.form-btn');

// Currency calculator function

formBtn.addEventListener('click', function(event) {
  var amount = document.querySelector('.amount-input').value;
  var currency = parseFloat(document.querySelector('.currency-select').value, 10);

  event.preventDefault();
  var amount_in_UZS_result = Math.round(amount * currency);
  amount_in_UZS.value = amount_in_UZS_result;
});



function sum() {
  var number1 = document.getElementById("number1").value;
  var number2 = document.getElementById("number2").value;

  var sum = parseInt(number1) + parseInt(number2);
  if (sum > 100) {
    alert("Toplam 100'den büyük olamaz");
    return;
  }
  var result = document.getElementById("result");
  result.value = sum;
}

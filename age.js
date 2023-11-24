function checkAge() {
  var ageInput = document.getElementById("age");
  var age = parseInt(ageInput.value);

  var resultElement = document.getElementById("result");
  if (!isNaN(age) && age >= 18) {
    resultElement.textContent = "Bạn đã đủ 18 tuổi!";
  } else {
    resultElement.textContent = "Bạn chưa đủ 18 tuổi!";
  }
}

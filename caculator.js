var a = parseFloat(prompt("Nhập số a:"));
var b = parseFloat(prompt("Nhập số b:"));

// Nhập phép tính từ người dùng
var operation = prompt("Nhập phép tính (+, -, *, /):");

// Biến để lưu kết quả
var result;

// Thực hiện phép tính sử dụng switch case
switch (operation) {
  case "+":
    result = a + b;
    break;
  case "-":
    result = a - b;
    break;
  case "*":
    result = a * b;
    break;
  case "/":
    if (b !== 0) {
      result = a / b;
    } else {
      alert("Lỗi: Không thể chia cho 0");
    }
    break;
  default:
    alert("Phép tính không hợp lệ");
}

// Hiển thị kết quả bằng cửa sổ alert
if (result !== undefined) {
  alert("Kết quả: " + result);
}

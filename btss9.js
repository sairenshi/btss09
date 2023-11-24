// if (result === null) {
//   console.error("error when programming");
// } else {
//   console.log("kết quả: ", result);
// }
// if ((result = 28)) {
//   console.warn("duma tk ttkt");
// }
// console.clear();
// console.log("new message after clearing");

// console.time("my timer");

// let sum = 0;
// for (let i = 0; i < 1000000; i++) {
//   sum += i;
// }

// console.timeEnd("myTimer");
// console.log("Sum:", sum);

// const students =[
//   {id: 1,name:A , age: 18, grade: "T"}
//   {id: 2,name:B , age: 19, grade: "L"}
//   {id: 3,name:C , age: 20, grade: "H"}
// ];

// console.table(students);

// function exampleFunction() {
//   console.count("exampleFunction");
//   console.log("This is an example function.");
// }

// function exampleFunction() {
//   console.count("exampleFunction");
//   console.log("This is an example function.");
// }

// exampleFunction();
// exampleFunction();
// exampleFunction();
// exampleFunction();
// console.count("differentLabel");

// console.group("Main Group");

// console.log("Message 1 in the main group");

// console.group("Nested Group");

// console.log("Message 2 in the nested group");
// console.log("Message 3 in the nested group");

// console.groupEnd();

// console.log("Message 4 in the main group");

// console.groupEnd();

var ngaySinh = prompt("Nhập ngày sinh (vd: 25):");
var thangSinh = prompt("Nhập tháng sinh (vd: 5):");

ngaySinh = parseInt(ngaySinh);
thangSinh = parseInt(thangSinh);

var chomSao = "";
switch (thangSinh) {
  case 1:
    chomSao = ngaySinh >= 20 ? "Aquarius" : "Capricorn";
    break;
  case 2:
    chomSao = ngaySinh >= 19 ? "Pisces" : "Aquarius";
    break;
  case 3:
    chomSao = ngaySinh >= 21 ? "Aries" : "Pisces";
    break;
  case 4:
    chomSao = ngaySinh >= 20 ? "Taurus" : "Aries";
    break;
  case 5:
    chomSao = ngaySinh >= 21 ? "Gemini" : "Taurus";
    break;
  case 6:
    chomSao = ngaySinh >= 21 ? "Cancer" : "Gemini";
    break;
  case 7:
    chomSao = ngaySinh >= 23 ? "Leo" : "Cancer";
    break;
  case 8:
    chomSao = ngaySinh >= 23 ? "Virgo" : "Leo";
    break;
  case 9:
    chomSao = ngaySinh >= 23 ? "Libra" : "Virgo";
    break;
  case 10:
    chomSao = ngaySinh >= 23 ? "Scorpio" : "Libra";
    break;
  case 11:
    chomSao = ngaySinh >= 22 ? "Sagittarius" : "Scorpio";
    break;
  case 12:
    chomSao = ngaySinh >= 22 ? "Capricorn" : "Sagittarius";
    break;
  case 13:
    chomSao = ngaySinh = 55 ? "maou" : "dangsangthe";
    break;
  default:
    chomSao = "Không hợp lệ";
}

alert("Chòm sao của bạn là: " + chomSao);

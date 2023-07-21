// var operations = ["add", "sub", "mul", "div"];

// var num1 = 5;
// var num2 = 10;

// for (var i = 0; i < document.querySelectorAll(".add-img").length; i++) {
//   document
//     .querySelectorAll(".add-img")
//     [i].addEventListener("click", function (num1, num2, operator) {
//       var operator1 = operations[i];
//       return operator(num1, num2);
//     });
// }

// function add(num1, num2) {
//   alert(num1 + num2);
// }

// function sub(num1, num2) {
//   alert(num1 - num2);
// }

// function mul(num1, num2) {
//   alert(num1 * num2);
// }
// function div(num1, num2) {
//   alert(num1 / num2);
// }

var operations = ["add", "sub", "mul", "div"];

var num1 = 5;
var num2 = 10;

for (var i = 0; i < document.querySelectorAll(".add-img").length; i++) {
  (function (index) {
    document
      .querySelectorAll(".add-img")
      [index].addEventListener("click", function () {
        var operator = operations[index];
        return window[operator](num1, num2);
      });
  })(i);
}

function add(num1, num2) {
  alert(num1 + num2);
}

function sub(num1, num2) {
  alert(num1 - num2);
}

function mul(num1, num2) {
  alert(num1 * num2);
}

function div(num1, num2) {
  alert(num1 / num2);
}

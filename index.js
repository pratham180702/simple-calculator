var num1, num2;

document.querySelector(".number-entry").addEventListener("click", function () {
  num1 = parseInt(prompt("Enter Number 1 : "));
  num2 = parseInt(prompt("Enter Number 2 : "));

  document.querySelector(".numbers-selected").innerHTML =
    "Current Numbers: <br /> number 1 =" + num1 + "<br /> number 2 = " + num2;
});

for (var i = 0; i < document.querySelectorAll(".add-img").length; i++) {
  document
    .querySelectorAll(".add-img")
    [i].addEventListener("click", function () {
      var buttonInfo = this.innerHTML;

      var result = resultCalculation(buttonInfo);

      buttonAnimation(buttonInfo);

      document.querySelector(".result").innerHTML =
        "Result after " + buttonInfo + " = " + result;
    });
}

function resultCalculation(buttonInfo) {
  switch (buttonInfo) {
    case "add":
      var result = add(num1, num2);
      break;
    case "sub":
      var result = sub(num1, num2);
      break;
    case "mul":
      var result = mul(num1, num2);
      break;
    case "div":
      var result = div(num1, num2);
      break;

    default:
      alert("something went wrong");
      break;
  }
  return result;
}

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

function buttonAnimation(buttonInfo) {
  document.querySelector("." + buttonInfo).classList.add("pressed");

  setTimeout(function () {
    document.querySelector("." + buttonInfo).classList.remove("pressed");
  }, 100);
}

function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var bmi = (weight / (height * height)) * 703;
  document.getElementById("result").innerHTML = "Your BMI is: " + bmi;
}

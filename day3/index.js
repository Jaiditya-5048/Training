function bmiCalculator(weight, height) {
    var bmi = Math.round(weight / Math.pow(height, 2) * 10) / 10;
 
    if (bmi < 18.5) {
        return "Your BMI is " + bmi + ", so you are underweight.";
    }
    if (bmi >= 18.5 && bmi <= 24.9) { 
        return "Your BMI is " + bmi + ", so you have a normal weight.";
    }
    else {
        return "Your BMI is " + bmi + ", so you are overweight.";
    }
 }
 
var weight = prompt("Enter your weight in kg:");
var height = prompt("Enter your height in m:");

console.log(bmiCalculator(weight, height));
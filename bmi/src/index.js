// initialize variables for all the HTML form elements
const 
ageEl = document.getElementById("ageEl"),
weightEl = document.getElementById("weightEl"),
weightUnitEl = document.getElementById("weightUnitEl"),
heightEl = document.getElementById("heightEl"),
heightUnitEl = document.getElementById("heightUnitEl"),
btnCalc = document.getElementById("btnCalc"),
bmiCatEl = document.getElementById("bmiCatEl");

// initialize weight and height variables for use in calculation function
let 
weight = 0,
height = 0;

btnCalc.addEventListener("click", bmiCalc);

// BMI calculations do not work for people under 18 or over 65
// verify eligibility
function ageCheck() {
  if (ageEl.value < 18) {
    alert("Sorry, you are below the recommended age for accurate BMI calculations.");
    return;
  } else if (ageEl.value > 65) {
    alert("Sorry, you are above the recommended age for accurate BMI calculations.");
    return;
  }
}

// BMI calculation is BMI = kg/m2, this will convert inches and pounds to metric
function UnitCheck() {
  if (weightUnitEl.value == "lbs") {
    weight = Number(weightEl.value) * 0.45359237;
  } else {
    weight = Number(weightEl.value);
  }

  if (heightUnitEl.value == "in") {
    height = Number(heightEl.value) * 2.54;
  } else {
    height = Number(heightEl.value);
  }
}

// this function determines what your weight category is and displays it
function weightCat(BMI) {

  if (BMI < 18.5) {
    bmiCatEl.value = "Underweight";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    bmiCatEl.value = "Normal";
  } else if (BMI >= 25 && BMI <= 29.9) {
    bmiCatEl.value = "Overweight";
  } else if (BMI >= 30 && BMI <= 34.9) {
    bmiCatEl.value = "Obese Class I";
  } else if (BMI >= 35 && BMI <= 39.9) {
    bmiCatEl.value = "Obese Class II";
  } else if (BMI > 40) {
    bmiCatEl.value = "Obese Class III";
  }
}

// verify age and convert units if necessary, then calculate BMI using the formula
function bmiCalc() {
  ageCheck();
  UnitCheck();
  const BMI = weight / ((height / 100) ** 2);
  bmiEl.value = Math.round(BMI * 10) / 10;
  weightCat(Number(BMI));
}
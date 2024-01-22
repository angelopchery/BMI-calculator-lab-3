function calculateBMI() {
    var weight = parseFloat(document.getElementById('weight').value);
    var height = parseFloat(document.getElementById('height').value);
  
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      document.getElementById('result').innerHTML = 'Please enter valid weight and height.';
      return;
    }
  
    var bmi = weight / ((height / 100) ** 2);
    var bmiCategory = getBMICategory(bmi);
  
    document.getElementById('result').innerHTML = 'Your BMI is ' + bmi.toFixed(2) + '. ' + bmiCategory;
  }
  
  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return 'You are underweight.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'You have a normal weight.';
    } else if (bmi >= 25 && bmi < 29.9) {
      return 'You are overweight.';
    } else {
      return 'You are obese.';
    }
  }
  
const weight =document.getElementById("weight");
const height =document.getElementById("height");
const calculateBtn =document.getElementById("calculate-btn");
const result =document.getElementById("result");

calculateBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let BMI = (weight.value / ((height.value / 100) ** 2)).toFixed(2);
    result.textContent = `Your BMI is ${BMI}`;
});
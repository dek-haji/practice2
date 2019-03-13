// Write a JavaScript program to calculate multiplication and division of two numbers (input from user).
function multiply(){
    num1 = document.querySelector("#input1").value;
    num2 = document.getElementById("input2").value;
    document.getElementById("result").innerHTML = num1 * num2;
}
function divide(){
    num1 = document.querySelector("#input1").value;
    num2 = document.getElementById("input2").value;
    document.getElementById("result").innerHTML = num1 / num2;
}
function addition(){
    num1 = document.querySelector("#input1").value;
    num2 = document.getElementById("input2").value;
    document.getElementById("result").innerHTML = num1 + num2;
}
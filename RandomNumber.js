console.log("its working")
//lets get a random number from 1-10.
//The Math.ceil() function is used to get the smallest integer greater than or equal to a given number.
//The Math.random() function is used to get a floating-point, pseudo-random number in the range [0, 1) that is, from 0 (inclusive) up to but not including 1 (exclusive), which you can then scale to your desired range.
let num = Math.ceil(Math.random() * 10);
let userInput = prompt("lets check your luck, put any number");
if(num == userInput){
    alert("today is your lucky day")
}else{
    alert(`Nope but the number was ${num}`)
}

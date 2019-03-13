/*Write a JavaScript program to get the current date.
Expected Output : 
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/


let today = new Date();
let date = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear()
console.log(`the current date is ${month} ${date} ${year}`)
if (date < 10) {
    date = '0'+date
}
if(month < 10){
    month = "0" + month
}
currentDate = `${month} \ ${date} \ ${year}`;
console.log(currentDate)
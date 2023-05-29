//Array excercises
//22. Write a JavaScript program to compute the union of two arrays.
const fArr = [1, 2, 3]
const sArr = [100, 200, 300]

document.querySelector("#aAns1").innerHTML = fArr.concat(sArr)
//---------------------------------------------------------------------
//2. Write a JavaScript function to clone an array.
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, [4, 0]]

let clone1 = Array.from(arr1);
let clone2 = Array.from(arr2);

document.querySelector("#aAns2").innerHTML = clone1
document.querySelector("#aAns3").innerHTML = clone2

//---------------------------------------------------------------------
//7. Write a JavaScript program to sort the items of an array.
const arr7 = [-3 , 5 , 9 , 10 , -2, -8]

arr7.sort(function(a, b){return a - b});
document.querySelector("#aAns4").innerHTML = arr7;


//---------------------------------------------------------------------
//17. Write a JavaScript program to shuffle an array.

const arr17 = [-3 , 5 , 9 , 10 , -2, -8]

arr17.sort(function(){return 0.5 - Math.random()});
document.querySelector("#aAns5").innerHTML = arr17;



//---------------------------------------------------------------------
//5. Write a simple JavaScript program to join all elements 
//of the following array into a string.
const myArr = ["Red", "Green", "White", "Black"];

document.querySelector("#aAns6").innerHTML = myArr.toString();
document.querySelector("#aAns7").innerHTML = myArr.join("+");


//Math excercises
//1. Write a JavaScript function to convert a number from one base to another.
let num1 = 'E164'
let num2 = '1000'

let mAns1 = parseInt(num1,16)
let mAns2 = parseInt(num2,2)
document.querySelector("#mAns1").innerHTML = mAns1.toString(8)
document.querySelector("#mAns2").innerHTML = mAns2.toString(8)
//---------------------------------------------------------------------
//2.Write a JavaScript function to convert a binary number to a decimal number.
let num3 = '110011'
let num4 = '100'
let mAns3 = parseInt(num3,2)
let mAns4 = parseInt(num4,2)
document.querySelector("#mAns3").innerHTML = mAns3
document.querySelector("#mAns4").innerHTML = mAns4
//---------------------------------------------------------------------
//3.Write a JavaScript function to convert a decimal number to a binary,
// hexadecimal or octal number.
let num5 = 120


document.querySelector("#mAns5").innerHTML = num5.toString(2)
document.querySelector("#mAns6").innerHTML = num5.toString(16)
document.querySelector("#mAns7").innerHTML = num5.toString(8)
//---------------------------------------------------------------------
//4.Write a JavaScript function to generate a random integer.

document.querySelector("#mAns8").innerHTML = Math.floor(Math.random() * 20)
document.querySelector("#mAns9").innerHTML = Math.floor(Math.random() * 10) + 1
document.querySelector("#mAns10").innerHTML = Math.floor(Math.random() * 6)
document.querySelector("#mAns11").innerHTML = Math.floor(Math.random()) 

//---------------------------------------------------------------------
//5.Write a JavaScript function to format a number up to specified decimal places.
let num6 = 2.100212
let num7 = 2100
document.querySelector("#mAns12").innerHTML = num6.toFixed(2)
document.querySelector("#mAns13").innerHTML = num6.toFixed(3)
document.querySelector("#mAns14").innerHTML = num7.toFixed(2)


//String & text excercises
//1. Write a JavaScript function to check whether an 'input' is a string or not.
let a = 'w3resource'
let b = [1,2,4,0]

if (a.constructor === String) {
    document.querySelector("#ans1").innerHTML = "Is a string"
} else {
    document.querySelector("#ans1").innerHTML = "Isn't a string"
}
if (b.constructor === String) {
    document.querySelector("#ans2").innerHTML = "Is a string"
} else {
    document.querySelector("#ans2").innerHTML = "Isn't a string"
}
//---------------------------------------------------------------------
//2.Write a JavaScript function to check whether a string is blank or not.
let blank = ""
let notBlank = 'abc'

if (blank.length > 0) {
    document.querySelector("#ans3").innerHTML = "Not Blank"
} else {
    document.querySelector("#ans3").innerHTML = "Blank"
}
if (notBlank.length > 0) {
    document.querySelector("#ans4").innerHTML = "Not Blank"
} else {
    document.querySelector("#ans4").innerHTML = "Blank"
}
//---------------------------------------------------------------------
//3.Write a JavaScript function to split a string and convert it into an array of words.
let c = "Robin Singh"
document.querySelector("#ans5").innerHTML = c.split(" ")
//---------------------------------------------------------------------
//4. Write a JavaScript function to extract a specified number of characters from a string.
let d = "Robin Singh"

//---------------------------------------------------------------------
//5. Write a JavaScript function to convert a string into abbreviated form.
let e = "Robin Singh"
document.querySelector("#ans7").innerHTML = d.slice(0,7) + ".";

//DateTime excercises
//1. Write a JavaScript function to check whether an `input` is a date object or not.
let d1 = ("October 13, 2014 11:13:00")
let d2 = (new Date(86400000))
let d3 = (new Date(99,5,24,11,33,30,0))
let d4 = ([1, 2, 4, 0])

function isDate(x) {

    if (x instanceof Date) {
        return true
    } else {
        return false
    }
}
document.querySelector("#dAns1").innerHTML = isDate(d1)
document.querySelector("#dAns2").innerHTML = isDate(d2)
document.querySelector("#dAns3").innerHTML = isDate(d3)
document.querySelector("#dAns4").innerHTML = isDate(d4)
//---------------------------------------------------------------------
//2. Write a JavaScript function to get the current date.

let tday = function (sep) {
    now = new Date();
    let day = now.getDate()
    let mon = now.getMonth() + 1
    let yr = now.getFullYear()
    if (day < 10) {
        day = "0" + day
    } else {
        day = now.getDate()
    }
    if (mon < 10) {
        mon = "0" + mon
    } else {
        mon = now.getMonth() + 1
    }
    return (day+sep+mon+sep+yr)
}

document.querySelector("#dAns5").innerHTML = tday('/');
document.querySelector("#dAns6").innerHTML = tday('-');
//---------------------------------------------------------------------
//3. Write a JavaScript function to get the number of days in a month.
function daysInMonth(mm,yy) {
    return new Date(yy,mm,0).getDate()

}
document.querySelector("#dAns7").innerHTML = daysInMonth(1, 2012)
document.querySelector("#dAns8").innerHTML = daysInMonth(2, 2012)
document.querySelector("#dAns9").innerHTML = daysInMonth(9, 2012)
document.querySelector("#dAns10").innerHTML = daysInMonth(12, 2012)
//---------------------------------------------------------------------
//4. Write a JavaScript function to get the month name from a particular date.
function mnthName(inp) {
    mnthList = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug",
"Sep","Oct","Nov","Dec"]
return mnthList[inp.getMonth()];
}
document.querySelector("#dAns9").innerHTML = mnthName(new Date("10/11/2009"))
document.querySelector("#dAns10").innerHTML = mnthName(new Date("11/13/2014"))
//---------------------------------------------------------------------
//5. Write a JavaScript function to compare dates
//(i.e. greater than, less than or equal to).
function compDates(params) {
    
}

//Conditional statements & loops excercises

//1. Write a JavaScript program that displays the largest integer among two integers.

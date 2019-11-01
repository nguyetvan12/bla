'use strict';

/** Basic Types */

//Define a new variable `motto` for the value "The iSchool is my school"
let motto = "The iSchool is my school";


//Log out the motto
console.log(motto);

//Define a variable `mottoLength` that stores the length of the motto.
//Use the `.length` property
//Log out the length.
let mottoLength = motto.length;
console.log(mottoLength);

//Use the `indexOf()` String method to see if the word "cool" is in the string.
//See http://www.w3schools.com/jsref/jsref_obj_string.asp for String methods
//Log out a _boolean_ whether it is or not.

// how do i search the motto "The iSchool is my school" for "COOL"????
let mottoIndex = motto.indexOf("cool");
console.log("USING indexOF:" + mottoIndex);

if(mottoIndex[] === 'cool'){
    console.log(mottoIndex === 'cool');
    console.log(true);
} else{
    console.log(false);
}


//Use a String method to replace the word "iSchool" in the `motto` variable with
//the words "Information School". The new value should be re-assigned to the
//`motto` variable.
//Log out the updated motto.
// "The iSchool is my school" --> "The INFORMATION SCHOOL is my school"

let newMotto = motto.replace('iSchool','Information School');
console.log(newMotto);


//Calculate the ratio between the length of the updated motto and the length of 
//the old (which you had saved in a variable!). Log out this ratio as a 
//percentage with two decimal places of precision (e.g., `"123.45%"`).
//You can use the `.toFixed()` Number method to specify the precision. 
let mottoRatio1 = (motto.length / newMotto.length);
let mottoRatio2 = mottoRatio1.toFixed(2);
console.log('The ratio of the lengths of Motto and the New Motto is:');
console.log(mottoRatio2);


/** Arrays **/

//Create an array `numbers` that contains these 10 numbers:
//    1 4 1 5 9 2 6 5 3 5
//Log out the array.
let numbers = [1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("ARRAY BEFORE 4.2" + numbers );


//Use bracket notation to change the `4` in the array to a `4.2`.
//Log out the updated array.
numbers[1] = 4.2;
console.log("UPDATED ARRAY WITH 4.2" + numbers);


//Add the number 3 to the END of the array.
//Log out the updated array.
let newNumbers = numbers.concat(3);
console.log("add 3 to end of array by using CONCAT " + newNumbers);

//Find the median (middle) value of the numbers in the array.
//Hint: sort() the array, then access the middle index of the sorted values.
//You can use the `Math.floor()` function to round to a whole number.
//Log out the median value.

newNumbers.sort();
console.log("AFTER USING .sort() : " + newNumbers);

let median = newNumbers[Math.floor(newNumbers.length / 2)];
console.log("THE MEDIAN IS : " + median);

/** Objects **/

//Create a variable `rect` that represents a rectangle. This should be an Object
//with properties:
//  `x` (coordinate) of 30, `y` of 50, `width` of 100, `height` of 50
//Log out the rectangle object

// let canvas = document.getElementById("myCanvas");
let rect = {x:30, y:50, width:100, height:50};
console.log(rect);

//Log out the x- and y- coordinates of the rectangle (its location). Your output 
//should have the format `"X, Y"`.
console.log(" THE X,Y COORDINATE " + "X, " + rect.x + " Y " + rect.y);


//Set the rectangle's height to be the square root of its width. (Use the 
//`Math.sqrt()` function).
//Use *dot notation* to access the properties!
rect.height = Math.sqrt(rect.width);
console.log("updated height: " + rect.height);

//Log out the rectangle's area. Use *dot notation* to access the properties!
let rectArea = (rect.width * rect.height);
console.log("RECTANGLE AREA: " + rectArea);

//Create a variable `circle` that represents a circle. This should be an object
//with properties:
//  `cx` (center-x-coordinate) of 34, 
//  `cy` of 43,
//  `radius` equal to the LAST value in the (sorted) `numbers` array.
//Log out the circle

let circle = {cx: 34, cy: 43, radius: newNumbers[10]};
console.log(circle);

//Create an array `shapes` that represents a list of shapes. The array should
//contain the rectangle and the circle objects defined above.
//Log out the variable. Be sure to inspect it in the developer console!

let shapes = [rect, circle];
console.log(shapes);

//Add a new ANONYMOUS object (e.g., one passed in directly without its own
//variable name) representing a right triangle to the `shapes` array.
//The triangle should have a `base` of 33 and a `height` of 44.
//Log out the updated shapes array.

shapes.push({base: 33, height: 44});
console.log(shapes);

//Log out the triangle's `hypotenuse` property (don't calculate it, just log out
//the current property value!). What do you get?


console.log("TRIANGLE HYPOTENUSE " + Math.hypot(shapes[2].base, shapes[2].height));

//Assign the triangle inside the `shapes` array a 'hypotenuse' property of `55`.
//Log out the `shapes` array again.
//Visually check: what happens if you inspect the previously logged array in the 
//Chrome developer console?

let hypo = 55;
shapes[2] = {base: 33, height: 44, hypotenuse: hypo};
console.log(shapes);
// ask professor is this was the correct way to solve
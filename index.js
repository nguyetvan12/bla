'use strict'

/* Define a function `addFour()` that takes a single argument 
   and returns a value 4 greater than the input.*/
   function addFour(p1){
    p1 + 4;
    return p1;
   }

   
/* Create and log a variable `twelve` that is the result of passing 8 to your
   addFour() function. */
   let twelve = 12;
   addFour(twelve);
   console.log("Create and log a variable `twelve` that is the result of passing 8 to your addFour function: " + twelve);

   
/* Create and log a variable `twelveString` that is the result of passing "8" 
   (a string) to your addFour() function. Consider what this tells you about how
  the function should be explained (e.g., in a comment). */
  let twelveString = "8";
  addFour(twelveString);
  console.log("Create and log a variable `twelveString` that is the result of passing '8' (a string) to your addFour() function: " + twelveString);
  console.log("the type of twelveString after addFour is: " + typeof twelveString);
  // addFour(twelveString) returns a String "8"

/* Define a function `compoundInterest()` that takes three parameters: 
     1. an initial bank balance (principle, in dollars)
     2. an annual interest rate (as a decimal, e.g., 0.01) 
     3. a number of years
   The function should calculate the continuous compound interest
     (https://en.wikipedia.org/wiki/Compound_interest#Continuous_compounding) 
   and *return* the resulting total balance after that many number of years

   You can call the method and log the result to check your work. Compare to
     http://www.mathwarehouse.com/calculators/continuous-compound-interest-calculator.php
*/

  // p(t) = p * e ^(r*t)
  // p = initial quantity,  t = time ,  k = annual interest rate , e = natural logarithmic constant (approx 2.71828)
  // ALT EQUATION: let value = balance * 2.71828 ^ (interestRate * years);

function compoundInterest(balance, interestRate, years){
  let finalValue = balance * Math.pow(2.71828, interestRate * years);
  return finalValue;
}


let testCompound = compoundInterest(1, 0.01, 1);
console.log("TEST COMPOUND INTEREST: " + testCompound);



/* Define a function `fizzBuzz()` that takes in a single number as an argument.
   The function should *return* an _array_ of numbers from 1 to the argument. 
   But for multiples of three, the array should contain "Fizz" instead of the 
   number. For multiples of five, the array should contain "Buzz" instead of the 
   number. For numbers which are multiples of both three and five, the array 
   should contain "FizzBuzz" instead of the number.
   The returned array should be empty for arguments less than 1. */

   let array = [];
   var i;
   var n;
   var index = array.indexOf(n); // STUCK: WONT REPLACE VALUE

   function fillArray(n){
   for(i=0; i < n; i++){
    array[i] = i+1;
   }
   return array;
   }

   function fizzBuzz(n){
     fillArray(n);

    if (n < 1){
      array[index] = '';
    } else if (n % 3 === 0 && n % 5 === 0){
      array[index] = "FizzBuzz";
    } else if(n % 5 === 0){
      array[index] = "Buzz";
    } else if(n % 3 === 0){
      array[index] = "Fizz";
   }
   return array;
  }

   let testFizz = 10;
   console.log( "testFizz value: " + testFizz + " /// fizzBuzz(testFizz) new array: /// " + fizzBuzz(testFizz) );



/* Define a function `getLetterFrequencies()` that takes in a single string as 
   an argument. The function should *return* an Object whose keys are characters
   (letters) and whose values are the number of times that character appears in
   the argument. Your function should be case sensitive.
   _Hint:_ start with an empty Object, then loop through the letters one at a
   time (you can access them with bracket notation, like with an array). For 
   each letter, increase the value associated with that key by one. 
   ***** Watch out for if the letter is not in the Object yet! *****
   You can test this method with a word like "Mississippi". */

   let q;
   let inputString;
   let char;
   let frequency;
   let functionObject; // object thats returned

   function getLetterFrequencies(inputString){
      frequency = {};
      for (q=0; q < inputString.length ; q++){
        char = inputString.charAt(q);
        if (frequency[char]){
          frequency[char]++;
        } else{
          frequency[char] = 1;
        }
      }
    return frequency;
   };

   console.log("getLetterFrequencies " + getLetterFrequencies('Missisippi'));
   // FIX THIS LATER
   

/* Create a variable `deck` that represents a deck of modern playing cards
   (https://en.wikipedia.org/wiki/Playing_card). This variable should be an
   *array* of 52 elements, each of which is an Object with properties:
     - `suit`, with a string value that is either `"hearts"`, `"diamonds"`, 
       `"clubs"`, or `"spades"`
     - `rank`, with an integer value ranging from 2 to 14 inclusive (values 
        11-14 represent a Jack, Queen, King, or Ace respectively).
    Tip: use a pair of nested loops to add each combination of suit and rank to 
    the `deck` array! 
    
    You can log out the `deck` to check your work! */

let deck = [];
let suit = ["hearts", "diamonds", "clubs", "spades"];
let rank = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
let x;
let j;
let card;

for(x = 0; x < suit.length; x++){
  for(j = 0; j < rank.length; j++){
    card = {Rank: rank[j], Suit: suit[x]};
    deck.push(card);
  }
}

console.log(deck);

//You can test the below functions by creating e.g., a `pokerHand` array that 
//contains five cards from the `deck`.

// pokerHand = [{Rank: 7, Suit: "hearts"}, {Rank: 2, Suit: "spades"}, {Rank: "Ace", Suit: "diamonds"}, {Rank: "Jack", Suit: "hearts"}, {Rank: 7, Suit: "hearts"}];
// console.log(pokerHand);

// STUCK ON THIS 
let k;
let random;
let pokerCard;

function pokerHand(){ // make function that generates an array from 5 random variables in "deck" to be your "Poker Hand"
  for (k = 0; k < 5 ; k++){ // loop through 5 card array
    pokerCard[k] = Math.floor(Math.random() * deck.length); // select random card from deck
    // ISSUE???? CANNOT SET PROPERTY "0" OF UNDEFINED???
    random.push(pokerCard); // update current array slot K with card
  }
  return pokerCard;
}

console.log(pokerHand());


/* Define a function `containsQueenOfHearts()` that takes in an array of "card"
   objects (e.g., a Poker hand) and returns whether or not the Queen of Hearts
   is in that array.
   Hint: use a loop to check each card. */

  let c1;
  let statusTrue = "queen of hearts exists";
  let statusFalse = "queen of hearts doesn't exist";

  function containsQueenOfHearts(pokerHand){
    for(c1 = 0; c1 < pokerHand.length; c1++){ // search through each card in Array. do i need to make a second for loop to check each individual array slot???
      if(pokerHand.indexOf("{Rank: 7, Suit: "hearts"}")){
        console.log(statusTrue);
      } else{
        console.log(statusFalse);
      }
    }
  }
  console.log(containsQueenOfHearts(pokerHand));

/* Define a function `getHighCard()` that takes in an array of "card" objects
  and returns the card object with the highest value. The "high card" is the one
  with the highest rank. Cards of different suits but the same rank are 
  considered to have the same value, and either is a valid result */

  // ORDER OF RANK: 2, 3, 4, 5, 6, 7, 8, 9, JACK, QUEEN, KING, ACE
  // all 
  // suits do not matter, 2 cards with different suit but same rank = equal. 
  // RETURN EVERY CARD ELIGIBLE TO BE HIGHEST

  // DONT KNOW HOW TO READ THROUGH STRING {Rank: 7, Suit: "hearts"} ??????????
  let currentHighCard;

  function getHighCard(pokerHand){
  for(c1 = 0; c1 < pokerHand.length ; c1++){ // 1. check through each array slot, and read string
    if(typeof pokerhand[c1] === string){ // 2. CHECK IF "RANK:" IS A J/Q/K/A VALUE FIRST 
      if(pokerhand[c1].contains("Rank: Ace")){ // 3a. do series of if/else statements to check if J/Q/K/A IS HIGHEST 
      currentHighCard = pokerhand[c1];
      } else if(pokerhand[c1].contains("Rank: King")){
        currentHighCard = pokerhand[c1];
      } else if(pokerhand[c1].contains("Rank: Queen")){
        currentHighCard = pokerhand[c1];
      } else if(pokerhand[c1].contains("Rank: Jack")){
        currentHighCard = pokerhand[c1];
      }
    } else{ // 3b. AUTOMATICALLY RESORTS TO SORTING NUMBERS. THEN CHECK WHICH NUMBER IS HIGHEST
      if (pokerhand[c1].contains("Rank: 9")){
        currentHighCard = pokerhand[c1];
      } else if (pokerhand[c1].contains("Rank: 8")){
        currentHighCard = pokerhand[c1];
      } else if (pokerhand[c1].contains("Rank: 7")){
        currentHighCard = pokerhand[c1];
      } else if (pokerhand[c1].contains("Rank: 6")){
        currentHighCard = pokerhand[c1];
      } else if (pokerhand[c1].contains("Rank: 5")){
        currentHighCard = pokerhand[c1];
      } else if (pokerhand[c1].contains("Rank: 4")){
        currentHighCard = pokerhand[c1];
      } else if (pokerhand[c1].contains("Rank: 3")){
        currentHighCard = pokerhand[c1];
      } else if (pokerhand[c1].contains("Rank: 2")){
        currentHighCard = pokerhand[c1];
      }
    }
  }
  return currentHighCard;
}

console.log("the High Card is: " + getHighCard);
  

/* Define a function `isFlush()` that takes in an array of "card" objects and
   returns whether or not the cards all have the same _suit_. */

// 1. loop through all array values
// 2. take first value, and check second value. if === keep going. keep repeating until end of array. 
// 2a. STOP AT 4TH ARRAY VALUE SO IF YOU HIT END OF ARRAY (5) YOU DONT EXCEED TO VALUE 6
 // 3. if =/= at any point in time: STOP

 let isSameSuit;
 let sameTrue = "SAME SUIT";
 let sameFalse = "NOT SAME SUIT";

function isFlush(pokerHand){
  for (c1=0 ; c1 > pokerHand.length ; c1++){
    if(pokerHand[c1] == pokerHand[c1 + 1] && c1 !== 5){ 
      isSameSuit = sameTrue;
    } else{
      isSameSuit = sameFalse;
      return; // stop immediately
    }
  }
  return isSameSuit;
}   

console.log(isFlush(pokerHand));

/* Extra challenge: define a function `hasPair()` that takes in an array of 
   "card" objects and returns whether or not there is at least one _pair_ (two 
   cards with the same _rank_) in the array.
   Double challenge: return the rank of the pair of cards with the highest rank 
   (e.g., if the hand contains more than one pair!) */



//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  if(typeof addFour !== 'undefined') 
    module.exports.addFour = addFour;
  if(typeof twelveString !== 'undefined') 
    module.exports.twelveString = twelveString;
  if(typeof compoundInterest !== 'undefined') 
    module.exports.compoundInterest = compoundInterest;
  if(typeof fizzBuzz !== 'undefined') 
    module.exports.fizzBuzz = fizzBuzz;
  if(typeof getLetterFrequencies !== 'undefined')
    module.exports.getLetterFrequencies = getLetterFrequencies;
  if(typeof deck !== 'undefined')
    module.exports.deck = deck;
  if(typeof containsQueenOfHearts !== 'undefined')
    module.exports.containsQueenOfHearts = containsQueenOfHearts;
  if(typeof getHighCard !== 'undefined')
    module.exports.getHighCard = getHighCard;
  if(typeof isFlush !== 'undefined')
    module.exports.isFlush = isFlush;
}
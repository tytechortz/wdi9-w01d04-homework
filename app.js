//1.Parameter-a parameter is a temporary variable name to which an argument can be assigned.
//  Argument-The input to the parameter

//2. Return gives a value to a function. Console.log simply allows us to see the results.
//3. It allows the funciton to be reused, for DRY code.

const checkPalindrome = (word) => {
    //Changes word to all lowercase;
    const caseWord = word.toLowerCase();
    const reversedWord = caseWord.split('').reverse().join('');
    if (reversedWord === caseWord) {
    console.log('true');
        } else {
    console.log('false');
    } 
}

checkPalindrome('Radar');
checkPalindrome('Borscht');



//3. Digit Sum
/*

//4. Pythagoras

const calculateSide = (sideA, sideB) => {
    const sideC = Math.sqrt(Math.pow(sideA,2) + Math.pow(sideB,2));
   console.log(sideC);
}
calculateSide(8, 6);


//5. Sum Array

console.log([1, 2, 3, 4, 5, 6].reduce((a, b) => a + b, 0));


//6.

const checkPrime = (num) => {
    for(let i = 2; i <= Math.sqrt(i); i++)
        if (num % i === 0) 
        return false;
        return num !== 1;  
    }
checkPrime(9);
*/
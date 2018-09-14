//1.Parameter-a parameter is a temporary variable name to which an argument can be assigned.
//  Argument-The input to the parameter

//2. Return gives a value to a function. Console.log simply allows us to see the results.
//3. It allows the funciton to be reused, for DRY code.

const checkPalindrome = (word) => {
    word = word.toLowerCase;
   const reversedWord = word.split('').reverse().join('');
    if (word === reversedWord) {
    console.log('true');
    } else {
    console.log('false');
    } 
}
checkPalindrome('Radar');
checkPalindrome('Borscht');
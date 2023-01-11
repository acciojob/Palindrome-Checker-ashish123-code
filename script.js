// complete the given function

function palindrome(str){
    str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // check if the string is the same forwards and backwards
    return str === str.split('').reverse().join('');
}
module.exports = palindrome
console.log(palindrome("racecar")); // true
console.log(palindrome("RaceCar")); // true
console.log(palindrome("raceCAR")); // true
console.log(palindrome("word")); // false
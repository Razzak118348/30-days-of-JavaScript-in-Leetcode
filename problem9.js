var isPalindrome = function(x) {
const str = x.toString();
    const reversed = str.split('').reverse().join('');
    console.log(reversed)
    return str === reversed;

};

const ispalindrom=isPalindrome(121)
console.log(ispalindrom)
const ispalindrom2=isPalindrome(125)
console.log(ispalindrom2)
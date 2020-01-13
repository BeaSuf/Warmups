const palindrome = function(str) {
    const noSpaceStr = str.split(' ').join('');
    const lowerCaseStr = noSpaceStr.toLowerCase();
    const splitStr = lowerCaseStr.split('');
    const reveresedStr = splitStr.reverse();
    const joinStr = reveresedStr.join('');

    return lowerCaseStr === joinStr;
}

const stringToCheck = "A but tuba";
console.log(`${stringToCheck} is ${palindrome(stringToCheck) ? "a palindrome" : "not a palindrome"}`);
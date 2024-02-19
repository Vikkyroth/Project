//nomer 1
function titleToNumber(columnTitle) {
    let result = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        result = result * 26 + columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
    }
    return result;
}
console.log(titleToNumber("AA"));

//nomer 2
const nums = [2,2,3,3,5,7,9,9];

const hasil = nums.filter((item, index, arr) => (arr.lastIndexOf(item) == arr.indexOf(item)));

console.log(hasil);

//nomer 3
function isAnagram(s, t) {
    // Check if the lengths of the strings are different
    if (s.length !== t.length) {
        return false;
    }
    
    // Sort the characters of both strings and compare them
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');
    
    return sortedS === sortedT;
}
console.log(isAnagram("arsenal", "senalar"));
console.log(isAnagram("rat", "car"));  

//nomer 4
function climbStairs(n) {
      if (n === 1) return 1;
    
      let first = 1;
      let second = 2;
      for (let i = 3; i <= n; i++) {
        let third = first + second;
        first = second;
        second = third;
      }
      return second;
    }
    
    // Example usage:
    console.log(climbStairs(4));
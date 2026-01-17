<<<<<<< HEAD
import {
  twoSum, singleNumber, sortArray, longestConsecutive, isPalindromeNumber,
  lengthOfLongestSubstring, moveZeroes, isAnagram, firstMissingPositive,
  isValidParentheses, rotate, majorityElement, uniqueElements, firstUniqChar,
  binarySearch, maxSubArray, productExceptSelf, longestCommonPrefix,
  intToRoman, romanToInt, findDuplicates, majorityElementK, reverseWords,
  threeSum, largestInRows, setZeroes, rotateMatrix, longestPalindromeSubstring,
  nextGreaterElements, maxWater, trap, isPalindromeString, findKthLargest,
  topKFrequent
} from "./function.js";

// 1
console.log("1:", twoSum([2,7,11,15], 9));

// 2
console.log("2:", singleNumber([4,1,2,1,2]));

// 3
console.log("3:", sortArray([5,3,8,1]));

// 4
console.log("4:", longestConsecutive([100,4,200,1,3,2]));

// 5
console.log("5:", isPalindromeNumber(121));

// 6
console.log("6:", lengthOfLongestSubstring("abcabcbb"));

// 7
console.log("7:", moveZeroes([0,1,0,3,12]));

// 8
console.log("8:", isAnagram("anagram","nagaram"));

// 9
console.log("9:", firstMissingPositive([3,4,-1,1]));

// 10
console.log("10:", isValidParentheses("()[]{}"));

// 11
console.log("11:", rotate([1,2,3,4,5,6,7],3));

// 12
console.log("12:", majorityElement([2,2,1,1,1,2,2]));

// 13
console.log("13:", uniqueElements([1,2,3,2,1,4]));

// 14
console.log("14:", firstUniqChar("leetcode"));

// 15
console.log("15:", binarySearch([1,3,5,7,9],7));

// 16
console.log("16:", maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));

// 17
console.log("17:", productExceptSelf([1,2,3,4]));

// 18
console.log("18:", longestCommonPrefix(["flower","flow","flight"]));

// 19
console.log("19:", intToRoman(58));

// 20
console.log("20:", romanToInt("MCMXCIV"));

// 21
console.log("21:", findDuplicates([4,3,2,7,8,2,3,1]));

// 22
console.log("22:", majorityElementK([2,2,1,1,1,2,2]));

// 23
console.log("23:", reverseWords("the sky is blue"));

// 24
console.log("24:", threeSum([-1,0,1,2,-1,-4]));

// 25
console.log("25:", largestInRows([[1,2,3],[4,5,6],[7,8,9]]));

// 26
console.log("26:", setZeroes([[1,1,1],[1,0,1],[1,1,1]]));

// 27
console.log("27:", rotateMatrix([[1,2],[3,4]]));

// 28
console.log("28:", longestPalindromeSubstring("babad"));

// 29
console.log("29:", nextGreaterElements([2,1,2,4,3]));

// 30
console.log("30:", maxWater([1,8,6,2,5,4,8,3,7]));

// 31
console.log("31:", trap([0,1,0,2,1,0,1,3,2,1,2,1]));

// 32
console.log("32:", isPalindromeString("A man, a plan, a canal: Panama"));

// 33
console.log("33:", findKthLargest([3,2,1,5,6,4],2));

// 34
console.log("34:", topKFrequent([1,1,1,2,2,3],2));
=======
// 1-masala
function task1(callback) {
  setTimeout(() => {
    callback("Salom, dunyo!");
  }, 2000);
}
task1(res => console.log(res));


// 2-masala
function task2(callback) {
  setTimeout(() => {
    callback("Xato yuz berdi!");
  }, 1000);
}
task2(res => console.log(res));


// 3-masala
function task3(callback) {
  setTimeout(() => {
    callback(5);
  }, 1000);
}
task3(num => {
  const result = num * 2;
  console.log(result);
});


// 4-masala
function task4(callback) {
  let results = [];
  setTimeout(() => {
    results.push("1s");
  }, 1000);
  setTimeout(() => {
    results.push("2s");
  }, 2000);
  setTimeout(() => {
    results.push("3s");
    callback(results);
  }, 3000);
}
task4(res => console.log(res));


// 5-masala
function task5(callback) {
  let finished = false;
  setTimeout(() => {
    if (!finished) {
      finished = true;
      callback("1s g'olib");
    }
  }, 1000);
  setTimeout(() => {
    if (!finished) {
      finished = true;
      callback("2s g'olib");
    }
  }, 2000);
}
task5(res => console.log(res));


// 6-masala
function loadUserData(userId, callback) {
  setTimeout(() => {
    if (userId % 2 === 0) callback("Success");
    else callback("Error");
  }, 1000);
}
loadUserData(2, res => console.log(res));
loadUserData(3, res => console.log(res));


// 7-masala
function retryTask(fn, retries, callback) {
  fn(result => {
    if (result === "Success") callback(result);
    else if (retries > 1) retryTask(fn, retries - 1, callback);
    else callback("Urinishlar tugadi");
  });
}


// 8-masala
function timeoutTask(callback) {
  let done = false;
  setTimeout(() => {
    if (!done) {
      done = true;
      callback("Timeout error");
    }
  }, 2000);
  setTimeout(() => {
    if (!done) {
      done = true;
      callback("Success");
    }
  }, 1000);
}
timeoutTask(res => console.log(res));


// 9-masala
function sequentialTasks(callback) {
  setTimeout(() => {
    console.log("1-qadam");
    setTimeout(() => {
      console.log("2-qadam");
      setTimeout(() => {
        console.log("3-qadam");
        callback();
      }, 1000);
    }, 1000);
  }, 1000);
}
sequentialTasks(() => console.log("Tugadi"));


// 10-masala
function getUserDataFlow(userId, callback) {
  setTimeout(() => {
    const user = { id: userId };
    setTimeout(() => {
      const posts = ["post1"];
      setTimeout(() => {
        const comments = ["comment1"];
        callback({ user, posts, comments });
      }, 1000);
    }, 1000);
  }, 1000);
}
getUserDataFlow(1, res => console.log(res));


// 11-masala
function RateLimiter(max, interval) {
  let queue = [];
  setInterval(() => {
    if (queue.length) queue.shift()();
  }, interval / max);

  this.execute = function (task) {
    queue.push(task);
  };
}


// 12-masala
function divide(a, b, callback) {
  if (b === 0) callback("Bolib bolmaydi");
  else callback(a / b);
}
divide(10, 2, res => console.log(res));
divide(10, 0, res => console.log(res));


// 13-masala
function waitAndReturn(value, seconds, callback) {
  setTimeout(() => {
    callback(value);
  }, seconds * 1000);
}
waitAndReturn("OK", 2, res => console.log(res));


// 14-masala
function processNumber(num, callback) {
  let a = num * 10;
  console.log(a);
  let b = a - 5;
  console.log(b);
  let c = b / 2;
  console.log(c);
  callback(c);
}
processNumber(5, res => console.log(res));


// 15-masala
function checkAge(age, callback) {
  if (age >= 18) callback("Ruxsat berildi");
  else callback("Yosh yetarli emas");
}
checkAge(20, res => console.log(res));
checkAge(15, res => console.log(res));


// 16-masala
function fetchData(url, callback) {
  if (!url) callback("Xatolik: URL bo'sh");
  else callback("Ma'lumot olindi");
}
fetchData("", res => console.log(res));
fetchData("api", res => console.log(res));


// 17-masala
function getAllData(callback) {
  let data = {};
  setTimeout(() => {
    data.users = "Users";
    setTimeout(() => {
      data.posts = "Posts";
      setTimeout(() => {
        data.comments = "Comments";
        callback(data);
      }, 1000);
    }, 1000);
  }, 1000);
}
getAllData(res => console.log(res));
>>>>>>> 3c1439e56c834849e1923f69327f05bc9e259112

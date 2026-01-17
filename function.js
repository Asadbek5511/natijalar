function twoSum(nums, target) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    let need = target - nums[i];
    if (map[need] !== undefined) return [map[need], i];
    map[nums[i]] = i;
  }
}

function singleNumber(nums) {
  let res = 0;
  for (let n of nums) res ^= n;
  return res;
}

function sortArray(nums) {
  return nums.sort((a, b) => a - b);
}

function longestConsecutive(nums) {
  let set = new Set(nums);
  let max = 0;
  for (let n of set) {
    if (!set.has(n - 1)) {
      let cur = n, len = 1;
      while (set.has(cur + 1)) { cur++; len++; }
      max = Math.max(max, len);
    }
  }
  return max;
}

function isPalindromeNumber(x) {
  return x.toString() === x.toString().split("").reverse().join("");
}

function lengthOfLongestSubstring(s) {
  let set = new Set(), l = 0, max = 0;
  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) set.delete(s[l++]);
    set.add(s[r]);
    max = Math.max(max, r - l + 1);
  }
  return max;
}

function moveZeroes(nums) {
  let idx = 0;
  for (let n of nums) if (n !== 0) nums[idx++] = n;
  while (idx < nums.length) nums[idx++] = 0;
  return nums;
}

function isAnagram(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
}

function firstMissingPositive(nums) {
  let set = new Set(nums), i = 1;
  while (set.has(i)) i++;
  return i;
}

function isValidParentheses(s) {
  const stack = [], map = { ")": "(", "]": "[", "}": "{" };
  for (let c of s) {
    if (map[c]) {
      if (stack.pop() !== map[c]) return false;
    } else stack.push(c);
  }
  return stack.length === 0;
}

function rotate(nums, k) {
  k %= nums.length;
  return nums.slice(-k).concat(nums.slice(0, -k));
}

function majorityElement(nums) {
  let count = 0, cand;
  for (let n of nums) {
    if (count === 0) cand = n;
    count += n === cand ? 1 : -1;
  }
  return cand;
}

function uniqueElements(nums) {
  const map = {};
  nums.forEach(n => map[n] = (map[n] || 0) + 1);
  return nums.filter(n => map[n] === 1);
}

function firstUniqChar(s) {
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) return c;
  return -1;
}

function binarySearch(nums, target) {
  let l = 0, r = nums.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (nums[m] === target) return true;
    nums[m] < target ? l = m + 1 : r = m - 1;
  }
  return false;
}

function maxSubArray(nums) {
  let max = nums[0], cur = 0;
  for (let n of nums) {
    cur = Math.max(n, cur + n);
    max = Math.max(max, cur);
  }
  return max;
}

function productExceptSelf(nums) {
  let res = Array(nums.length).fill(1), left = 1, right = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] *= left;
    left *= nums[i];
    res[nums.length - 1 - i] *= right;
    right *= nums[nums.length - 1 - i];
  }
  return res;
}

function longestCommonPrefix(strs) {
  if (!strs.length) return "";
  let pref = strs[0];
  for (let s of strs) while (!s.startsWith(pref)) pref = pref.slice(0, -1);
  return pref;
}

function intToRoman(num) {
  const map = [
    [1000,"M"],[900,"CM"],[500,"D"],[400,"CD"],
    [100,"C"],[90,"XC"],[50,"L"],[40,"XL"],
    [10,"X"],[9,"IX"],[5,"V"],[4,"IV"],[1,"I"]
  ];
  let res = "";
  for (let [v,s] of map) while (num >= v) { res += s; num -= v; }
  return res;
}

function romanToInt(s) {
  const map = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 1 && map[s[i]] < map[s[i+1]]) num -= map[s[i]];
    else num += map[s[i]];
  }
  return num;
}

function findDuplicates(nums) {
  const map = {}, res = [];
  for (let n of nums) {
    map[n] = (map[n] || 0) + 1;
    if (map[n] === 2) res.push(n);
  }
  return res;
}

function majorityElementK(nums) {
  const map = {};
  nums.forEach(n => map[n] = (map[n]||0)+1);
  let max = 0, res;
  for (let k in map) if (map[k] > max) { max = map[k]; res = Number(k); }
  return res;
}

function reverseWords(s) {
  return s.trim().split(/\s+/).reverse().join(" ");
}

function threeSum(nums) {
  nums.sort((a,b)=>a-b);
  const res = [];
  for (let i=0;i<nums.length-2;i++){
    if(i>0 && nums[i]===nums[i-1]) continue;
    let l=i+1,r=nums.length-1;
    while(l<r){
      const sum = nums[i]+nums[l]+nums[r];
      if(sum===0){res.push([nums[i],nums[l],nums[r]]); l++; r--; while(nums[l]===nums[l-1])l++; while(nums[r]===nums[r+1])r--;}
      else if(sum<0) l++; else r--;
    }
  }
  return res;
}

function largestInRows(matrix) {
  return matrix.map(row => Math.max(...row));
}

function setZeroes(matrix) {
  const m=matrix.length,n=matrix[0].length;
  const rows=new Set(), cols=new Set();
  for(let i=0;i<m;i++) for(let j=0;j<n;j++) if(matrix[i][j]===0){rows.add(i); cols.add(j);}
  for(let i=0;i<m;i++) for(let j=0;j<n;j++) if(rows.has(i)||cols.has(j)) matrix[i][j]=0;
  return matrix;
}

function rotateMatrix(matrix) {
  const n=matrix.length;
  for(let i=0;i<n;i++) for(let j=i+1;j<n;j++){[matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]];}
  for(let i=0;i<n;i++) matrix[i].reverse();
  return matrix;
}

function longestPalindromeSubstring(s) {
  let start=0,maxLen=0;
  for(let i=0;i<s.length;i++){
    for(let j=0;j<2;j++){
      let l=i,r=i+j;
      while(l>=0 && r<s.length && s[l]===s[r]){l--; r++;}
      if(r-l-1>maxLen){start=l+1; maxLen=r-l-1;}
    }
  }
  return s.slice(start,start+maxLen);
}

function nextGreaterElements(nums) {
  const stack=[], res=Array(nums.length).fill(-1);
  for(let i=0;i<nums.length;i++){
    while(stack.length && nums[i]>nums[stack[stack.length-1]]){res[stack.pop()]=nums[i];}
    stack.push(i);
  }
  return res;
}

function maxWater(height) {
  let l=0,r=height.length-1,max=0;
  while(l<r){max=Math.max(max, Math.min(height[l],height[r])*(r-l)); height[l]<height[r]?l++:r--;}
  return max;
}

function trap(height) {
  let left=0,right=height.length-1,lmax=0,rmax=0,res=0;
  while(left<=right){
    if(height[left]<height[right]){
      lmax=Math.max(lmax,height[left]);
      res+=lmax-height[left];
      left++;
    } else {
      rmax=Math.max(rmax,height[right]);
      res+=rmax-height[right];
      right--;
    }
  }
  return res;
}

function isPalindromeString(s) {
  s=s.toLowerCase().replace(/[^a-z0-9]/g,'');
  return s===s.split('').reverse().join('');
}

function findKthLargest(nums,k){
  nums.sort((a,b)=>b-a);
  return nums[k-1];
}

function topKFrequent(nums,k){
  const map={};
  nums.forEach(n=>map[n]=(map[n]||0)+1);
  return Object.entries(map).sort((a,b)=>b[1]-a[1]).slice(0,k).map(e=>Number(e[0]));
}

export {
  twoSum, singleNumber, sortArray, longestConsecutive, isPalindromeNumber,
  lengthOfLongestSubstring, moveZeroes, isAnagram, firstMissingPositive,
  isValidParentheses, rotate, majorityElement, uniqueElements, firstUniqChar,
  binarySearch, maxSubArray, productExceptSelf, longestCommonPrefix,
  intToRoman, romanToInt, findDuplicates, majorityElementK, reverseWords,
  threeSum, largestInRows, setZeroes, rotateMatrix, longestPalindromeSubstring,
  nextGreaterElements, maxWater, trap, isPalindromeString, findKthLargest,
  topKFrequent
};

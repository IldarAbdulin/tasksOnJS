// 1
// const arr = [[1, 3], [2, 6], [8, 10], [15,18]];
// const arr2 = [[1, 4], [4, 5]];
// const arr3 = [[15,18], [8, 10], [2, 6], [1, 3]];

// const merge = (intervals) => {
//     if(intervals.length < 2) {
//         return intervals;
//     }
//     intervals.sort((a, b) => a[0] - b[0]);
//     const result = [intervals[0]];
//     for(let inteval of intervals) {
//         let recent = result[result.length - 1];
//         if(recent[1] >= inteval[0]) {
//             recent[1] = Math.max(recent[1], inteval[1])
//         } else {
//             result.push(inteval)
//         }
//     }
//     return result;
// }
// console.log(merge(arr))
// console.log(merge(arr2))
// console.log(merge(arr3))


//2
// const prices1 = [7, 1, 5, 3, 6, 4];
// const prices2 = [7, 1, 6, 4, 3];

// const maxProfit = (prices) => {
//     let result = 0;

//     for(let i = 0; i < prices.length; i++) {
//         if(prices[i] > prices[i - 1]) {
//             result +=  prices[i] - prices[i - 1]
//         }
//     }

//     return result;
// }
// console.log(maxProfit(prices1))
// console.log(maxProfit(prices2))


//3
// const fizzBuzz = (num) => {
//     for(let i = 0; i <= num; i++) {
//         if(i % 15 === 0) {
//             console.log('FizzBuzz')
//         }
//         else if(i % 5 === 0) {
//             console.log('Buzz')
//         }
//         else if(i % 3 === 0) {
//             console.log('Fizz')
//         }
//         else {
//             console.log(i)
//         }
//     }
// }
// console.log(fizzBuzz(50))


//4
// const button = document.querySelector('#btn')
// const palindrome = (p) => {
//     p = prompt('Введите текст');
//     p = p.toLowerCase().replace(/\s/g,'');
//     if (p == '') {
//         alert('Строка не может быть пустой')
//     } else if (p === p.split('').reverse().join('')){
//         console.log('Это палиндром')
//     } else {
//         console.log('Это не палиндром')
//     }
// }
// button.addEventListener('click', palindrome)


//5
// let input1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// let input2 = [1, 1];
// let input3 = [4, 3, 2, 1, 4];
// let input4 = [1, 2, 1];

// const maxArea = (height) => {

//     let maxArea = 0;
//     let left = 0;
//     let right = height.length - 1;
    
//     while(left < right) {
//         let currentVolume = Math.min(height[left], height[right]) * (right - left);
//         maxArea = Math.max(maxArea, currentVolume);

//         if(height[left] < height[right]) {
//             left += 1
//         } else {
//             right -= 1
//         }
//     }
//     return maxArea
// }
// console.log(maxArea(input1))
// console.log(maxArea(input2))
// console.log(maxArea(input3))
// console.log(maxArea(input4))


//6
// const arr = [1, 5, 2, 10, 3, 8]

// last element
// first option
// const last = arr.slice(-1)
// console.log(last)

// second option
// const last = arr[arr.length - 1]
// console.log(last)

// first element
// const first = arr.slice(0, 1);
// console.log(first)



//7 
// const arr1 = [1, 1, 2, 2, 3, 3]
// const arr2 = [0, 0, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3];

// const removeDuplicates = (nums) => {
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] === nums[i - 1]) {
//             nums.splice(i, 1)
//             i--;
//         }
//     }
//     return nums.length;
// }
// console.log('----------')
// console.log(removeDuplicates(arr1))
// console.log(arr1)
// console.log('----------')
// console.log(removeDuplicates(arr2))
// console.log(arr2)


//8
// const findVowels = (str) => {
//     let count = 0;
//     const vowels = ['a', 'e', 'i' , 'o', 'u'];
//     const word = str.toLowerCase().split('');

//     for(let i = 0; i < vowels.length; i++) {
//         for(let j = 0; j < word.length; j++) {
//             if(vowels[i] === word[j]) {
//                 count++
//             }
//         }
//     }

//     return count;
// }
// console.log(findVowels('hello')) //2
// console.log(findVowels('aaaooo')) //6
// console.log(findVowels('why')) //0
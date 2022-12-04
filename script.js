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

//9
// const classNames = ['header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu' , 'link', 'link', 'link' , 'link'];
// for(let i = 0; i < classNames.length; i++) {
//     if(classNames[i] === classNames[i - 1]) {
//         classNames.splice(i, 1)
//         i--;
//     }
// }

// console.log(classNames);

//10
// const numbers = (number) => {
//     const minMax = [];

//     const minValue = number.sort((a, b) => a - b)[0];
//     minMax.push(minValue)
//     const maxValue = number.sort((a, b) => b - a)[0];
//     minMax.push(maxValue)

//     return minMax
// }
// console.log(numbers([20, 5, 10, -100, 1, 9, 5, 500]))

//11
// let test = true
// test ? console.log('Неверно') : console.log('Верно');

//12
// let number;
// let data;
// if(data === true) { number = 3}
// else {number = 5}

// Рефакторинг кода
// data ? number = 3 : number = 5;
// console.log(number);

//13
// let numbers = [-5, 10, 55, -1, 22, -4, 36, -45]
// let minus = []
// for (num of numbers){
//     num < 0 ? minus.push(num) : ''
// }
// console.log(minus)
// let minus = numbers.filter(a => a < 0)
// console.log(minus)

//14
// let filterFalses = [false, 45, 'str', null, 0, 1, undefined, 0];
// let typeWasFalse = filterFalses.filter(falsy => falsy == false);
// console.log(typeWasFalse);

//таблица умножения
// for (i = 1; i <= 10; i++){
//     console.log('№' + i);
//     for (j = 1; j <= 10; j++){
//         console.log(`${i} * ${j} = ${i*j} `);
//     }
//     console.log(" ");
// }

//15
// const numbersInReverse = (num) => {
//     let reverseNums = [...num.toString()].map(Number).sort((a, b) => b - a);
//     return reverseNums;
// }
// console.log(numbersInReverse(12358))

//16
// const yearOfBirth = prompt('Год вашего рождения');
// const thisYear = prompt('Текущий год');
// console.log(thisYear - yearOfBirth);

//17
// const arr = [1, 2, 3, 4];
// const arrKv = []
// for(let i = 1; i <= arr.length; i++) {
//     const arrSort = (i ** 2);
//     arrKv.push(arrSort)
// }
// console.log(arrKv)

//18
// const firstNum = +prompt('Введите первое число');
// const secondNum = +prompt('Введите второе число');
// const sum = firstNum + secondNum;
// console.log(sum)

// while (sum) {
//     const total = +prompt('Сумма введеных чисел ?')
//     if (total === 'exit') {
//         break;
//     } else if (total === sum) {
//         alert('Верно')
//         break
//     }
// }

//19
// const data = [1, 2, 3];
// function myFunc(arr) {
//     return arr = arr.reverse();
// }
// console.log(myFunc(data));

//20
// const digitalRoot = (n) => {
//     const arr = [...n.toString()].map(Number)
//     const result = arr.reduce((a ,b) => a + b , 0)

//     if(result >= 10) {
//         let secondResult = [...result.toString()].map(Number).reduce((a, b) => a + b ,0)
//         return secondResult
//     }

//     return result
// }
// console.log(digitalRoot(942));

//21
// let count = 0;
// const helloWorld = () => {
//     if(count === 5) return alert('done');
//     count++
//     helloWorld(alert('Hello world'))
// }
// helloWorld();

// function pow(x, y) {
//     if(y === 0) return 1;
//     return x * pow(x, y - 1);
// }
// console.log(pow(5,3));

//22
// function sumOfDigits(number) {
//   return number < 10 ? 1 : 1 + sumOfDigits(Math.floor(number / 10));
// }
// console.log(sumOfDigits(1234));


//23
// function urlGenerator(domain) {
//     return function(url) {
//         return `https://${url}.${domain}`
//     }
// }
// const comUrl = urlGenerator('com');
// const ruUrl = urlGenerator('ru')

// console.log(comUrl('google'));
// console.log(comUrl('youtube'));

// console.log(ruUrl('yandex'));
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
const button = document.querySelector('#btn')
const palindrome = (p) => {
    p = prompt('Введите текст');
    p = p.toLowerCase().replace(/\s/g,'');
    if (p == '') {
        alert('Строка не может быть пустой')
    } else if (p === p.split('').reverse().join('')){
        console.log('Это палиндром')
    } else {
        console.log('Это не палиндром')
    }
}
button.addEventListener('click', palindrome)
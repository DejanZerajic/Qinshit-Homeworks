/* 
Homework #5

Title: Looping structures

Description: Write a JavaScript function that will return:
The sum of the MAX and MIN numbers from an array with numbers
Ex: arr = [3, 5, 6, 8, 11]
Output: Max: 11, Min: 3, Sum: 14


*/
/* bne znaev kako da ja resam ovaa zdaca, barav niz internet
i na geekforgeeks.org najdov izrazi za matematicki maksimum i minimum, pa gi upotrebiv */

function sumMaxMin(arrayNumbers) {
  let max = Math.max(...arrayNumbers);
  let min = Math.min(...arrayNumbers);
  let sum = max + min;

  console.log(`Max: ${max}, Min: ${min}, Sum: ${sum}`);
  return sum;
}

const arr = [3, 5, 6, 8, 11];
sumMaxMin(arrayNumbers);

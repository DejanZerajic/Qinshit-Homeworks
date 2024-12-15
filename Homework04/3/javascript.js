/* 
Homework #4

Title: Looping structures

Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.

*/
//prvo gi definiram expressions vo for statement (iterator, boolean izraz koj proveruva true ili false, inkrement)
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    //ako modulus od deleno so dva na iteratorot e nula, togas imame paren broj
    console.log(i + "\n"); // dodavam nov red kaj parnite
  } else {
    console.log(i + " "); // vo sprotivno, brojot e neparen, odnosno i % 2 !==0, pa dodavam navodnici
  }
}
/*treba da raboti, no nesto ne e vo red, ne mi gi dava neparnite vo navodnici, mozebi treba nepranite da gi pretvoram
vo stringovi, ama ne znam kako. Znam od string vo number so parsInt.
*/

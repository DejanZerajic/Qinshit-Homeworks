/*Homework 4, Class04
Description:Write a javascript function that: 
When given 2 arrays of students firstNames and lastNames will return a new
array with students full names 
Every name should have a numeric value before it 
Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"] 
Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]
*/

function firstLastName(firstName, lastName) {
  //postavuvam funkcija so dva parametri
  let fullName = []; //celosnoto ime e prazna niza, stavena vo varijabla
  for (i = 0; i < firstName.length; i++) {
    //pocnuvam loop (od kade, do kade, zgolemuvanje na iterator)
    fullName.push(`${i + 1}. ${firstName[i]} ${lastName[i]}`); //vo praznata niza fullName dodavam vrednosti od loopot,so push dodavam
  }
  return fullName;
}
let first = ["Aneta", "Ivan"];
let last = ["Stamenkovska", "Apostolovski"];
let full = firstLastName(first, last);
console.log(full);

//STUDENT EXERCISE 1

//select the first div
let firstDiv = document.getElementById("first");
console.log(firstDiv);

//moze i vaka
let firstDiv1 = document.getElementsByClassName("aDiv");
console.log(firstDiv);
console.log("========================================");

//select all paragraphs
let allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);
console.log("========================================");

//select last div
let allDivs = document.getElementsByTagName("div");
console.log(allDivs);
let lastDiv = allDivs[2];
console.log(lastDiv);
/*moze i vaka  
 let allQueryDivs = document.querySelectorAll("div");
console.log(allQueryDivs.length - 1);*/
console.log("========================================");

//Select the header 3 in the last div
let headerThree = document.getElementsByTagName("h3");
console.log(headerThree);
console.log("========================================");

//Select the header 1 in the last div

let allDivs1 = document.getElementsByTagName("div")[2];
console.log(allDivs1);
let sibling = allDivs1.firstElementChild;
console.log(sibling);
console.log("========================================");

//Get the text from the first paragraph in the second div
let classTwo = document.getElementsByClassName("paragraph second")[0];
console.log(classTwo);
let text = classTwo.textContent;
console.log(text);
console.log("========================================");

//Add the word "text" to the text element in the second div
let textNew = document.getElementsByTagName("text")[0];
console.log(textNew.innerText);
textNew.innerText = " It's about selecting elements and text";
console.log(textNew.innerText);
console.log("========================================");

//Change the text of the header 1 in the last div
let allDivs2 = document.getElementsByTagName("div")[2];
console.log(allDivs1);
let sibling2 = allDivs1.firstElementChild;
console.log(sibling);
sibling2.innerText = "Dejan has changed the text!";
console.log(sibling2.innerText);
console.log("========================================");

//Change the text of the header 3 in the last div
let headerFour = document.getElementsByTagName("h3")[0];
console.log(headerFour);
let dejan = headerFour;
headerFour.innerText = "Dejan has done it again!";
console.log(headerFour);
console.log("========================================");

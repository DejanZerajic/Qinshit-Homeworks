//Homework Part 1
//Change the text of all paragraphs and headers with javascript
let firstDiv = document.getElementById("first");
//console.log(firstDiv);
let getChildren = firstDiv.children;
//console.log(getChildren);
let firstHeading = firstDiv.children[0];
//console.log(firstHeading);
firstHeading.textContent = "Dejan is changing this element.";
console.log(firstHeading.textContent);
let firstParagraph = firstDiv.children[1];
//console.log(firstParagraph);
firstParagraph.textContent = "Really easy, but tricky!";
console.log(firstParagraph.textContent);
console.log("======================================");
let secondDiv = document.getElementsByClassName("paragraph second")[0];
secondDiv.textContent = "It is not that easy as it seems.";
console.log(secondDiv.textContent);
let secondDiv1 = document.getElementsByTagName("text")[0];
secondDiv1.textContent = `It's about being resourcefull`;
console.log(secondDiv1.textContent);
console.log("======================================");
let lastDiv = document.getElementsByTagName("div")[2];
//console.log(lastDiv);
let headerLastDiv = lastDiv.children[0];
//console.log(lastDiv.children[0]);
headerLastDiv.textContent = "I changed it!";
console.log(headerLastDiv.textContent);

let header2LastDiv = lastDiv.children[1];
//console.log(lastDiv.children[1]);
header2LastDiv.textContent = "And I changed this one also";

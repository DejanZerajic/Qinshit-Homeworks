/* 

HOMEWORK #1

Create a function called tellStory()

The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )

The function should return one big string with a story made from the arguments

Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.

The value that is returned from the function should be printed in the console or in alert
*/

function tellStory([name, mood, activity]) {
  //funkcija so tri parametri

  let newStory = `My name is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`;
  return newStory;
}

let newStory = tellStory(["Dejan", "joyfull", "painting"]);
/*Vo nova varijabla ja stavam oprikaznata, a parametrite 
od funkcijata tellstory gi zamenuvam so argumenti navedeni kako pniza vo newstory.*/

console.log(newStory);

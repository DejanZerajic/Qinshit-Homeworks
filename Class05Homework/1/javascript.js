/* 

HOMEWORK #1
Create OBJECT animal with 2 properties and 1 method:

    name
    kind
    speak (method)

this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

*/
const animal = {
  //definiram prazen objekt so dve propertinja i edna metoda (funkcija)
  name: "",
  kind: "",
  speak: function (message) {
    console.log(`${this.kind} says: '${message}'`);
  },
};

const dog = {
  // nov objekt sto ke dobie value za key, a metodot speak ke ja zeme funkcijata od objektot animal
  name: "Bob",
  kind: "Dog",
  speak: animal.speak,
};

dog.speak("hey bro!!!");

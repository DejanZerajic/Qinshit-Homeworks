/*Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

    Already read 'The Robots of dawn' by Isaac Asimov. (if true)
    You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
    */

const book = {
  //osonoven objekt so dve prazni propertinja, edno boolean property i eden metod
  title: "",
  author: "",
  readingStatus: false,

  getReadingStatus: function () {
    if (this.readingStatus) {
      return `Already read '${this.title}' by ${this.author}.`;
    } else {
      return `You still need to read '${this.title}' by ${this.author}.`;
    }
  },
};

const book1 = {
  // prvata kniga ja proveruva
  title: "The Robots of Dawn",
  author: "Isaac Asimov",
  readingStatus: true,
  getReadingStatus: book.getReadingStatus,
};

const book2 = {
  //vtorata kniga ja proveruva spored funkcijata od opstiot objekt.
  title: "Mockingjay: The Final Book of The Hunger Games",
  author: "Suzanne Collins",
  readingStatus: false,
  getReadingStatus: book.getReadingStatus,
};

console.log(book1.getReadingStatus()); //Asimov e procitan

console.log(book2.getReadingStatus()); //Collins uste ne e procitana

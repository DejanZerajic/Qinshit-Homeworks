//postavuvam funkcija so dva parametri
function calculateAge(bY, cY) {
  //bY=BirthYear, cY=Current Year
  let userAge = cY - bY;
  console.log(`You are ${userAge} years old`);
  return userAge;
}

//ja povikuvam funkcijata so argumentite sto odgovaraat na parametrite
calculateAge(2000, 2024);
calculateAge(1924, 2024);
let myResult = calculateAge(1971, 2024); //tuka ja stavam mojata vozrast kako nova varijabila

//Ovde malku vezbam so alert
function dejanAge() {
  alert(`Dejan Zherajikj is ${myResult} years old.`);
}

dejanAge();

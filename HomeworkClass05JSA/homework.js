fetch(
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
)
  .then((response) => response.json())
  .then((data) => {
    // Students sorted by the averageGrade property

    const sortedAverageGrade = data.sort(
      (a, b) => a.averageGrade - b.averageGrade
    );
    console.log(sortedAverageGrade);

    //Array only student's first name and last name as a string

    const fullNames = sortedAverageGrade.map((person) => {
      console.log(`${person.firstName} ${person.lastName}`);
    });

    // Average grade higher than 3

    const gradeHigherOf3 = sortedAverageGrade.filter(
      (student) => student.averageGrade > 3
    );
    console.log(gradeHigherOf3);

    //Female student names with an average grade 5

    const femaleStudent = sortedAverageGrade.filter(
      (person) => person.gender === "Female" && person.averageGrade === 5
    );
    console.log(femaleStudent);

    //Male student full names who live in Skopje and are over 18 years old

    const maleStudent = sortedAverageGrade.filter(
      (person) =>
        person.gender === "Male" && person.age > 18 && person.city === "Skopje"
    );

    console.log(maleStudent);

    const filteredFemale = sortedAverageGrade.filter(
      (person) => person.gender === "Female" && person.age > 24
    );
    console.log(filteredFemale);

    const averageFemaleGrade =
      filteredFemale.reduce((acc, person) => acc + person.averageGrade, 0) /
      filteredFemale.length;
    console.log(averageFemaleGrade);

    // Male students with a name starting with B and average grade over 2

    const maleStudentWithB = sortedAverageGrade.filter(
      (person) =>
        person.gender === "Male" &&
        person.averageGrade > 2 &&
        person.firstName.startsWith("B")
    );
    console.log(maleStudentWithB);
  })
  .catch((error) => console.error(error));

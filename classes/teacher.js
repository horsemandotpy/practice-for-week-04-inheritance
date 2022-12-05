const Person = require("./person");

// Your code here
class Teacher extends Person {
  constructor(firstName, lastName, subject, yoe) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yoe;
  }

  static combinedYearsOfExperience(teaches) {
    // let yoe = 0;
    //
    // teaches.forEach(element => {
    //   yoe += element.yearsOfExperience;
    // });
    //
    // return yoe;
    return teaches.reduce((accum, element) => {
      return accum + element.yearsOfExperience;
    }, 0);
  }
}

const teacher1 = new Teacher("susan", "jones", "biology", 5);
const teacher2 = new Teacher("bobby", "roberts", "math", 15);

console.log(Teacher.combinedYearsOfExperience([teacher1, teacher2]));
/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}

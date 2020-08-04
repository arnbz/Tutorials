// JavaScript classes
class Person {
  constructor(firstName, lastName, age, likes) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }

  setName(fullName) {
    let name = fullName.split(' ');
    this.firstName = name[0];
    this.lastName = name[1];
  }

  getBio() {
    let bio = `${this.firstName} is ${this.age}.`;
    this.likes.forEach((like) => {
      bio += `${this.firstName} likes ${like}.`;
    });

    return bio;
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, grade, likes) {
    super(firstName, lastName, age, likes);
    this.grade = grade;
  }

  getBio() {
    if (this.grade >= 70) {
      console.log(`${this.firstName} is passing`);
    } else {
      console.log(`${this.firstName} is failing`);
    }
  }

  updateGrade(number) {
    this.grade += number;
  }
}

let collegeStudent = new Student('Arnab', 'Roy', 26, 'A+');
collegeStudent.getBio();

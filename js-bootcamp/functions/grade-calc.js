let calculateGrade = function (score, totalScore) {
  let percent = (score / totalScore) * 100;

  let achievedGrade;
  if (percent >= 90) {
    achievedGrade = 'A';
  } else if (percent >= 80) {
    achievedGrade = 'B';
  } else if (percent >= 70) {
    achievedGrade = 'C';
  } else if (percent >= 60) {
    achievedGrade = 'D';
  } else {
    achievedGrade = 'F';
  }

  return `You got a ${achievedGrade} (${percent}%)!`;
};

console.log(calculateGrade(9, 20));

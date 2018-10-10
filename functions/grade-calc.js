let gradeCalc = function(score, maxScore) {
  let percent = (score / maxScore) * 100;
  let grade = '';

  if (percent >= 90) {
    grade = 'A';
  } else if (percent >= 80) {
    grade = 'B';
  } else if (percent >= 70) {
    grade = 'C';
  } else if (percent >= 60) {
    grade = 'D';
  } else if (percent < 60) {
    grade = 'F';
  }

  return `you got a ${grade} (${percent}%)`
}

let grade = gradeCalc(15, 20);

console.log(grade);

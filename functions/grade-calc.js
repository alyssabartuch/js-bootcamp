let gradeCalc = (score, maxScore) => {
   if (typeof score !== 'number' || typeof maxScore !== 'number') {
      throw Error('Arguments must both be numbers');

   }
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

      return `you got a ${grade} (${percent}%)`;

}


try {
   let grade = gradeCalc(true, 20);
   console.log(grade);

} catch (e) {
   console.log(e.message);
}

var exam_results = {
    Greg: {
      Biology: [90, 75, 23, 60],
      Maths: [100, 80, 30, 45]
    },
    Sarah: {
      Biology: [70, 65, 80, 95],
      Maths: [80, 77, 64, 90]
    },
    Thomas: {
      Biology: [40, 60, 75, 98],
      Maths: [36, 50, 67, 82]
    }
}

const getScore = (student, subject, quarter) => {
  return exam_results[student][subject][quarter];
}

const sortScores = (scores) => {
  let sorted = scores.sort((a,b) => {
    return a - b;
  });

  return sorted;
}

const getMinMaxScore = (student, subject, edge) => {
  let scores = exam_results[student][subject];

  sortedScores = sortScores(scores);
    
  return edge === 'min' ? sortedScores[0] : sortedScores[scores.length - 1];
}

const getMinMaxQuarterScore = (student, subject, edge) => {
  let scores = exam_results[student][subject];
  
  let res = scores.reduce(function(a, b) {
    return edge === 'min' ? Math.min(a, b) : Math.max(a, b);
  });

  return scores.indexOf(res);
}


console.log(`Greg scored in their first Biology exam: ${getScore('Greg', 'Biology', 0)}`);
console.log(`Sarah scored in their last Maths exam: ${getScore('Sarah', 'Maths', 3)}`);
console.log(`The highest score Thomas achieved in Maths throughout the year: ${getMinMaxScore('Thomas', 'Maths', 'max')}`);
console.log(`The quarter that Greg achieved his lowest score in Biology in the year. ${getMinMaxQuarterScore('Greg', 'Biology', 'min')}`);
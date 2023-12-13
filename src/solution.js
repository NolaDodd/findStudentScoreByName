/*
  Write a function that returns a particular student's score when given a name. If no name matches, return `null`.
*/

function findStudentScoreByName(students, name) {
  let studentFind = students.find(student => student.name === name);
  
  if (studentFind){
    return studentFind.score
  } else {
    return null
  } 
}

module.exports = findStudentScoreByName;

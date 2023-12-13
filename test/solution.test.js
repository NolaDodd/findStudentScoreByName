// Write your tests here!
const expect = require("chai").expect
const findStudentScoreByName = require("../src/solution")

describe("findStudentScoreByName", () => {
 const students = [
  { name: "Leo Yeon-Joo", score: 8.9 },
  { name: "Morgan Sutton", score: 7.4 },
  { name: "Natalee Vargas", score: 9.2 },
] 
  
  it("should return the score of a given student name", () => {  
  const expected = students[2].score
  const exampleStudent = "Natalee Vargas"
  const actual = findStudentScoreByName(students, exampleStudent)
    expect(actual).to.equal(expected)
})

  it("should return null if the student name given isn't found", () => {
  const fakeStudent = "Bob Bobby"
  const actual = findStudentScoreByName(students, fakeStudent)
    expect(actual).to.equal(null)
    })
})

var exportData = JSON.parse(localStorage.getItem('exportData'));

var correctAnswers = exportData[0].correctAnswers
var questionCountMax = exportData[0].questionCountMax

var displayedScore = document.getElementById("displayedScore")
var displayedQuestionCountMax = document.getElementById("displayedQuestionCountMax")


displayedScore.innerText = correctAnswers
displayedQuestionCountMax.innerText = questionCountMax

console.log(exportData)
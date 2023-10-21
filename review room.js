var exportData = JSON.parse(localStorage.getItem("exportData"));

var correctAnswers = exportData[0].correctAnswers;
var questionCountMax = exportData[0].questionCountMax;
var mainContents = exportData[0].mainContents

var displayedCardMainContent = document.getElementById("cardMainContent")



for (var content of mainContents){
    displayedCardMainContent.innerHTML += "<br>" + content + "<br>"
}

console.log(mainContents)
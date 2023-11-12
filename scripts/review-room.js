var exportData = JSON.parse(localStorage.getItem("exportData"));
var correctAnswers = exportData[0].correctAnswers;
var questionCountMax = exportData[0].questionCountMax;
var mainContents = exportData[0].mainContents;
var selectedOptions = exportData[0].selectedOptions;
var displayedCardMainContent = document.getElementById("cardMainContent");
var i = 0;

//code belows allow imported mainContents (i.e all the questions and selected options)
// stored in the array as strings to be converted to HTML and thus editable
for (var content of mainContents) {
  let editedMainContent = document.createElement("span");
  editedMainContent.innerHTML = content;
  var heading = editedMainContent.querySelector("#displayedQuestionCountMax");

  // selected options ID cannot be passed directly to querySelector so we convert it to
  // a 'special' type of ASCII, (regular ASCII doesn't work, but chatGPT's ASCII conversion worked)
  function convertIdToAscii(num) {
    let stringifyNum = num.toString();
    var asciiString = "";
    for (var i = 0; i < stringifyNum.length; i++) {
      asciiString += "\\" + "3" + stringifyNum[i];
    }
    return "#" + asciiString;
  }

  // unaswered questions don't have ID's, so we use the try and catch operations
  // you can also use conditionals to ignore any content of mainContent that is unanswered
  try {
    let highlightedBtn = editedMainContent.querySelector(
      convertIdToAscii(selectedOptions[i].option_index)
    );

    if (!selectedOptions[i].isCorrect) {
      highlightedBtn.classList.add("wrong-option");
      heading.innerHTML = questionCountMax + "❌";
    } else {
      highlightedBtn.classList.add("right-option");
      heading.innerHTML = questionCountMax + "✔️";
    }

  } catch (error) {
    heading.innerHTML = questionCountMax + "❌ (unanswered)";
    // you don't need to include '(error)'
    console.log(error);
  }
  displayedCardMainContent.innerHTML +=
    "<br>" + editedMainContent.innerHTML + "<br>";
  i += 1;
}

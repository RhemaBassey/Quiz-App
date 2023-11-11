var exportData = JSON.parse(localStorage.getItem("exportData"));

var correctAnswers = exportData[0].correctAnswers;
var questionCountMax = exportData[0].questionCountMax;
var mainContents = exportData[0].mainContents;
var selectedOptions = exportData[0].selectedOptions;

var displayedCardMainContent = document.getElementById("cardMainContent");

var i = 0;
for (var content of mainContents) {
  let editedMainContent = document.createElement("span");
  editedMainContent.innerHTML = content;

  function convertIdToAscii(num) {
    let stringifyNum = num.toString();
    var asciiString = "";
    for (var i = 0; i < stringifyNum.length; i++) {
      asciiString += "\\" + "3" + stringifyNum[i];
    }
    return "#" + asciiString;
  }


  var heading = editedMainContent.querySelector('#displayedQuestionCountMax')

  try {
    let highlightedBtn = editedMainContent.querySelector(
      convertIdToAscii(selectedOptions[i].option_index)
    );

    if(!selectedOptions[i].isCorrect){
            highlightedBtn.classList.add('wrong-option');
            heading.innerHTML = questionCountMax + "❌"
    }

    else{
        highlightedBtn.classList.add('right-option');
        heading.innerHTML = questionCountMax + "✔️"
    }


    //   console.log(selectedOptions[i].option_index);
    console.log(highlightedBtn.innerText);
  } catch (error) {


            
        console.log('UNANSWERED')
        heading.innerHTML = questionCountMax + "❌ (unanswered)"

  


    // you don't need to include '(error)'
    console.log(error);
  }

  displayedCardMainContent.innerHTML += "<br>" + editedMainContent.innerHTML + "<br>";
  i += 1;
}

// for (var content of mainContents){
//     displayedMainContent.innerHTML = mainContents[option.question_num - 1];

//           console.log(highlightedBtn.innerText);
//     displayedCardMainContent.innerHTML += "<br>" + content + "<br>"
// }

// for (var option of selectedOptions) {
//     if (option.isCorrect) {
//       console.log('Right -> ', option)
//     }

//     if (!option.isCorrect){
//       console.log('Wrong -> ', option)
//     }

//     if (option == ''){
//       console.log('blank')
//     }
//   }

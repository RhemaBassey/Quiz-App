var exportData = JSON.parse(localStorage.getItem("exportData"));

var correctAnswers = exportData[0].correctAnswers;
var questionCountMax = exportData[0].questionCountMax;

var displayedScore = document.getElementById("displayedScore");
var displayedQuestionCountMax = document.getElementById(
  "displayedQuestionCountMax"
);

var comment = document.getElementById("comment");

function starRating() {
  var num = (correctAnswers / questionCountMax) * 5
  var icon = "";
  for (var i = 0; i < 5; i++) {
    if (i<num){  
        icon += "<i class='fa-solid fa-star' style='color: yellow;'></i> "}
    else{
      icon += "<i class='fa-solid fa-star' style='color: grey;'></i> ";
    }
  
  }return icon+'<br><br>';
}
  

// correctAnswers = 0
// questionCountMax = 100

comment.innerHTML = starRating()
if (correctAnswers == questionCountMax) {
  comment.innerHTML += "'Perfect 💯/💯'<br><br>";
} else if (correctAnswers >= questionCountMax * 0.8) {
  comment.innerHTML +="'Excellent 🔥' <br><br>";
} else if (correctAnswers >= questionCountMax * 0.5) {
  comment.innerHTML += "'Good 👍' <br><br>";
} else if (correctAnswers >= questionCountMax * 0.333) {
  comment.innerHTML += "'Fair 🤔' <br><br>";
} else if (correctAnswers > 0) {
  comment.innerHTML += "'Subpar 👎' <br><br>";
} else {
  comment.innerHTML += "'Null (❌_❌)'";
}

displayedScore.innerText = correctAnswers;
displayedQuestionCountMax.innerText = questionCountMax;

console.log(exportData);

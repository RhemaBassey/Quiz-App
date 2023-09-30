var exportData = JSON.parse(localStorage.getItem("exportData"));

var correctAnswers = exportData[0].correctAnswers;
var questionCountMax = exportData[0].questionCountMax;

var displayedScore = document.getElementById("displayedScore");
var displayedQuestionCountMax = document.getElementById(
  "displayedQuestionCountMax"
);

var comment = document.getElementById("comment");

function starRating(num) {
  var icon = "";
  for (var i = 0; i < num; i++) {
    icon += "<i class='fa-solid fa-star' style='color: yellow;'></i> ";
  }
  return icon+'<br><br>';
}

if (correctAnswers == questionCountMax) {
  comment.innerHTML =
    starRating((correctAnswers / questionCountMax) * 5) + "'Perfect 💯/💯'";
} else if (correctAnswers >= questionCountMax * 0.8) {
  comment.innerHTML =
    starRating((correctAnswers / questionCountMax) * 5) + "'Excellent 🔥'";
} else if (correctAnswers >= questionCountMax * 0.5) {
  comment.innerHTML =
    starRating((correctAnswers / questionCountMax) * 5) + "'Good 👍'";
} else if (correctAnswers >= questionCountMax * 0.333) {
  comment.innerHTML =
    starRating((correctAnswers / questionCountMax) * 5) + "<br><br>'Fair 🤔'";
} else if (correctAnswers > 0) {
  comment.innerHTML =
    starRating((correctAnswers / questionCountMax) * 5) + "'Subpar 👎'";
} else {
  comment.innerHTML = "'Null (❌_❌)'";
}

displayedScore.innerText = correctAnswers;
displayedQuestionCountMax.innerText = questionCountMax;

console.log(exportData);

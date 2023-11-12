import { settings } from "../settings.js";
var exportData = [];
var subject = JSON.parse(localStorage.getItem("subject"));
var questionsPath = `../quiz-questions/${subject}.js`;
// NOTE: try not to use localStorage for questions  , use import instead as it don't permanently hold memory
// var questions = JSON.parse(localStorage.getItem(subject+"Questions"));
var body = document.getElementsByTagName("body")[0];

import(questionsPath).then((module) => {
  function myFunction(questions) {
    var maxAllowedQuestions = settings.maxAllowedQuestions; //number of questions to be asked on any given quiz
    var randomizeQuestionOrder = settings.randomizeQuestionOrder;
    var randomizeQuestionOptions = settings.randomizeQuestionOptions;

    if (randomizeQuestionOptions == true) {
      for (var i in questions) {
        randomize(questions[i].options);
      }
    }
    if (randomizeQuestionOrder == true) {
      for (var i in questions) {
        randomize(questions);
      }
    }
    questions = questions.slice(0, maxAllowedQuestions);

    var title = document.getElementsByTagName("title")[0];
    var heading = document.getElementsByClassName("heading")[0];
    var previousBtn = document.getElementById("previousBtn");
    var nextBtn = document.getElementById("nextBtn");
    var mainContent = document.getElementById("mainContent"); // everything in the card except the buttons
    var mainContents = []; // collection of mainContent which will be exported and used by the review-room.html
    var selectedOptions = [];

    var questionCount = 1;
    var questionCountMax = questions.length;
    var num = document.getElementById("num");
    var displayedQuestion = document.getElementById("displayedQuestion");
    var displayedQuestionCount = document.getElementById(
      "displayedQuestionCount"
    );
    var displayedQuestionCountMax = document.getElementById(
      "displayedQuestionCountMax"
    );
    var displayedOptions = document.getElementById("displayedOptions");
    var optionBtnClicked = false;

    title.innerText = "Quiz: " + subject + " Quiz";
    heading.innerText = subject + " Quiz";
    displayedQuestionCount.innerText = questionCount;
    displayedQuestionCountMax.innerText = questionCountMax;
    displayedQuestion.innerText = questions[questionCount - 1].question;
    displayedQuestionCountMax.innerHTML = questionCountMax;
    for (var i in questions) {
      selectedOptions.push("");
      mainContents.push("");
    }
    previousBtn.classList.add("disabled");
    previousBtn.addEventListener("click", function () {
      previousPage();
    });
    nextBtn.addEventListener("click", function () {
      submitBtn(true);

      nextPage();
    });

    addOptions(questions);

    // extra functions bel
    function randomize(array) {
      return array.sort(() => Math.random() - 0.5);
    }
    // adds a nice fading effect when clicking on the option buttons
    function fadingEffect(target, delay) {
      if (questionCount < questionCountMax) {
        target.classList.add("fade-in");
        setTimeout(function () {
          target.classList.remove("fade-in");
        }, delay);
      }
    }
    function addOptions(questions) {
      displayedOptions.innerHTML = "";
      var n = 0;
      var fadeDelay = 500;
      for (var option of questions[questionCount - 1].options) {
        var optionBtn = document.createElement("button");
        var optionBtns = document.getElementsByClassName("options-btn");

        optionBtn.id = n;
        optionBtn.className = "options-btn hoverable1";

        optionBtn.innerHTML = "<li>" + option + "</li>";

        // display correct answer by default
        if (optionBtn.innerText == questions[questionCount - 1].answer) {
          optionBtn.classList.add("correct-option");
        }

        optionBtn.addEventListener("click", function () {
          fadingEffect(mainContent, fadeDelay);
          var selectedOptionsDetails = {
            question_num: questionCount,
            option_index: this.id,
            text: this.innerText,
            isCorrect: this.innerText == questions[questionCount - 1].answer,
          };

          //removes other highlights
          for (var optionBtn of optionBtns) {
            optionBtn.classList.remove("selected-btn");
          }

          //highlight selected btn
          this.classList.add("selected-btn");

          //appends clicked option button in their appropriate slot in the selectedOptions list
          selectedOptions[selectedOptionsDetails.question_num - 1] =
            selectedOptionsDetails;

          var submitDelay;

          if (questionCount == questionCountMax) {
            submitDelay = 0;
          } else {
            submitDelay = fadeDelay;
          }

          // to make multiclicks act as single clicks
          // option button ceases 'next-page' operability right after being click
          if (optionBtnClicked == false) {
            optionBtnClicked = true;
            // delay set for submit btn so it doesn't appear before fadeDelay transition is over
            setTimeout(function () {
              submitBtn(false);
            }, submitDelay);
            nextPage(fadeDelay);
          }
        });
        optionBtnClicked = false; //options button becomes operable only after going to next page,

        displayedOptions.appendChild(optionBtn);

        // making selected button permanently highlighted, if an option detail is part of selected options
        (function (index) {
          var id = index;
          var optionDetails = {
            question_num: questionCount,
            option_index: id,
          };

          if (
            selectedOptions.some(
              // searches and matches previously selected options to ones generated on the display
              (option) =>
                option.question_num == optionDetails.question_num &&
                option.option_index == optionDetails.option_index
            )
          ) {
            var highlightBtn = document.getElementById(index);
            highlightBtn.classList.add("selected-btn");
          }
        })(n);

        n += 1;
      }
    }

    function scrollToTop() {
      // window.scrollTo(0, 0); // start from the top of the page, after the fade effect... not really needed I guess.
      mainContent.scrollTo({
        top: 0,
        left: 0,
        behaviour: "smooth",
      }); // start from the top of the scrollable content in the card, after the fade effect
    }

    function previousPage() {
      if (questionCount > 1) {
        questionCount--;
        // removes green-highlights of 'next' button in the event going to previous page after a full questions completion.
        nextBtn.classList.remove("submit-green-btn");
        //removes submit button styling, such as left-align
        nextBtn.classList.remove("submit-btn");
        // disables 'previous' button at page 1
        if (questionCount == 1) {
          previousBtn.classList.add("disabled");
        }
        nextBtn.innerHTML = "<i class='fa-solid fa-arrow-right'></i>";
        displayedQuestionCount.innerText = questionCount;
        displayedQuestion.innerText = questions[questionCount - 1].question;
        num.start = questionCount;

        addOptions(questions);
      } else {
        previousBtn.classList.add("disabled");
      }

      scrollToTop();
    }

    function nextPage(delay) {
      mainContents[questionCount - 1] = mainContent.innerHTML;
      // setTimeout to uses arg 'delay' to delay function response, in instances where 'fadeEffect' is used
      // this is to prevent it awkwardly going to the nextPage, before it begins to fade
      setTimeout(function () {
        if (questionCount < questionCountMax) {
          questionCount++;

          previousBtn.classList.remove("disabled");
          displayedQuestionCount.innerText = questionCount;
          num.start = questionCount;
          displayedQuestion.innerText = questions[questionCount - 1].question;
          addOptions(questions);
          scrollToTop();
        }

      }, delay);
    }

    function dialogBox(unansweredQuestions) {
      // Code to create a custom dialog box with it's functionality upon submission
      var customDialog = document.createElement("span");
      var heading = document.createElement("h2");
      var customDialogMessage = document.createElement("p");
      customDialogMessage.id = "customDialogMessage";
      var buttonContainer = document.createElement("div");
      var yesButton = document.createElement("button");
      var noButton = document.createElement("button");

      window.scrollTo({
        top: 100, // Adjust this value to the desired vertical position
        left: 0,
        behavior: "smooth",
      });
      customDialog.id = "customDialog";
      customDialog.className = "custom-dialog";
      heading.innerText = "Submit?";
      buttonContainer.className = "button-container";
      yesButton.className = "btn-basic yes-btn";
      yesButton.innerText = "YES";
      yesButton.onclick = handleYes;
      noButton.className = "btn-basic no-btn";
      noButton.innerText = "NO";
      noButton.onclick = handleNo;

      buttonContainer.appendChild(yesButton);
      buttonContainer.appendChild(noButton);
      customDialog.appendChild(heading);
      customDialog.appendChild(customDialogMessage);
      customDialog.appendChild(buttonContainer);
      body.appendChild(customDialog);

      var displayedCustomDialogMessage = document.getElementById(
        "customDialogMessage"
      );

      if (unansweredQuestions == 0) {
        displayedCustomDialogMessage.innerText =
          "Are you sure you want to submit?";
        displayedCustomDialogMessage.style.color = "#005e7e";
      } else if (unansweredQuestions == 1) {
        displayedCustomDialogMessage.innerText =
          "You have 1 unanswered question!\nSubmit?";
      } else if (unansweredQuestions > 1) {
        displayedCustomDialogMessage.innerText = `You have ${unansweredQuestions} unanswered questions!\nSubmit?`;
      }

      // hides custom dialog box if you click area outside both the dialog box and submit button
      // Exclude the submit button itself >> '!nextBtn.contains(event.target)'
      // otherwise it registers it as external to the dialog-box and auto closes the instance it is clicked
      document.addEventListener("click", function (event) {
        if (
          !document.getElementById("customDialog").contains(event.target) &&
          !nextBtn.contains(event.target)
        ) {
          hideCustomDialog();
        }
      });

      //prompts you to answer all questions
      function showCustomDialog() {
        var overlay = document.getElementById("overlay");

        overlay.style.display = "block";
        document.getElementById("customDialog").style.display = "block";
      }

      function hideCustomDialog() {
        overlay.style.display = "none";
        document.getElementById("customDialog").style.display = "none";
      }

      function handleYes() {
        location.href = "./submission-room.html";
        hideCustomDialog();
      }

      function handleNo() {
        hideCustomDialog();
      }

      showCustomDialog();
    }

    function submitBtn(isSubmitBtn) {
      mainContents[questionCount - 1] = mainContent.innerHTML;
      // The condition below triggeres on the second to the last page and makes the next page generated, have a designed submit button
      if (questionCount >= questionCountMax - 1) {
        nextBtn.innerHTML = "SUBMIT";
        nextBtn.classList.add("submit-btn");

        // turn submit button green
        if (selectedOptions.includes("") == false) {
          nextBtn.classList.add("submit-green-btn");
        }
        // When on the last page submit btn isSubmitBtn prevents optionBtn (which has submitBtn embedded) from triggering,
        //only nextBtn which is embedded with it can trigger submission and display the submit prompt on the last page.
        if (questionCount == questionCountMax && isSubmitBtn == true) {
          var correctAnswers = 0;
          var unanswered = 0;
          for (var option of selectedOptions) {
            // calculates correct answers
            if (option.isCorrect) {
              correctAnswers += 1;
            }
            // calculates unaswerd answers
            if (option == "") {
              unanswered += 1;
            }
          }

          // display the submission dialog box
          dialogBox(unanswered);

          exportData = [
            {
              questionCountMax: questionCountMax,
              correctAnswers: correctAnswers,
              mainContents: mainContents,
              selectedOptions: selectedOptions,
            },
          ];
          localStorage.setItem("exportData", JSON.stringify(exportData));
        }
      }
    }
  }

  // when dealing with random, you can't export directly as you are sending
  // a 'Promise' from 'random.js' which can't be imported directly
  if (subject.toLowerCase() == "random") {
    module.questions.then((questions) => {
      document.addEventListener("DOMContentLoaded", myFunction(questions));
    });
  } else {
    var questions = module.questions;
    document.addEventListener("DOMContentLoaded", myFunction(questions));
  }
});

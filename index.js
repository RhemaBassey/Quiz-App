document.addEventListener("DOMContentLoaded", function () {
  var previousBtn = document.getElementById("previousBtn");
  var nextBtn = document.getElementById("nextBtn");

  var questions = [
    {
      question: "Q1",
      options: ["Q1 OP1", "Q1 OP2", "Q1 OP3", "Q1 OP4"],
    },
    {
      question: "Q2",
      options: ["Q2 OP1", "Q2 OP2"],
    },
    {
      question: "Q3",
      options: ["Q3 OP1", "Q3 OP2", "Q3 OP3", "Q3 OP4"],
    },
    {
      question: "Q4",
      options: ["Q4 OP1", "Q4 OP2", "Q4 OP3"],
    },
    {
      question: "Q5",
      options: ["Q5 OP1", "Q5 OP2", "Q5 OP3", "Q5 OP4", "Q5 OP5"],
    },
  ];

  var selectedOptions = [];
  for (var i in questions){
    selectedOptions.push('')
  }
  console.log(selectedOptions)

  var randomizeQuestions = true;

  if (randomizeQuestions == true) {
    for (var i in questions) {
      questions[i].options.sort(() => Math.random() - 0.5); //this will randomize the questions
    }
  }

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

  displayedQuestionCount.innerText = questionCount;
  displayedQuestionCountMax.innerText = questionCountMax;
  displayedQuestion.innerText = questions[questionCount - 1].question;

  function addOptions(questions) {
    displayedOptions.innerHTML = "";
    var n = 0;
    for (option of questions[questionCount - 1].options) {
      var optionBtn = document.createElement("button");
      var optionBtns = document.getElementsByClassName("options-btn")


      optionBtn.id = n;
      optionBtn.className = "options-btn hoverable1";

      optionBtn.innerHTML = "<li>" + option + "</li>";



      // if (selectedOptions.some(n === selectedOptionsDetails.question_num && optionBtn.id === selectedOptionsDetails.option_index)) {
      //   this.classList.add("selected-btn");
      // }




      optionBtn.addEventListener("click", function () {


        
        
        var selectedOptionsDetails = {
          question_num: questionCount,
          option_index: this.id,
        };


        //removes other highlights
        for(var optionBtn of optionBtns){
          optionBtn.classList.remove("selected-btn")
        }

        //highlight selected btn
        this.classList.add("selected-btn")


        
        // if (selectedOptions.some(option => option.question_num === selectedOptionsDetails.question_num && option.option_index === selectedOptionsDetails.option_index)) {
        //   this.classList.add("selected-btn");
        // }

        selectedOptions[selectedOptionsDetails.question_num-1] = selectedOptionsDetails;
        console.log(selectedOptions)

     


        nextPage();
      });

      displayedOptions.appendChild(optionBtn);

      (function(index){
        id = index
        var optionDetails = {
          question_num: questionCount,
          option_index: id,
        };


        if (selectedOptions.some(option => option.question_num == optionDetails.question_num && option.option_index == optionDetails.option_index)) {
          var highlightBtn = document.getElementById(index)
          highlightBtn.classList.add("selected-btn");
        }

      })(n)

      n += 1;
    }

    
    for(var i=0; i< questions[questionCount - 1].options.length; i++){

    }

    // for(var i; i< questions[questionCount - 1].options.length; i++){
      
    //   (function(index){
    //     var selectedOptionsDetails = {
    //       question_num: questionCount,
    //       option_index: index,
    //     };
    //     console.log(index)
    //   })
    // }
  }

  function previousPage(delay) {
    if (questionCount > 1) {
      questionCount--;

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
  }

  function nextPage(delay) {
    if (questionCount < questionCountMax) {
      questionCount++;
      if (questionCount == questionCountMax) {
        nextBtn.innerHTML = "SUBMIT";
      }
      previousBtn.classList.remove("disabled");
      displayedQuestionCount.innerText = questionCount;
      num.start = questionCount;
      displayedQuestion.innerText = questions[questionCount - 1].question;
      addOptions(questions);
    }
  }

  addOptions(questions);

  previousBtn.classList.add("disabled");

  previousBtn.addEventListener("click", function () {
    previousPage();
  });

  nextBtn.addEventListener("click", function () {
    nextPage();
  });
});

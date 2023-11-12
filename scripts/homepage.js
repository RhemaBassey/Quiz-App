import { settings } from "../settings.js";
document.addEventListener("DOMContentLoaded", function () {
  var displayedSubjects = settings.displayedSubjects
  var subjectsContainer = document.getElementById("subjectsContainer");
  var subjects = settings.subjects
  var regularSubjects = displayedSubjects.length- countOccurrences(displayedSubjects, 'random')
console.log(regularSubjects)

  // creates a card for each subject
  for (var displayedSubject of displayedSubjects) {
    for (var subject of subjects){
      var title = subject.title
      var text = subject.text
      if (lowerCase(title) == lowerCase(displayedSubject)) {
        var subjectCard = document.createElement("div");
        var subjectCardTitle = document.createElement("h2");
        var subjectCardImage = document.createElement("img");
        var subjectCardText = document.createElement("p");
        var imageName = lowerCase(title) + "-poster-image.jpg";
  
        subjectCardImage.className = "subjectcardimage";
        subjectCardImage.src = subject.imageSrc;
        subjectCardImage.alt = imageName;
        subjectCardTitle.innerText = title;
        subjectCardText.innerText = text;
        subjectCard.className = "card";
  
        subjectCard.appendChild(subjectCardTitle);
        subjectCard.appendChild(subjectCardImage);
        subjectCard.appendChild(subjectCardText);
        subjectsContainer.appendChild(subjectCard);
  
        subjectCard.addEventListener("click", function () {
          var selectedSubject = lowerCase(this.querySelector('h2').innerText)

          if (selectedSubject == "random" && regularSubjects <= 1){
            dialogBox()
          }


          else{
                      // Define the URL you want to navigate to
          var destinationURL = "quiz-room.html";
  
          // Redirect to the specified URL
          window.location.href = destinationURL;
  
          localStorage.setItem(
            "subject",
            JSON.stringify(this.querySelector("h2").innerText)
          );
          }

        });
      }


    }

  }

  function lowerCase(string){
    return string.toLowerCase()
  }

  //it ignores what the case is and counts occurence of a target string in a list
  function countOccurrences(arr, target) {
    const targetLowerCase = lowerCase(target);
    
    return arr.reduce((count, item) => {
      const itemLowerCase = lowerCase(item);
      return itemLowerCase === targetLowerCase ? count + 1 : count;
    }, 0);
  }

  // dialog box pop-up 
  function dialogBox() {
    window.scrollTo({
      top:0,
      left:0,
      behaviour:'smooth'
    })
    // Code to create a custom dialog box with it's functionality upon submission
    var customDialog = document.createElement("span");
    var customDialogMessage = document.createElement("p");
    customDialogMessage.id = "customDialogMessage";
    var buttonContainer = document.createElement("div");
    var cancelButton = document.createElement("button");
    var body = document.getElementsByTagName("body")[0];
    var heading = document.createElement("h2")


    customDialog.id = "customDialog";
    customDialog.className = "custom-dialog";
    buttonContainer.className = "button-container";
    cancelButton.className = "btn-basic no-btn";
    cancelButton.innerText = "CANCEL";
    cancelButton.onclick = handleCancel;
    heading.innerText = "Not Enough Subjects"

    customDialog.appendChild(heading)
    buttonContainer.appendChild(cancelButton);
    customDialog.appendChild(customDialogMessage);
    customDialog.appendChild(buttonContainer);

    body.appendChild(customDialog);

    var displayedCustomDialogMessage = document.getElementById(
      "customDialogMessage"
    );


      displayedCustomDialogMessage.innerText = "You need to have more than 1 regular subject to use 'Random' quiz mode";
      displayedCustomDialogMessage.style.color = "indigo"


    // hides custom dialog box if you click area outside both the dialog box and subjectsContainer area in the homepage
    document.addEventListener("click", function (event) {
      if (
        !document.getElementById("customDialog").contains(event.target) 
      && !this.querySelector('#subjectsContainer').contains(event.target)) {
        console.log(this)
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

    function handleCancel() {
      hideCustomDialog();
    }

    showCustomDialog();
  }
  

});

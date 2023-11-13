The quiz app is a place for you to test out your knowledge on a range of subjects, whether using the default quiz questions or your own.

Go to 'settings.js' to set the number of questions you want to answer in the 'maxAllowedQuestions' variable, 
and use the 'displayedSubjects' array to  include/exclude the subjects to be quizzed on, which is useful when doing the random quiz mode.


Q & As for each subject are shown it the 'quiz-questions' folder.

To add a new subject:   
    - go to settings.js
    - include the subject in the 'subjects' array following the custom format
    - include the subject title to the 'displayedSubjects' array 
    - go to quiz-questions folder. Create a new JS file, named after your subject, and include the questions and answers of your subject following the custom format for regular subjects. (Random isn't considered a regular subject btw).
    - go to pages folder and load the hompage.html file
    - select your subject and take the quiz.





var questions = [
    {
      question: "Maths Q1",
      options: ["Q1 OP1", "Q1 OP2", "Q1 OP3", "Q1 OP4"],
      answer: "Q1 OP1",
    },
    {
      question: "Maths Q2",
      options: ["Q2 OP1", "Q2 OP2"],
      answer: "Q2 OP2",
    },
    {
      question: "Maths Q3",
      options: ["Q3 OP1", "Q3 OP2", "Q3 OP3", "Q3 OP4"],
      answer: "Q3 OP3",
    },
    {
      question: "Maths Q4",
      options: ["Q4 OP1", "Q4 OP2", "Q4 OP3"],
      answer: "Q4 OP2",
    },
    {
      question: "Maths Q5",
      options: ["Q5 OP1", "Q5 OP2", "Q5 OP3", "Q5 OP4", "Q5 OP5"],
      answer: "Q5 OP1",
    },
  ];

  localStorage.setItem("MathsQuestions", JSON.stringify(questions))
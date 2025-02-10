const questions = [
      { question: "What is the SI unit of Force?", options: ["Newton", "Joule", "Pascal", "Watt"], correctAnswer: 0 },
      { question: "Which of the following is not a vector quantity?", options: ["Velocity", "Acceleration", "Time", "Force"], correctAnswer: 2 },
      { question: "What is the dimensional formula of Force?", options: ["M L T^-2", "M L T", "M^2 L T^-2", "M L^2 T^-2"], correctAnswer: 0 },
      { question: "Which is the correct dimensional formula for the gravitational constant?", options: ["M^-1 L^3 T^-2", "M L^2 T^-3", "M L T^-2", "M^2 L T^-3"], correctAnswer: 0 },
      { question: "What is the SI unit of Work?", options: ["Joule", "Newton", "Watt", "Pascal"], correctAnswer: 0 },
      { question: "Which of the following is a scalar quantity?", options: ["Velocity", "Speed", "Force", "Acceleration"], correctAnswer: 1 },
      { question: "What is the unit of energy?", options: ["Joule", "Newton", "Meter", "Kilogram"], correctAnswer: 0 },
      { question: "The dimension of velocity is?", options: ["M T^-1", "M T", "M^-1 T^-2", "M^2 T^-1"], correctAnswer: 0 },
      { question: "What is the formula for Kinetic Energy?", options: ["1/2mv^2", "mv^2", "mgh", "1/2m^2v"], correctAnswer: 0 },
      { question: "The dimension of power is?", options: ["M L^2 T^-3", "M L T^-2", "M L^2 T^-1", "M^2 L T^-3"], correctAnswer: 0 },
      { question: "What is the SI unit of Pressure?", options: ["Pa", "N/m²", "J/m", "N/m"], correctAnswer: 0 },
      { question: "What is the dimensional formula for frequency?", options: ["T^-1", "M T^-1", "M^2 L T^-3", "M L T^-2"], correctAnswer: 0 },
      { question: "What is the SI unit of Electric Current?", options: ["Ampere", "Volt", "Coulomb", "Ohm"], correctAnswer: 0 },
      { question: "What is the unit of Capacitance?", options: ["Farad", "Coulomb", "Volt", "Ampere"], correctAnswer: 0 },
      { question: "What is the unit of Electric Resistance?", options: ["Ohm", "Volt", "Ampere", "Watt"], correctAnswer: 0 },
      { question: "Which of the following is the unit of magnetic field?", options: ["Tesla", "Newton", "Joule", "Coulomb"], correctAnswer: 0 },
      { question: "What is the dimensional formula?", options: ["M^-1 L^3 T^-2", "M L^2 T^-3", "M L T^-2", "M^2 L T^-3"], correctAnswer: 0 },
      { question: "What is the dimensionless quantity?", options: ["Angle", "Force", "Pressure", "Work"], correctAnswer: 0 },
      { question: "The SI unit of Temperature is?", options: ["Kelvin", "Celsius", "Fahrenheit", "Joule"], correctAnswer: 0 },
      { question: "What is the formula for Energy?", options: ["Work/time", "Force × Distance", "Mass × Acceleration", "Mass × Velocity"], correctAnswer: 0 },
      { question: "What is the dimension of Work?", options: ["M L^2 T^-2", "M L^3 T^-1", "M T^2", "M^2 L T^-3"], correctAnswer: 0 },
      { question: "The unit of frequency is?", options: ["Hz", "N", "m/s", "Joule"], correctAnswer: 0 },
      { question: "What is the formula for Power?", options: ["Work/time", "Force × Distance", "Mass × Acceleration", "Mass × Velocity"], correctAnswer: 0 },
      { question: "What is the SI unit of Electric Current?", options: ["Ampere", "Volt", "Coulomb", "Ohm"], correctAnswer: 0 },
      { question: "What is the unit of Capacitance?", options: ["Farad", "Coulomb", "Volt", "Ampere"], correctAnswer: 0 },
      { question: "What is the dimensional formula for frequency?", options: ["T^-1", "M T^-1", "M^2 L T^-3", "M L T^-2"], correctAnswer: 0 },
      { question: "The unit of magnetic field is?", options: ["Tesla", "Newton", "Joule", "Coulomb"], correctAnswer: 0 },
      { question: "The SI unit of work is?", options: ["Joule", "Newton", "Meter", "Watt"], correctAnswer: 0 },
      { question: "What is the formula for Kinetic Energy?", options: ["1/2mv^2", "mv^2", "mgh", "1/2m^2v"], correctAnswer: 0 },
      { question: "What is the dimensional formula of Force?", options: ["M L T^-2", "M L T", "M^2 L T^-2", "M L^2 T^-2"], correctAnswer: 0 },
      { question: "Which of the following is not a vector quantity?", options: ["Velocity", "Acceleration", "Time", "Force"], correctAnswer: 2 },
      { question: "What is the SI unit of Force?", options: ["Newton", "Joule", "Pascal", "Watt"], correctAnswer: 0 },
      { question: "What is the formula for Kinetic Energy?", options: ["1/2mv^2", "mv^2", "mgh", "1/2m^2v"], correctAnswer: 0 },
      { question: "The dimension of velocity is?", options: ["M T^-1", "M T", "M^-1 T^-2", "M^2 T^-1"], correctAnswer: 0 },
      { question: "What is the unit of energy?", options: ["Joule", "Newton", "Meter", "Kilogram"], correctAnswer: 0 },
      { question: "The dimension of power is?", options: ["M L^2 T^-3", "M L T^-2", "M L^2 T^-1", "M^2 L T^-3"], correctAnswer: 0 },
      { question: "What is the SI unit of Pressure?", options: ["Pa", "N/m²", "J/m", "N/m"], correctAnswer: 0 },
      { question: "What is the dimensional formula for frequency?", options: ["T^-1", "M T^-1", "M^2 L T^-3", "M L T^-2"], correctAnswer: 0 },
      { question: "What is the SI unit of Electric Current?", options: ["Ampere", "Volt", "Coulomb", "Ohm"], correctAnswer: 0 }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 60;
  let timer;
  let correctAnswers = 0;
  let incorrectAnswers = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit-btn");
  const timerElement = document.getElementById("time-left");
  const resultElement = document.getElementById("result");
  const scoreElement = document.getElementById("score");
  const correctElement = document.getElementById("correct");
  const incorrectElement = document.getElementById("incorrect");
  const progressElement = document.getElementById("progress");
  
  function loadQuestion() {
      const currentQuestion = questions[currentQuestionIndex];
      questionElement.innerText = currentQuestion.question;
      optionsElement.innerHTML = currentQuestion.options
          .map((option, index) => `<button class="option" data-index="${index}">${option}</button>`)
          .join("");
      startTimer();
      updateProgress();
  }
  
  function startTimer() {
      timeLeft = 60;
      timer = setInterval(() => {
          timeLeft--;
          timerElement.innerText = `${timeLeft}s`;
          if (timeLeft <= 0) {
              clearInterval(timer);
              submitAnswer();
          }
      }, 1000);
  }
  
  function submitAnswer() {
      clearInterval(timer);
      const selectedOption = document.querySelector(".option.selected");
      if (selectedOption && selectedOption.dataset.index == questions[currentQuestionIndex].correctAnswer) {
          score++;
          correctAnswers++;
      } else {
          incorrectAnswers++;
      }
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
          loadQuestion();
      } else {
          showResult();
      }
  }
  
  function showResult() {
      questionElement.style.display = "none";
      optionsElement.style.display = "none";
      submitButton.style.display = "none";
      resultElement.style.display = "block";
      scoreElement.innerText = score;
      correctElement.innerText = correctAnswers;
      incorrectElement.innerText = incorrectAnswers;
  }
  
  function updateProgress() {
      const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
      progressElement.style.width = `${progress}%`;
  }
  
  optionsElement.addEventListener("click", (e) => {
      if (e.target.classList.contains("option")) {
          document.querySelectorAll(".option").forEach(option => option.classList.remove("selected"));
          e.target.classList.add("selected");
          submitButton.disabled = false;
      }
  });
  
  submitButton.addEventListener("click", submitAnswer);
  
  document.getElementById("retry-btn").addEventListener("click", () => {
      location.reload();
  });
  
  loadQuestion();
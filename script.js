const quizData = [
	    {
	        question: "1. The percentage increase in the area of a rectangle, if each of its sides is increased by 20% is ?",
	        a: "32",
	        b: "34",
	        c: "42",
	        d: "44",
	        correct: "d",
	    },
	    {
	        question: "2. What will be the cost of gardening 1-meter boundary around a rectangular plot having a perimeter of 340 meters at the rate of Rs. 10 per square meter?",
	        a: "3430",
	        b: "3440",
	        c: "3450",
	        d: "3670",
	        correct: "b",
	    },
	    {
	        question: "3. The sides of a rectangle are in the ratio of 6: 5 and its area is 1331 sq.m. Find the perimeter of a rectangle.",
	        a: "121 m",
	        b: "120 m",
	        c: "110 m",
	        d: "None of the above",
	        correct: "a",
	    },
	    {
	        question: "4. The sides of a rectangle are in the ratio 4:3 and its area is 972sq.m find the perimeter of the rectangle?",
	        a: "120 m",
	        b: "126 m",
	        c: "150 m",
	        d: "110 m",
	        correct: "b",
	    },
	    {
	        question: "5. The difference between the length and breadth of a rectangle is 23 m. If its perimeter is 206 m, then its area is?",
	        a: "2100",
	        b: "2867",
	        c: "2345",
	        d: "2520",
	        correct: "d",
	    },
	

	

	];
	

	const quiz= document.getElementById('quiz')
	const answerEls = document.querySelectorAll('.answer')
	const questionEl = document.getElementById('question')
	const a_text = document.getElementById('a_text')
	const b_text = document.getElementById('b_text')
	const c_text = document.getElementById('c_text')
	const d_text = document.getElementById('d_text')
	const submitBtn = document.getElementById('submit')

	let currentQuiz = 0
	let score = 0
	
	loadQuiz()
	
	function loadQuiz() {
	
	    deselectAnswers()
	
	    const currentQuizData = quizData[currentQuiz]
	
	    questionEl.innerText = currentQuizData.question
	    a_text.innerText = currentQuizData.a
	    b_text.innerText = currentQuizData.b
	    c_text.innerText = currentQuizData.c
	    d_text.innerText = currentQuizData.d
	}
	
	function deselectAnswers() {
	    answerEls.forEach(answerEl => answerEl.checked = false)
	}
	

	function getSelected() {
	    let answer
	    answerEls.forEach(answerEl => {
	        if(answerEl.checked) {
	            answer = answerEl.id
	        }
	    })
	    return answer
	}
	
	submitBtn.addEventListener('click', () => {
	    const answer = getSelected()
	    if(answer) {
	       if(answer === quizData[currentQuiz].correct) {
	           score++
	       }
	
	       currentQuiz++
	
	       if(currentQuiz < quizData.length) {
	           loadQuiz()
	       } else {
	           quiz.innerHTML = `
	           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
	           <button onclick="location.reload()">Reload</button>
	           `
	       }
	    }
	})
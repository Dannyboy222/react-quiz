import React, { Component } from 'react';
import Question from './Questions';
import Answer from './Answers';
import './Quiz.css';

export default class Quiz extends Component {
	// initiating the local state
	state = {
		quiestions: {
			1: 'Prince Harry is taller than Prince William?',
			2: 'What is the capital of Greece?',
			3: 'What planet gave birth to Superman?',
			4: 'The star sign Aquarius is represented by a tiger?',
			5: 'Meryl Streep has won two Academy Awards?',
			6: 'Marrakesh is the capital of Morocco?',
			7: 'Idina Menzel sings Let it go 20 times in Let It Go from Frozen?',
			8: 'Waterloo has the greatest number of tube platforms in London?',
			9: 'M&M stands for Mars and Moordale?',
			10: 'Gin is typically included in a Long Island Iced Tea?',
		},
		answers: {
			1: {
				1: 'True',
				2: 'False',
			},
			2: {
				1: 'True',
				2: 'False',
			},
			3: {
				1: 'True',
				2: 'False',
			},
			4: {
				1: 'True',
				2: 'False',
			},
			5: {
				1: 'True',
				2: 'False',
			},
			6: {
				1: 'True',
				2: 'False',
			},
			7: {
				1: 'True',
				2: 'False',
			},
			8: {
				1: 'True',
				2: 'False',
			},
			9: {
				1: 'True',
				2: 'False',
			},
			10: {
				1: 'True',
				2: 'False',
			},
		},
		correctAnswers: {
			1: '2',
			2: '1',
			3: '1',
			4: '2',
			5: '1',
			6: '2',
			7: '1',
			8: '2',
			9: '1',
			10: '2',
		},
		correctAnswer: 0,
		clickedAnswer: 0,
		step: 1,
		score: 0,
	};

	// the method that checks the correct answer
	checkAnswer = (answer) => {
		const { correctAnswers, step, score } = this.state;
		if (answer === correctAnswers[step]) {
			this.setState({
				score: score + 1,
				correctAnswer: correctAnswers[step],
				clickedAnswer: answer,
			});
		} else {
			this.setState({
				correctAnswer: 0,
				clickedAnswer: answer,
			});
		}
	};

	// method to move to the next question
	nextStep = (step) => {
		this.setState({
			step: step + 1,
			correctAnswer: 0,
			clickedAnswer: 0,
		});
	};

	render() {
		let { quiestions, answers, correctAnswer, clickedAnswer, step, score } =
			this.state;
		return (
			<div className="Content">
				{step <= Object.keys(quiestions).length ? (
					<>
						<Question question={quiestions[step]} />
						<Answer
							answer={answers[step]}
							step={step}
							checkAnswer={this.checkAnswer}
							correctAnswer={correctAnswer}
							clickedAnswer={clickedAnswer}
						/>
						<button
							className="NextStep"
							disabled={
								clickedAnswer && Object.keys(quiestions).length >= step
									? false
									: true
							}
							onClick={() => this.nextStep(step)}
						>
							Next
						</button>
					</>
				) : (
					<div className="finalPage">
						<h1>You have completed the quiz!</h1>
						<p>
							Your score is: {score} of {Object.keys(quiestions).length}
						</p>
						<p>Thank you!</p>
					</div>
				)}
			</div>
		);
	}
}

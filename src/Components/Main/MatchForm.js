import React from 'react';
import './MatchForm.css'


export default class MatchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: [
                {
                    id: 1,
                    questionTitle: 'where is capital of franc?',
                    answerOption: [
                        { id: 1, answer: 'a', isCorrect: false },
                        { id: 2, answer: 'b', isCorrect: true },
                        { id: 3, answer: 'c', isCorrect: false },
                        { id: 4, answer: 'd', isCorrect: false }
                    ]
                },
                {
                    id: 2,
                    questionTitle: ' where is tehran?',
                    answerOption: [
                        { id: 5, answer: 'ta', isCorrect: false },
                        { id: 6, answer: 'b', isCorrect: false },
                        { id: 7, answer: 'c', isCorrect: false },
                        { id: 8, answer: 'd', isCorrect: true }
                    ]
                },
                {
                    id: 3,
                    questionTitle: ' is capital of franc?',
                    answerOption: [
                        { id: 9, answer: 'e', isCorrect: false },
                        { id: 10, answer: 'f', isCorrect: false },
                        { id: 11, answer: 'g', isCorrect: true },
                        { id: 12, answer: 't', isCorrect: false }
                    ]
                },
            ],
            current_question: 0,
            score: 0,
            showScore: false

        }


    }

    answerHandle(isCorrect) {


        if (isCorrect) {
            this.setState((prevState) => {
                return { score: prevState.score + 1 }
            })
        }

        if (this.state.questions.length === this.state.current_question + 1) {
            this.setState({
                showScore: true
            })
        }

        else{
         
                this.setState((prevState) => {
                    return { current_question: prevState.current_question + 1 }
                })
           
    
        }



    }

    render() {

        return (
            <div>
                {this.state.showScore && (
                    <div className='score'>your score is {this.state.score} of {this.state.questions.length}   
                    </div>
                 
                )}
                <form className="question__form">
                    <span className='question__count'>question {this.state.current_question+1}/{this.state.questions.length}</span>


                    <label className="question__lbl">{this.state.showScore !== true && this.state.questions[this.state.current_question].questionTitle}</label>



                    <div className="question__answer">
                        {this.state.showScore !== true && this.state.questions[this.state.current_question].answerOption.map((answer) => (
                            <button className="question__inAnswer" onClick={this.answerHandle.bind(this, answer.isCorrect)} key={answer.id}>{answer.answer}</button>
                        ))}
                    </div>
                </form>
            </div>

        )
    }

}
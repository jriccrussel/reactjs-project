import { useGlobalContext } from './context'

import SetupForm from './components/SetupForm'
import Loading from './components/Loading'
import Modal from './components/Modal'

import '../Quiz/Quiz.scss'

const QuizApp = () => {

    // functionalities and state gikan kang 'useGlobalContext'
    const {
        waiting,
        loading,
        questions,
        index,
        correct,
        nextQuestion,
        checkAnswer,
    } = useGlobalContext()

    if(waiting){
        return <SetupForm />
    }

    if(loading){
        return <Loading/>
    }

    // questions - is ang coming from 'useGlobalContext' na g destructure together pud sa 'index'
    const { question, incorrect_answers, correct_answer } = questions[index]

    let answers = [...incorrect_answers]
    const tempIndex = Math.floor(Math.random() * 4)

    if (tempIndex === 3) {
        answers.push(correct_answer)
    } else {
        answers.push(answers[tempIndex])
        answers[tempIndex] = correct_answer
    }

    return (
        <main>
            <Modal />
            
            {/* Question */}
            <section className="quiz">
                <p className="correct-answers">
                    correct answers : {correct}/{index}
                </p>
                <article className="container">
                    <h2 dangerouslySetInnerHTML={{ __html: question }} />
                    <div className="btn-container">
                        {answers.map((answer, index) => {
                            return (
                                <button
                                    key={index}
                                    className='answer-btn'
                                    onClick={() => checkAnswer(correct_answer === answer)}
                                    dangerouslySetInnerHTML={{ __html: answer }}
                                />
                            )
                        })}
                    </div>
                </article>

                {/* Next Question */}
                <button className="next-question" onClick={nextQuestion}>
                    next question
                </button>
            </section>            
        </main>
    )
}

export default QuizApp

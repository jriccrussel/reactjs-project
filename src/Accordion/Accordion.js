import { useState } from 'react'
import data from '../data/data-accordion'
import './Accordion.scss'
import Questions from './Questions'

const Accordion = () => {
    const [questions, setQuestions] = useState(data)

    return (
        <main>
            <div className="container">
                <h3>Questions and Answer About Login</h3>
                <section className="info">
                    {
                        questions.map((newQuestion) => {
                            return (
                                <Questions key={newQuestion.id} {...newQuestion} />
                            )
                        })
                    }
                </section>
            </div>
        </main>
    )
}

export default Accordion

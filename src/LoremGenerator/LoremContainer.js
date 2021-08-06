import { useState } from 'react'
import data from '../data/data-lorem'
import './Lorem.scss'

const LoremContainer = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()
        let amount = parseInt(count)
        if(count <= 0){
            amount = 1
        }
        // 8 total amount of arrays inside from the data
        if(count > 8){
            amount = 8 
        }
        // 0 - start of the index
        // amount - total values
        setText(data.slice(0, amount))
    }

    return (
        <section className="section-center">
            <h3>Tired of Boring Lorem Ipsum?</h3>
            <form className="lorem-form" onSubmit={handleSubmit}>
                <label htmlFor='amount'>Paragraphs: </label>
                <input
                    type='number'
                    name='amount'
                    id='amoung'
                    value={count}
                    onChange={(e) => setCount(e.target.value)}
                />
                <button className='btn'>Generate</button>
            </form>
            <article className="lorem-text">
                {text.map((item, index) => {
                    return <p key={index}>{item}</p>
                })}
            </article>
        </section>
    )
}

export default LoremContainer

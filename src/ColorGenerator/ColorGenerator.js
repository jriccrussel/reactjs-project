import {useState} from 'react'
import './ColorGenerator.scss'
import SingleColor from './SingleColor'

import Values from 'values.js'

const ColorGenerator = () => {
    const [color, setColor] = useState('')
    const [error, setError] = useState(false)
    const [list, setList] = useState(new Values('#f15025').all(10))
    
    const handleSubmit = (e) => {
        e.preventDefault()
        try{
            let newColors = new Values(color).all(10)
            setList(newColors)
            setError(false)
            console.log(newColors)
        } catch (error) {
            setError(true)
            console.log(error)
        }
    }
    
    return (
        <>
            <section className="container">
                <h3>Color Generator</h3>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text'
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder='#f15025'
                        className={`${error ? 'error' : null}`}
                    />
                    <button className="btn" type='submit'>Submit</button>
                </form>
            </section>
            <section className="colors">
                {list.map((color, index) =>{
                    return (
                        <SingleColor 
                            key={index}
                            {...color}
                            index={index}
                            hexColor={color.hex}
                        />
                    )
                })}
            </section>
        </>
    )
}

export default ColorGenerator

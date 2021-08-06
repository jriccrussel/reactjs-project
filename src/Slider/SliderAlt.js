import {useState, useEffect} from 'react'
import data from '../data/data-slider'
import './Slider.scss'

import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

const SliderAlt = () => {
    const [people, setPeople] = useState(data)
    const [index, setIndex] = useState(0)

    const nextSlide = () => {
        setIndex((oldStateIndex) => {
            let indexVar = oldStateIndex + 1
            if(indexVar = people.length - 1){
                indexVar = 0
            }
            return indexVar
        })
    }

    const prevSlide = () => {
        setIndex((oldStateIndex) => {
            let indexVar = oldStateIndex -1
            if(indexVar < 0){
                indexVar = people.length - 1
            }
            return indexVar
        })
    }

    // Autoplay
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex((oldStateIndex) => {
                let indexVar = oldStateIndex + 1
                if(indexVar > people.length -1){
                    indexVar = 0
                }
                return indexVar
            })
        }, 5000)
        return () => {
            clearInterval(slider);
        };
    }, [index])

    return (
        <section className="section">
            <div className="title">
                <h2>
                    <span>/</span>Reviews
                </h2>
            </div>
            <div className="section-center">
                {people.map((newPerson, newPersonIndex) => {
                    const {id, image, name, title, quote} = newPerson

                    // 'nextSlide' is placed on the right side
                    let position = 'nextSlide'
                    // if 'newPersonIndex'(index of the new mapped data) matches the 'index'(from the useState) change the position to active class 'activeSlide' placing it to the center
                    if(newPersonIndex === index){
                        position = 'activeSlide'
                    }
                    // 'newPersonIndex === index -1' - placing the previous index slide back to the center(since it place back to center of course the class will change to 'activeSlide')
                    // 'index === 0 && newPersonIndex === people.length - 1' - in the intial load(when it refreshes) the index(refering the 'lastSlide') instead will be placed start to the left
                    if(newPersonIndex === index - 1 || (index === 0 && newPersonIndex === people.length - 1)){
                        // 'lastSlide' - is refering to the previous slide
                        position = 'lastSlide'
                    }

                    return (
                        <article className={position} key={id}>
                            <img src={image} alt={name} className="person-img" />
                            <h4>{name}</h4>
                            <p className="title">{title}</p>
                            <p className="text">{quote}</p>
                            <FaQuoteRight className="icon"/>
                        </article>
                    )
                })}

                <button className="prev" onClick={prevSlide}>
                    <FiChevronLeft />
                </button>
                <button className="next" onClick={nextSlide}>
                    <FiChevronRight />
                </button>
            </div>
        </section>
        
    )
}

export default SliderAlt

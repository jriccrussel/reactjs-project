import { useState } from 'react'
import data from '../data/data-reviews'
import {GrNext, GrPrevious} from 'react-icons/gr'
import { ImQuotesRight } from "react-icons/im"

// import DotImg from '../assets/img/dots1'

const ReviewsList = () => {
    const [index, setIndex] = useState(0)

    // Object Destructuring grabbing all the properties equal to 'data' 
    const {name, job, image, text, title} = data[index]

    // checkNumber - checking the length of the data if increase(next) or bigger from the data it goes back to the first index of the data  
    // when it decreases(previous) or lessen from the data it goes bigger or goes to the last index of the data 
    const checkNumber = (number) => {
        if (number > data.length - 1) {
          return 0;
        }
        if (number < 0) {
          return data.length - 1;
        }
        return number;
    };

    // Event handler to slide to next person
    const nextPerson = () => {
        setIndex((currentIndex) => {
            let newIndex = currentIndex + 1;
            // return as 'checkNumber()' with the parameter of 'newIndex' checking/evaluates the length of the index if the index inreases
            return checkNumber(newIndex)
        })
    }
    
    // Event handler to slide to previous person
    const prevPerson = () => {
        setIndex((currentIndex) => {
          let newIndex = currentIndex - 1;
          // return as 'checkNumber()' with the parameter of 'newIndex' checking/evaluates the length of the index if the index increases
          return checkNumber(newIndex)
        })
    }

    // Envent handler to generate random indexes from the data
    const randomPersonFromData = () => {
        let randomNumber = Math.floor(Math.random() * data.length)
        if (randomNumber === index){
            randomNumber = index + 1
        }
        setIndex(checkNumber(randomNumber))
    }

    return (
        // <article className="review">
        //     <div className="img-container">
        //         <img src={image} alt={name} className="person-img" />
        //         <span className="quote-icon">
        //             <ImQuotesRight />
        //         </span>
        //     </div>
        //     <h4 className="author">{name}</h4>
        //     <p className="job">{job}</p>
        //     <p className="info">{text}</p>
        //     <div className="button-container">
        //         <button className="prev-btn" onClick={prevPerson}>
        //             <GrPrevious />
        //         </button>
        //         <button className="next-btn" onClick={nextPerson}>
        //             <GrNext />
        //         </button>
        //     </div>
        //     <button className="random-btn" onClick={randomPersonFromData}>Surprise Me</button>
        // </article>

        <section className="sliderMain">
            <div className="sliderMain_wrapper">
                {/* <div className="sliderMain_sectTitle contain flex">
                    
                </div> */}

                <div className="sliderMain_slider contain flex">
                    <div className="w_img">
                        <h2>What Our Engineers Are Saying</h2>
                        <div className="sliderMain_imgWrap">
                            <img src={image} alt={name} className="person-img" />
                            <div className="sliderMain_quote">
                                <ImQuotesRight />
                            </div>

                            {/* <img src={DotImg} alt="" className="dotImg1" /> */}
                        </div>
                    </div>
                    <div className="w_content">
                        <div className="sliderMain_contentWrap">
                            <h3 className="titles">{title}</h3>
                            <p className="info">{text}</p>
                            <h4 className="author">{name}</h4>
                            <p className="job">{job}</p>
                        </div>                        
                    </div>
                </div>
                <div className="sliderMain_btn contain flex">
                    <div className="button-container">
                        <button className="prev-btn" onClick={prevPerson}>
                            <GrPrevious />
                        </button>
                        <button className="next-btn" onClick={nextPerson}>
                            <GrNext />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReviewsList

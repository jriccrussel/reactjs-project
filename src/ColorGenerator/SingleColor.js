import {useState, useEffect} from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
    const [alert, setAlert] = useState(false)
    const bcg = rgb.join(',')
    const hex = rgbToHex(...rgb)
    const hexValue = `#${hexColor}`

    // fade animation after clicking the SingleColor[Clicking Copy the HEX Color]
    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 3000)
        return () => clearTimeout(timeout)
    }, [alert])

    return (
        <article
            // '10' - number of SingleColor's[Starting from the bottom] will change the text color to WHITE 
            className={`color ${index > 10 && 'color-light'}`}
            // 'rgb(${bcg})' - change the background color
            style={{ backgroundColor: `rgb(${bcg})`}}
            onClick={() => {
                setAlert(true)
                navigator.clipboard.writeText(hexValue)
            }}
        >
            <p className="percent-value">{weight}%</p>
            <p className="color-value">{hexValue}</p>
            
            {alert && <p className='alert'>Copied to Clipboard</p>}
        </article>
    )
}

export default SingleColor

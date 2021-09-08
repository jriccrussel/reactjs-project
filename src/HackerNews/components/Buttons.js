import { useGlobalContext } from '../context'

const Buttons = () => {
    const {isLoading, page, nbPages, handlePage} = useGlobalContext()

    return (
        <div className="btn-container">
            {/* when click the buttons the 'isLoading' would also trigger */}
            <button disabled={isLoading} onClick={()=>handlePage('dec')}>
                prev
            </button>
            <p>
                {page + 1} of {nbPages}
            </p>
            <button disabled={isLoading} onClick={()=>handlePage('inc')}>
                next
            </button>
        </div>
    )
}

export default Buttons

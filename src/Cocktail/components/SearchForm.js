import React, {useEffect, useRef} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
    // functions coming from 'useGlobalContext' context
    const {setSearchTerm} = useGlobalContext()

    const searchValue = useRef('')

    // input field with focus
    useEffect(() => {
        searchValue.current.focus()
    }, [])

    // so whatever value in the input field then ang setSearchTerm mo trigger dayon
    const searchCocktail = () => {
        setSearchTerm(searchValue.current.value)
    }

    // doesnt reload after typing in
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <section className="section search">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor='name'>search your favorite cocktail</label>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        ref={searchValue}
                        onChange={searchCocktail}
                    />
                </div>
            </form>
        </section>
    )
}

export default SearchForm

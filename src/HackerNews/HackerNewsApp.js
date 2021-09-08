import SearchForm from './components/SearchForm'
import Stories from './components/Stories'
import Buttons from './components/Buttons'
import '../HackerNews/HackerNews.scss'

const HackerNewsApp = () => {
    return (
        <>
            <SearchForm />
            <Buttons />
            <Stories />
        </>
    )
}

export default HackerNewsApp

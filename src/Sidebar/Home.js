import {useContext} from 'react'
import { FaBars } from 'react-icons/fa';
import { AppContext } from './context';
import { useCustomHookContext } from './context';

const Home = () => {
    // Manual Method using useContext and with a custom context
    // const testContext = useContext(AppContext)
    // console.log(testContext)

    // Dynamic using Custom Hooks with useContext
    // in here below we just need to invoke it because sa context.js in 'useCustomHookContext' ang AppContext is now a useContext
    // const data = useCustomHookContext()
    // console.log(data)

    const {openSidebar, openModal} = useCustomHookContext()

    return (
        <main>
            <button className='sidebar-toggle' onClick={openSidebar}>
                <FaBars />
            </button>
            <button className="btn" onClick={openModal}>
                show modal
            </button>
        </main>
    )
}

export default Home

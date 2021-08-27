import { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
    // functions and state coming from 'useGlobalContext' context
    const {
        isSubmenuOpen,
        // page - sa 'useGlobalContext' ang 'page' sa iyang state pag expect cya ang page na naay '{page, links}' as an object
        page: { page, links },
        // location - is a state and para sa coordinates sa submenu para pa center
        location,
    } = useGlobalContext()

    // refer sa cya sa <aside></aside> na naa inline 'ref={container}'
    const container = useRef(null)
    // state para ni sa columns & 'useState('col-2')' default state ra ni cya
    const [columns, setColumns] = useState('col-2')

    useEffect(() => {
        setColumns('col-2')
        
        const submenu = container.current
        const { center, bottom } = location
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`
        
        // check if naa ang links 
        console.log(links)

        // if ang links(sa iyang data naa mga links with 2 or more properties) iyang length is equal to 3 then display 3 columns
        if (links.length === 3) {
            setColumns('col-3')
        }

        // if ang links(sa iyang data naa mga links with 2 or more properties) iyang length is more than to 3 then display 3 columns
        if (links.length > 3) {
            setColumns('col-4')
        }
    }, [page, location, links])
    return (
        <aside
        className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
        ref={container}
        >
            <section>
                <h4>{page}</h4>
                <div className={`submenu-center ${columns}`}>
                    {links.map((link, index) => {
                        const { url, icon, label } = link

                        return (
                        <a key={index} href={url}>
                            {icon}
                            {label}
                        </a>
                        )
                    })}
                </div>
            </section>
        </aside>
    )
}

export default Submenu
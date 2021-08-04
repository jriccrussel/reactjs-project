import List from './List'

const Tours = ({tours, removeTours}) => {
    return (
        <section>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {
                    tours.map((tourItem) => {
                        // {...tourItem} - will get all image, info, price, name properties
                        // removeTours={removeTours} - receive as a prop from 'ToursContainer' component and before it pass it to the 'List' Component
                        return <List key={tourItem.id} {...tourItem} removeTours={removeTours}></List>
                    })
                }
            </div>
        </section>
    )
}

export default Tours

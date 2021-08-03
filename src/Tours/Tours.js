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
                        return <List key={tourItem.id} {...tourItem} removeTours={removeTours}></List>
                    })
                }
            </div>
        </section>
    )
}

export default Tours

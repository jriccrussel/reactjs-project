const SlideChild = ({props}) => {
    return (
        <div>
            {props.map((kicks) => {
                return (
                    <div key={kicks.id}>
                        <img src={kicks.image} alt=""/>
                        <p>{kicks.title}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default SlideChild

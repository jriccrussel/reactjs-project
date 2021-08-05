const Categories = ({categories, filterItemCat}) => {
    return (
        <div className="btn-container">


            {categories.map((newCategories, index) => {
                return (
                    //  Manual Approach Display each of the categories to display :
                    // <button className="filter-btn" onClick={() => filterItemCat('all')}>All</button>
                    // <button className="filter-btn" onClick={() => filterItemCat('breakfast')}>Breakfast</button>


                    <button 
                        type="button"
                        className="filter-btn"
                        key={index}
                        onClick={() => filterItemCat(newCategories)}
                    >
                        {newCategories}
                    </button>
                )
            })}
        </div>
    )
}

export default Categories

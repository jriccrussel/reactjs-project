import { useState } from 'react'
import data from '../data/data-menu'
import './FoodMenu.scss'
import Categories from './Categories'
import Menu from './Menu'

// Filter(using 'new Set()') all the category object properties(inside the 'data-menu.js') with the same catogery name and show only ONE category 
const allCategories = ['all', ...new Set(data.map((latestAllCategories) => latestAllCategories.category))]

const FoodContainer = () => {
    const [menuItems, setMenuItems] = useState(data)
    const [categories, setCategories] = useState(allCategories)

    // Filter and display the 'All' button and Also diplay all the different categories on the Menu Component
    const filterItemCat = (newCategory) => {
        // When Clicking the 'All' button it will just return/render/display all of the Items from the data 
        if (newCategory === 'all') {
          return setMenuItems(data)
        }
        // Filter all data from data-menu and shows only the categories('newCatItem.category' has a method of '.category' which is why its gonna return as category)
        const newItems = data.filter((newCatItem) => newCatItem.category === newCategory);
        setMenuItems(newItems);
    };

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>Our Menu</h2>
                    <div className="underline"></div>
                </div>
                <Categories categories={categories} filterItemCat={filterItemCat}/>
                <Menu menuData={menuItems}/>
            </section>
        </main>
    )
}

export default FoodContainer

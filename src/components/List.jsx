import React from 'react'
import PropTypes from 'prop-types'

// Render lists

const List = (props) => {
    const category = props.category;
    const itemList = props.item;

    // fruits2.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical
    // fruits2.sort((a, b) => b.name.localeCompare(a.name)); // Reverse Alphabetical
    // fruits2.sort((a, b) => a.calories - b.calories); //Numeric
    // fruits2.sort((a, b) => a.calories - b.calories); //Reverse Numeric

    // const lowCalFruits = fruits2.filter(fruit => fruit.calories < 100);
    // const highCalFruits = fruits2.filter(fruit => fruit.calories >= 100);

    // const listItems2 = fruits2.map(fruit => <li key={fruit.id}>{fruit.name}: <b>{fruit.calories}</b></li>);
    const listItems2 = itemList.map(item => <li key={item.id}>{item.name}: <b>{item.calories}</b></li>);


    // const listItems2 = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>{lowCalFruit.name}: <b>{lowCalFruit.calories}</b></li>);
    // const listItems2 = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>{highCalFruit.name}: <b>{highCalFruit.calories}</b></li>);

  return (
    <div>
      <h3 className="list-category">{category}</h3>  
      <ul className="list-items">{listItems2}</ul>
        
    </div>
  )
}
List.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number})),
}
List.defaultProps = {
  category: "Category",
  items: [],
}
export default List

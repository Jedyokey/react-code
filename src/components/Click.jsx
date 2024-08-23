import React from 'react'

// Click event = An interaction when a user clicks on a specific element. 
//             We can respond to clicks by passing a callback to the onclick
//             event handler.

const Click = () => {
    // const handleClick = () => console.log("What's Up");
    let count = 0;
    const handleClick = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        } else {
            console.log(`${name} stop clicking me!`);
        }
    };

    const handleClick2 = (name) => console.log(`${name} Stop clicking me!`);
    const clickHere = (e) => e.target.textContent = "Bro, how far?";

    const fruits = ["apple", "banana", "water-melon", "paw-paw"];
    const listItems = fruits.map(fruit => <li>{fruit}</li>);

  return (
    <>
        <button onClick={() => handleClick("James")}>Click Me</button>
        <button onClick={() => handleClick2("Bro")}>Try this</button><br /><br />
        <button onDoubleClick={(e) => clickHere(e)}>Click Again</button>
        <ul className="list-items">{listItems}</ul>
    </>
  )
}

export default Click

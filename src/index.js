//entry point of the application

import React from 'react';
import ReactDOM from 'react-dom';





//Hot module replacement API
if(module.hot){
    module.hot.accept();
}

// Create an element
const hello = <h1 style={{ color: 'blue' }} id="hello">Hello World</h1>;


//create a list of elements
const foodlist = ['Pizza', 'Burger', 'Coke', 'Pasta', 'Fries'];

const list = (
    <ul>
        {foodlist.map((food, index) => (
            <li key={index}>{food}</li>
        ))}
    </ul>
);

// Render the list to the DOM
const app =(
    <div>
        {list}
        {hello}
    </div>
);



ReactDOM.render(app, document.getElementById('root'));


// to initialie a component

const element = <component/>;



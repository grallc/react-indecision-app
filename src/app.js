'use strict';

// only 

var user = {
    name: 'Corentin',
    age: 18, // (I'm 17)
    location: 'Nantes, France'
}


var app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}



function getLocation(location) {
    if(location){
        return <p>Location : {location}</p>;
    } else {
        return undefined;
    }
}

// username will only show if it does exist
var template = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}    
    </div>
);


// Display subtitle and its p only if it does exist
var templateTwo = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>} 
        <p>{app.title.length > 0 ? 'Here are your options:' : 'No options'}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);


let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
}
const minusOne = () => {
    count--;
    renderCounterApp();
}
const reset = () => {
    count = 0;
    renderCounterApp();
}


//true ? 'Yes' : 'No'
// Prints Yes, because true = true

const appRoot = document.getElementById('app');


const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateThree, appRoot);

};

renderCounterApp();

'use strict';

var app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

// Display subtitle and its p only if it does exist
var template = (
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

const appRoot = document.getElementById('app');


ReactDOM.render(template, appRoot);

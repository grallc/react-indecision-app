'use strict';

// only 

var user = {
    name: 'Corentin',
    age: 18, // (I'm 17)
    location: 'Nantes, France'
};

var app = {
    title: 'Indecision',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']

    // Display subtitle and its p only if it does exist
};var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.title.length > 0 ? 'Here are your options:' : 'No options'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location : ',
            location
        );
    } else {
        return undefined;
    }
}

// username will only show if it does exist
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

//true ? 'Yes' : 'No'
// Prints Yes, because true = true

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

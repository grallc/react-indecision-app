
var user = {
    name: 'Corentin',
    age: 18, // (I'm 17)
    location: 'Nantes, France'
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

ReactDOM.render(template, appRoot);


//true ? 'Yes' : 'No'
// Prints Yes, because true = true

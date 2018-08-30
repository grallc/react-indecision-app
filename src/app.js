console.log('App.js is running!');

// babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch


const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

// Add option
const onFormSubmit = (e) => {
  e.preventDefault();
  // Get form content
  const option = e.target.elements.option.value;
  if (option) {
    // Add it to options array
    app.options.push(option);
    //Clear form
    e.target.elements.option.value = '';
    // Render
    render();
  }
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

// Clear options
const onRemoveAll = () => {
  app.options = [];
  render();
};


const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length < 2} onClick={onMakeDecision}>What should I now ?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {
            app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();

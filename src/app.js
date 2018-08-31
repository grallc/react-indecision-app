console.log('App.js is running!');

// babel src/playground/es6-classes-1.js --out-file=public/scripts/app.js --presets=env,react --watch

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    )
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What sould I do ?</button>
      </div>
    )
  }
}


class Options extends React.Component {
  render() {
    return (
      <div>
        Options component here
      </div>
    )
  }
}

class AddOption extends React.Component {
  render() {
    return (
      <div>
        AddOption component here
      </div>
    )
  }
}


const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
  </div>
)


ReactDOM.render(jsx, document.getElementById('app'));
class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

    }
    handleAddOne() {
        console.log('add');
    }
    handleMinusOne() {
        console.log('remove');
    }
    handleReset() {
        console.log('reset');
    }
    render(){
        return (
            <div>
                <h1>Count: 5</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}



ReactDOM.render(<Counter />, document.getElementById('app'));
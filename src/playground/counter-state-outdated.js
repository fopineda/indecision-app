class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        // step 1
        this.state = {
            count: props.count
        }
    }

    handleAddOne() {
        // step 3
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    };
    handleMinusOne ()   {
        // step 3
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    };
    
    handleReset() {
        // step 3
        this.setState(() => {
            return {
                count: 0
            }
        });
    };


    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}
Counter.defaultProps = {
    count: 0
}



ReactDOM.render(<Counter count="25"/>, document.getElementById('app'));



// also render count-render-manual.js
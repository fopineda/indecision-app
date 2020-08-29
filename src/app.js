class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: ['Thing one', 'Thing two', 'Thing three']
        };
    }
    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const randomOption = this.state.options[randomNumber];
        alert(randomOption);
    }
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }
    handleAddOption(option) {
        // if there is empty message (it got pass the other layer defense below)
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) { // if index is found then it is a duplicate item
            return 'This option already exists';
        }


        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        })
    }
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in JavaScript\'s random functionality';
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

const Header = (props) => {

    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );

}


const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >What should I do?</button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.map((option) => <Option key={option} optionText={option} />)}
            
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
        </div>
    )
}

class AddOption extends React.Component {
    // We are using two add options:
        // 1. built into the component (handleAddOption(e))
        // 2. passed down from parents (handleAddOption)

    // because we are using "this" inside handleAddOption(e)
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    handleAddOption(e) { 
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => {
            return {
                error
            }
        })

    }
    
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}




ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in JavaScript\'s random functionality';
        const options = ['Thing one', 'Thing two', 'Thing three'];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>

        )
    }
}

class Header extends React.Component{
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    // override so the .bind doesn't become so expensive
    // called so that it initially binds. Otherwise if you call .bind() in the onClick it will bind every time it runs, thus making it expensive
    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }


    handleRemoveAll() {
        console.log(this.props.options);
    }

    render () {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {this.props.options.map((option) => <Option key={option} optionText={option} />)}
                
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(e) { // grab event because you need to grab what it was submitted with
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        // if options input had a value, then push it onto the options array in app object
        if (option) {
            // this.props.options.push(option);
            alert(option);
            e.target.elements.option.value = '';
        }
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
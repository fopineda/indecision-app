class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>

        )
    }
}

class Header extends React.Component{
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in JavaScript's random functionality</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render () {
        return (
            <div>
                <p>Options component here</p>
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>Option Component here</p>
            </div>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p>AddOption component here</p>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
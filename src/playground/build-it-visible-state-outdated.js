class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        // step 1: setup state object
        this.state = {
            visibility: false
        }
    };

    handleToggleVisibility() {
        // step 3: modify state object on event 
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    };


    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'hide details': 'Show details'}</button>
                {this.state.visibility && (
                    <p>Hey. These are some details you can now see!</p>
                )}
            </div>  
        );
    }   

}


ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));


// also reference build-it-visible-render-manual.js
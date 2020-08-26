let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    
    render();
    
}


const appRoot = document.getElementById('app');

const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility ? 'hide details': 'Show details'}</button>
            {visibility && (
                <p>Hey. These are some details you can now see!</p>
            )}
        </div>
    );

    ReactDOM.render(jsx, appRoot);
}

render();

// also reference build-visible-state-outdated.js
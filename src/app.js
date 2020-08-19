
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options: []
}


const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    // if options input had a value, then push it onto the options array in app object
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplateApp();
    }
    console.log(app.options); // TODO: DELETE
}

const onRemoveAll = () => {
    app.options = []
    console.log(app.options) // TODO: DELETE
    renderTemplateApp();
}


const appRoot = document.getElementById('app');

const renderTemplateApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                <li>
                    item one
                </li>
                <li>
                    item two
                </li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot)
}

renderTemplateApp();



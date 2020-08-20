'use strict';

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    // if options input had a value, then push it onto the options array in app object
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplateApp();
    }
    console.log(app.options); // TODO: DELETE
};

var onRemoveAll = function onRemoveAll() {
    app.options = [];
    console.log(app.options); // TODO: DELETE
    renderTemplateApp();
};

var numbers = [55, 101, 1000];

var appRoot = document.getElementById('app');

var renderTemplateApp = function renderTemplateApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderTemplateApp();

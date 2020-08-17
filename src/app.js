
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer!',
    options: ['One', 'Two']
}
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options': 'No options'}</p>
        <ol>
            <li>
                item one
            </li>
            <li>
                item two
            </li>
        </ol>
    </div>
);

const user = {
    name: 'Felipe',
    age: 25,
    location: 'Columbia'
};
function getLocation(location) {  
    if (location){
        return <p> Location: {location}</p>
    }
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name: 'booty'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);


const appRoot = document.getElementById('app');
// html, location
ReactDOM.render(template, appRoot);
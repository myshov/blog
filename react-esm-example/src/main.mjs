//import App from './components/App.mjs';

//console.log(App)

//ReactDOM.render(App, document.getElementById('mountPoint'));


const {render} = ReactDOM;
const {createStore} = Redux;
const {Provider} = ReactRedux;
const R = React.createElement;

import App from './components/App.mjs'
import reducer from './reducers/index.mjs'

const store = createStore(reducer)

render(
    R(Provider, {store}, App()),
    document.getElementById('root')
);

const R = React.createElement;

import Footer from './Footer.mjs';
import AddTodo from '../containers/AddTodo.mjs';
import VisibleTodoList from '../containers/VisibleTodoList.mjs';

const App = () => (
  R('div',
    null,
    R(AddTodo),
    R(VisibleTodoList),
    R(Footer),
  )
);

export default App;

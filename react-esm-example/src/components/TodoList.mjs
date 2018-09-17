const R = React.createElement;

import Todo from './Todo.mjs';

const TodoList = ({ todos, toggleTodo }) => (
  R('ul',
    null,
    todos.map(todo =>
      R(Todo,
        {
          ...todo,
          key: todo.id,
          onClick: () => toggleTodo(todo.id)
        }
      )
    )
  )
);

export default TodoList;

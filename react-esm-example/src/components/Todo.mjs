const R = React.createElement;

const Todo = ({onClick, completed, text}) => (
  R('li',
    {
      onClick,
      style: {
        textDecoration: completed ? 'line-through' : 'none'
      }
    },
    text
  )
);

export default Todo;

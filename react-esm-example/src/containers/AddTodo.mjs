const R = React.createElement;
const {connect} = ReactRedux;

import {addTodo} from '../actions/index.mjs'

const AddTodo = ({dispatch}) => {
  let input

  return (
    R('div',
      null,
      R('form',
        {
          onSubmit: e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            dispatch(addTodo(input.value))
            input.value = ''
          }
        },
        R('input', {ref: node => input = node}),
        R('button', {type: 'submit'}, 'Add todo')
      )
    )
  )
};

export default connect()(AddTodo);

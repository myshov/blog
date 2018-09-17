const R = React.createElement;

const Link = ({ active, children, onClick }) => (
  R('button',
    {
       onClick,
       disabled: active,
       style: {
         marginLeft: '4px',
       }
    },
    children
  )
);

export default Link;

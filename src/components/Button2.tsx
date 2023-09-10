import React from 'react';

interface Button2 {
  children: string;
  message: string;
}

const Button2 = ({message, children}: Button2) => {
  const handleClick = ()=>(alert(message))
  return (
    <div>
      <button onClick={handleClick}>
        {children}
      </button>
    </div>
  );
};

export default Button2;
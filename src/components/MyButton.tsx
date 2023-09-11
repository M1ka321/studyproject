import React from 'react';

interface MyButtonProps {
  children: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type: "button" | "string" | "reset"
}

const MyButton = ({children, onClick}: MyButtonProps) => {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export default MyButton;
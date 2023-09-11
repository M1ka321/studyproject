import React from 'react';


interface MyInputProps {
  value: any;
  name: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
  type?: "text" | "number"
}

const MyInput = ({value, handleChange, name, type="text"}: MyInputProps) => {
  return (
    <div>
      <input type={type} value={value} onChange={handleChange} name={name}/>
    </div>
  );
};

export default MyInput;
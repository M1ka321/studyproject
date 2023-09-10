import React from 'react';
import {Interface} from "readline";

interface MyInputProps {
  value: any;
  name: string;
  handleChange: React.ChangeEventHandler<HTMLInputElement>
}

const MyInput = ({value, handleChange, name}: MyInputProps) => {
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} name={name}/>
    </div>
  );
};

export default MyInput;
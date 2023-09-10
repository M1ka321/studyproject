import React, {useState} from 'react';

interface CounterProps {
  count: number
  dec:  React.MouseEventHandler<HTMLButtonElement>
  inc:  React.MouseEventHandler<HTMLButtonElement>
}

const Counter = ({count, inc, dec}: CounterProps) => {
  return (
    <div>
      <strong>{count}</strong>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
    </div>
  );
};

export default Counter;
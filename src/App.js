import React, { useState } from 'react';
import { VscTriangleLeft, VscTriangleRight, VscTriangleUp, VscTriangleDown } from 'react-icons/vsc';
import './style.css'; 

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const incrementTen = () => {
    setCount(count + 10);
  };

  const decrementTen = () => {
    setCount(count - 10);
  };

  return (
    <div className="container">
      
      <h2 className="value">{count}</h2>
     
      <div className="button-container">
        <button className="button1" onClick={increment}>  <VscTriangleUp /></button>
        <button className="button2" onClick={decrement}><VscTriangleDown /></button>
        <button className="button3" onClick={incrementTen}>  <VscTriangleRight /></button>
        <button className="button4" onClick={decrementTen}>   <VscTriangleLeft /></button>
      </div>
    </div>
  );
};

export default Counter;

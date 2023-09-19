/* eslint-disable */
import React, { useState } from 'react';
import down from "../../assets/images/down.png"
import up from "../../assets/images/up.png"
function printNum() {
  // Initialize the state to store the number of copies
  const [numCopies, setNumCopies] = useState(0);

  // Function to handle incrementing the number of copies
  const incrementCopies = () => {
    setNumCopies(numCopies + 1);
  };

  // Function to handle decrementing the number of copies
  const decrementCopies = () => {
    if (numCopies > 1) {
      setNumCopies(numCopies - 1);
    }
  };

  return (
    <div className='h-[30px] flex justify-center w-[70px] items-center border-[1px] border-gray-600'>
      <img onClick={decrementCopies} className='w-[17px] cursor-pointer h-[17px] object-cover' src={down}>
      </img>
      <input className='h-full w-[25px] text-center outline-none' type="text" value={numCopies} readOnly />
      <img onClick={incrementCopies} className='w-[17px] cursor-pointer h-[17px] object-cover' src={up}></img>
    </div>
  );
}

export default printNum;
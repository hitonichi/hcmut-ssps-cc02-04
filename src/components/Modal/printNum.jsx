/* eslint-disable */
import React, { useState } from 'react';
import plus from "../../assets/images/plus.png"
import minus from "../../assets/images/minus.png"
function printNum() {
  const [numCopies, setNumCopies] = useState(0);
  const incrementCopies = () => {
    setNumCopies(numCopies + 1);
  };


  const decrementCopies = () => {
    if (numCopies > 1) {
      setNumCopies(numCopies - 1);
    }
  };

  return (
    <div className='h-[30px] flex mt-[50px] justify-center w-[70px] items-center border-[1px] border-gray-600'>
      <img onClick={decrementCopies} className='w-[17px] cursor-pointer h-[17px]  object-cover' src={minus}>
      </img>
      <input className='h-full w-[25px] text-center self-center   outline-none' type="text" value={numCopies} readOnly />
      <img onClick={incrementCopies} className='w-[17px] cursor-pointer h-[17px] object-cover' src={plus}></img>
    </div>
  );
}

export default printNum;
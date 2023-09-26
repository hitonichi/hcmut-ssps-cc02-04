/* eslint-disable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import downarrow from '../../assets/images/down-arrow.png';

function Dropdown({
  arrayProp,
  display,
  handleDisplay,
  setIsCustomPrintSelected,
}) {
  const [selectedChoice, setSelectedChoice] = useState(arrayProp[0]);
  const [customPrintInput, setCustomPrintInput] = useState('');

  useEffect(() => {
    setSelectedChoice(arrayProp[0]);
  }, [arrayProp]);

  const handleDisplayy = (index) => {
    setSelectedChoice(arrayProp[index]);
    handleDisplay(index);

    if (arrayProp[index].type === 'Print custom pages') {
      setIsCustomPrintSelected(true);
      setCustomPrintInput('');
    } else {
      setIsCustomPrintSelected(false);
    }
  };

  const handleCustomPrintInputChange = (e) => {
    const userInput = e.target.value;
    const isValidInput = /^(\d+(-\d+)?(,\s*\d+(-\d+)?)*)?$/.test(userInput);
    if (isValidInput || userInput === '') {
      setCustomPrintInput(userInput);
    }
  };

  return (
    <div className="roboto relative h-[44px] w-full">
      <button
        onClick={handleDisplay}
        className="relative z-20 flex h-[44px] w-full cursor-pointer flex-row gap-3  border-[1px] border-black hover:bg-gray-400"
      >
        <img
          src={selectedChoice.icon}
          className="ml-[8px] h-[26px] w-[26px] self-center object-cover"
          alt="Page Icon"
        />
        <div className="roboto flex flex-col items-start justify-start text-start">
          <p className="h-1/2 w-full text-base font-medium text-black">
            {selectedChoice.type}
          </p>
          <h3 className="h-1/2 w-full text-sm text-black">
            {selectedChoice.text}
          </h3>
        </div>
        <div className="absolute right-0 top-0 flex h-full  w-[30px] items-center justify-center self-end">
          <img
            className="h-[30px] w-full object-cover"
            src={downarrow}
            alt="Down Arrow"
          />
        </div>
      </button>
      <div
        className={` ${
          selectedChoice.type === 'Print custom pages' ? 'block' : 'hidden'
        } absolute left-0 top-[100%]  mt-2 flex  h-auto w-full flex-row items-center gap-6`}
      >
        <div className="flex h-full w-auto items-center justify-center">
          <h3 className="text-center text-base text-black">
            <div className="flex items-center justify-center">Pages</div>
          </h3>
        </div>

        <input
          className="h-full w-[300px] border-2 p-2"
          type="text"
          value={customPrintInput}
          onChange={handleCustomPrintInputChange}
          placeholder="Enter custom print pages"
        />
      </div>
      <ul
        className={`${
          display ? 'block ' : 'hidden '
        } dropdown-menu  absolute left-0 top-[100%]  z-50 flex w-full cursor-pointer flex-col items-start border-[1px] border-black bg-white `}
      >
        {arrayProp.map((page, index) => (
          <li
            key={index}
            className="flex w-full flex-row gap-3  bg-white hover:bg-gray-400"
            onClick={() => handleDisplayy(index)}
          >
            <img
              src={page.icon}
              className="ml-[8px] h-[26px] w-[26px] self-center object-cover"
              alt="Page Icon"
            />
            <div className="roboto flex  min-h-[44px] flex-col items-start justify-start text-start">
              <p className="h-auto w-full text-base font-extrabold text-black">
                {page.type}
              </p>
              <h3 className="h-auto w-full text-sm text-black">{page.text}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

Dropdown.propTypes = {
  arrayProp: PropTypes.array.isRequired,
  display: PropTypes.bool.isRequired,
  handleDisplay: PropTypes.func.isRequired,
};

export default Dropdown;

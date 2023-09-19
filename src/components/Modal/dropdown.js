/* eslint-disable */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import downarrow from "../../assets/images/down-arrow.png";
function Dropdown({ arrayProp, display, handleDisplay, isCustomPrintSelected, setIsCustomPrintSelected }) {
  const [selectedChoice, setSelectedChoice] = useState(arrayProp[0]);
  const [customPrintInput, setCustomPrintInput] = useState("");

  useEffect(() => {
    setSelectedChoice(arrayProp[0]); // Reset the selected choice when arrayProp changes
  }, [arrayProp]);

  const handleDisplayy = (index) => {
    setSelectedChoice(arrayProp[index]); // Update the selected choice
    handleDisplay(index); // Close the dropdown when an item is selected

    // Check if "Custom Print" is selected
    if (arrayProp[index].type === "Print custom pages") {
      setIsCustomPrintSelected(true);
      setCustomPrintInput(""); // Clear the input when selecting "Custom Print"
    } else {
      setIsCustomPrintSelected(false);
    }
  };

  const handleCustomPrintInputChange = (e) => {
    const userInput = e.target.value;
    // Regular expression to match a valid input pattern
    const isValidInput = /^(\d+(-\d+)?(,\s*\d+(-\d+)?)*)?$/.test(userInput);
    if (isValidInput || userInput === "") {
      setCustomPrintInput(userInput);
    }
  };





  return (
    <div className="w-full roboto relative h-[44px]">
      <button onClick={handleDisplay} className="flex hover:bg-gray-400 relative w-full flex-row gap-3 z-20 border-[1px]  border-black cursor-pointer h-[44px]">
        <img src={selectedChoice.icon} className="w-[26px] ml-[8px] h-[26px] self-center object-cover" alt="Page Icon" />
        <div className="flex flex-col roboto text-start justify-start items-start">
          <p className="w-full h-1/2 text-base font-medium text-black">{selectedChoice.type}</p>
          <h3 className="w-full h-1/2 text-sm text-black">{selectedChoice.text}</h3>
        </div>
        <div className="w-[30px] h-full absolute top-0 right-0  flex self-end justify-center items-center">
          <img className="w-full h-[30px] object-cover" src={downarrow}></img>
        </div>



      </button>
      <div className={` ${selectedChoice.type === "Print custom pages" ? "block" : "hidden"} mt-2 gap-6 flex  items-center flex-row  w-full h-auto absolute left-0 top-[100%]`}>
        <div className="h-full flex justify-center items-center w-auto">
          <h3 className="text-base text-black text-center">
            <div className="flex justify-center items-center">Pages</div>
          </h3>
        </div>

        <input
          className="w-[300px] h-full border-2 p-2"
          type="text"
          value={customPrintInput}
          onChange={handleCustomPrintInputChange}
          placeholder="Enter custom print pages"
        />
      </div>
      <ul className={`${display ? "block " : "hidden "} dropdown-menu  bg-white border-[1px] z-50  border-black w-full absolute top-[100%] left-0 flex flex-col items-start cursor-pointer `}>
        {arrayProp.map((page, index) => (
          <li key={index} className="flex hover:bg-gray-400 bg-white w-full  flex-row gap-3" onClick={() => handleDisplayy(index)}>
            <img src={page.icon} className="w-[26px] ml-[8px] h-[26px] self-center object-cover" alt="Page Icon" />
            <div className="flex flex-col  roboto text-start min-h-[44px] justify-start items-start">
              <p className="w-full h-auto text-base font-extrabold text-black">{page.type}</p>
              <h3 className="w-full h-auto text-sm text-black">{page.text}</h3>
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



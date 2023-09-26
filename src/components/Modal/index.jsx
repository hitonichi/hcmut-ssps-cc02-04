/* eslint-disable */
import React, { useState } from 'react';
import icon from '../../assets/images/paper.png';
import onepage from '../../assets/images/1page.png';
import oddpage from '../../assets/images/odd.png';
import custom from '../../assets/images/custom.png';
import a4 from '../../assets/images/a4.png';
import a5 from '../../assets/images/a5.png';
import a3 from '../../assets/images/a3.png';
import letter from '../../assets/images/letter.png';
import tabloid from '../../assets/images/tabloid.png';
import landscape from '../../assets/images/landscape.png';
import portrait from '../../assets/images/portrait.png';
import oneside from '../../assets/images/1side.png';
import twosides from '../../assets/images/2sides.png';
import Dropdown from '../Dropdown/dropdown';
import PrintNum from './printNum';

const Index = () => {
  const [dropdownData, setDropdownData] = useState([
    {
      OneorTwo: [
        {
          type: 'Print one Sided',
          text: 'Print only on one side of the page',
          icon: oneside,
        },
        {
          type: 'Manually print on both sides',
          text: 'Reload paper to print the second side',
          icon: twosides,
        },
      ],
      display: false,
    },
    {
      printer: [
        {
          type: 'Portrait Orientation',
          text: '',
          icon: portrait,
        },
        {
          type: 'Landscape Orientation',
          text: '',
          icon: landscape,
        },
      ],
      display: false,
    },
    {
      printer: [
        {
          type: 'A3',
          text: "11.69'' x 16.54''",
          icon: a3,
        },
        {
          type: 'A4',
          text: "8.27'' x 11.69''",
          icon: a4,
        },
        {
          type: 'A5',
          text: "5.83'' x 8.27''",
          icon: a5,
        },
        {
          type: 'Letter',
          text: "8.5'' x 11''",
          icon: letter,
        },
        {
          type: 'Tabloid',
          text: "11'' x 17''",
          icon: tabloid,
        },
        // Add more sizes as needed
      ],
      display: false,
    },
    {
      printer: [
        {
          type: 'Print all pages',
          text: 'The whole thing',
          icon: icon,
        },
        {
          type: 'Print current page',
          text: 'Just this page',
          icon: onepage,
        },
        {
          type: 'Print odd pages only',
          text: 'Entire document: odd pages only',
          icon: oddpage,
        },
        {
          type: 'Print even pages only',
          text: 'Entire document: even pages only',
          icon: oddpage,
        },
        {
          type: 'Print custom pages',
          text: 'Type specific pages, sections, or ranges',
          icon: custom,
        },
      ],
      display: false,
    },
  ]);

  const [isCustomPrintSelected, setIsCustomPrintSelected] = useState(false);

  const handleDisplayDropdown = (index) => {
    const updatedDropdownData = dropdownData.map((data, i) => ({
      ...data,
      display: i === index ? !data.display : false,
    }));
    setDropdownData(updatedDropdownData);
  };

  return (
    <section className="flex h-screen w-screen items-center justify-center overflow-x-hidden">
      <div className="flex h-[700px] w-[1000px] flex-row gap-10 border-4 border-black">
        <div className="ml-[100px] mt-[100px] h-[70%] w-[40%] bg-white">
          <div className="flex h-full w-full flex-col gap-1">
            <div className="flex h-auto w-full">
              <p className="roboto text-start align-text-bottom text-2xl font-semibold text-blue-800">
                Settings
              </p>
            </div>
            {dropdownData.map((data, index) => (
              <Dropdown
                key={index}
                arrayProp={data.OneorTwo || data.printer}
                display={data.display}
                handleDisplay={() => handleDisplayDropdown(index)}
                setIsCustomPrintSelected={setIsCustomPrintSelected} // Pass the setter function here
              />
            ))}
            <div className="mt-3  flex h-auto w-[300px] flex-row items-end gap-5">
              <h4 className="roboto items-center text-base text-black">
                Copies
              </h4>
              <PrintNum />
            </div>
            <button className="button mt-10">Print</button>
          </div>
        </div>
        <div className="flex h-full w-[60%] flex-col">
          <div className="h-full w-full border-4 border-black"></div>
        </div>
      </div>
    </section>
  );
};

export default Index;

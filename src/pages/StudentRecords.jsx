import { mockData } from '../components/recordConstant';
import 'dayjs/locale/en';
import PaperSizeFilter from '../components/Records/paperSizeFilter';
import RecordTable from '../components/Records/recordTable';
import { PaperSize } from '../components/Records/inputForm';
import { StartDate } from '../components/Records/inputForm';
import { EndDate } from '../components/Records/inputForm';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
const StudentRecords = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const defaultPaperSize = searchParams.get('paperSize') || null;
  const defaultStartDate =
    searchParams.get('startDate') || null;
  const defaultEndDate =
    searchParams.get('endDate') || null;
  const handleClick = () => {
    console.log('PaperSize: ', defaultPaperSize);
    console.log('Start Date: ', defaultStartDate);
    console.log('End Date: ', defaultEndDate);
  };

  const widthValue = `calc(100vw - 80px)`;
  const countPages = (data, paperSize) => {
    let pageCount = 0;
    data.forEach((item) => {
      if (item.paperSize === paperSize) {
        pageCount += item.pageCount * item.printCount;
      }
    });
    return pageCount;
  };
  const totalCountA3 = countPages(mockData, 'A3');
  const totalCountA4 = countPages(mockData, 'A4');
  const totalCountA5 = countPages(mockData, 'A5');
  const [resetCounter, setResetCounter] = useState(0);

  const handleReset = () => {
    // Incrementing the counter triggers a reset in child components
    setResetCounter((prev) => prev + 1);
  };
  return (
    <div
      style={{ width: widthValue }}
      className="flex h-screen flex-col gap-[30px] overflow-hidden bg-primaryContainer py-[50px] pl-[40px] pr-[60px]"
    >
      <div className="flex h-[60px] w-full flex-row justify-between ">
        <h2 className="roboto ml-8 w-auto text-5xl font-bold text-black">
          Lịch sử in{' '}
        </h2>
      </div>
      <div className="flex w-full flex-row justify-between items-start">
        <div className="flex w-auto  rounded-lg flex-col bg-white h-[128px] justify-center items-center gap-2">
          <div className="ml-4 flex w-full flex-row gap-3 items-center h-auto  ">
            
            <PaperSize resetCounter={resetCounter} />
            <StartDate resetCounter={resetCounter} />
            
            <button
              onClick={handleClick}
              className="work h-[40px]  w-[126px] rounded-lg bg-customBlue px-2 py-1 text-sm font-bold  text-white"
            >
              Tìm kiếm
            </button>
            
          </div>
          <div className="ml-4 flex w-full flex-row gap-3 items-center h-auto  ">
            
            
            <EndDate resetCounter={resetCounter} />
            <div className='w-[200px]'></div>
            
            <button
              onClick={handleReset}
              className="work h-[40px]  w-[126px] rounded-lg bg-gray-800 px-2 py-1 text-sm  font-bold text-white"
            >
              Đặt lại
            </button>
          </div>
        </div>
        <PaperSizeFilter
          totalCountA3={totalCountA3}
          totalCountA4={totalCountA4}
          totalCountA5={totalCountA5}
        />
      </div>
      <RecordTable mockData={mockData} />
    </div>
  );
};

export default StudentRecords;

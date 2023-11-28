import { useSearchParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { PaperSize } from '../components/Records/inputForm';
import { StartDate } from '../components/Records/inputForm';
import { EndDate } from '../components/Records/inputForm';
import { mockData } from '../components/recordConstant';
import 'dayjs/locale/en';
import PaperSizeFilter from '../components/Records/paperSizeFilter';
import RecordTable from '../components/Records/recordTable';
import { StudentID } from '../components/Records/inputForm';
import { PaperMonth } from '../components/Records/inputForm';
import { PaperYear } from '../components/Records/inputForm';
import PreviewIcon from '@mui/icons-material/Preview';
import TodayIcon from '@mui/icons-material/Today';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import { DayCalendar } from '@mui/x-date-pickers/internals';
// import { YearCalendar } from '@mui/x-date-pickers';
const SPSORecords = () => {
  const location = useLocation();
  const searchParamss = new URLSearchParams(location.search);
  const defaultPaperSize = searchParamss.get('paperSize') || null;
  const defaultStartDate = searchParamss.get('startDate') || null;
  const defaultEndDate = searchParamss.get('endDate') || null;
  const defaultStudentID = searchParamss.get('StudentID') || null;
  const defaultselectMonth = searchParamss.get('month') || null;
  const defaultselectYear = searchParamss.get('year') || null;

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
  const [searchParams, setSearchParams] = useSearchParams();
  const widthValue = `calc(100vw - 80px)`;

  useEffect(() => {
    console.log('updage search params', searchParams, searchParams.get('type'));
  }, [searchParams]);
  const type = searchParams.get('type');
  const handleClick = () => {
    switch (type) {
      case 'general':
        console.log('StudentID: ', defaultStudentID);
        console.log('Size: ', defaultPaperSize);
        console.log('Start Date:', defaultStartDate);
        console.log('End date: ', defaultEndDate);
        break;
      case 'monthly':
        console.log('SelectedMonth: ', defaultselectMonth);
        console.log('Size: ', defaultPaperSize);
        break;
      case 'annual':
        console.log('SelectedYear: ', defaultselectYear);
        console.log('Size: ', defaultPaperSize);
        break;
    }
  };
  const [resetCounter, setResetCounter] = useState(0);

  const handleReset = () => {
    // Incrementing the counter triggers a reset in child components
    setResetCounter((prev) => prev + 1);
  };
  const [reset, setResetState] = useState(false);

  const renderRecordScreen = (type) => {
    switch (type) {
      case 'general':
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
            <div className="flex w-full flex-row items-start justify-between">
              <div className="grid grid-cols-[40%_40%_20%] flex-col items-center justify-center gap-x-2  rounded-lg bg-white px-5 py-4 ">
                <div className="flex h-full max-w-[200px] flex-col gap-2">
                  <StudentID
                    resetCounter={resetCounter}
                    setResetState={setResetState}
                  />
                  <StartDate
                    resetCounter={resetCounter}
                    setResetState={setResetState}
                  />
                </div>
                <div className="flex h-full max-w-[200px] flex-col gap-2">
                  <PaperSize
                    resetCounter={resetCounter}
                    setResetState={setResetState}
                  />
                  <EndDate
                    resetCounter={resetCounter}
                    setResetState={setResetState}
                  />
                </div>
                <div className="flex h-full flex-col gap-2">
                  <button
                    onClick={handleClick}
                    className="work h-[40px] rounded-lg bg-customBlue px-2 py-1 text-sm font-bold  text-white"
                  >
                    Tìm kiếm
                  </button>

                  <button
                    onClick={handleReset}
                    className={`work h-[40px]  rounded-lg bg-gray-800 px-2 py-1 text-sm  font-bold text-white ${
                      reset ? 'block' : 'hidden'
                    }`}
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
      case 'monthly':
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
            <div className="flex w-full flex-row items-start justify-between">
              <div className="grid grid-cols-[40%_40%_20%] flex-col items-center justify-center gap-x-2  rounded-lg bg-white px-5 py-4 ">
                <div className="flex h-full  w-[200px] flex-col gap-2">
                  <PaperMonth
                    resetCounter={resetCounter}
                    setResetState={setResetState}
                  />
                </div>
                <div className="flex h-full  w-[200px] flex-col gap-2">
                  <PaperSize
                    resetCounter={resetCounter}
                    setResetState={setResetState}
                  />
                </div>

                <div className="flex h-full   flex-col gap-2">
                  <button
                    onClick={handleClick}
                    className="work h-[40px]  rounded-lg bg-customBlue px-2 py-1 text-sm font-bold  text-white"
                  >
                    Tìm kiếm
                  </button>
                  <button
                    onClick={handleReset}
                    className={`work h-[40px]  rounded-lg bg-gray-800 px-2 py-1 text-sm  font-bold text-white ${
                      reset ? 'block' : 'hidden'
                    }`}
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
      case 'annual':
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
            <div className="flex w-full flex-row items-start justify-between">
              <div className=" grid grid-cols-[40%_40%_20%] flex-col items-center justify-center gap-x-2  rounded-lg bg-white px-5 py-4 ">
                <div className="flex h-full  w-[200px] flex-col gap-2">
                  <PaperYear
                    resetCounter={resetCounter}
                    setResetState={setResetState}
                  />
                </div>
                <div className="flex h-full  w-[200px] flex-col gap-2">
                  <PaperSize
                    resetCounter={resetCounter}
                    setResetState={setResetState}
                  />
                </div>
                <div className="flex h-full   flex-col gap-2">
                  <button
                    onClick={handleClick}
                    className="work h-[40px]  rounded-lg bg-customBlue px-2 py-1 text-sm font-bold  text-white"
                  >
                    Tìm kiếm
                  </button>
                  <button
                    onClick={handleReset}
                    className={`work h-[40px]  rounded-lg bg-gray-800 px-2 py-1 text-sm  font-bold text-white ${
                      reset ? 'block' : 'hidden'
                    }`}
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
      default:
        return (
          <>
            <div className='min-h-screen flex flex-col items-center justify-center align-center space-y-[40px] bg-primaryContainer '>
              <Button onClick={() => setSearchParams({ type: 'general' })}>
                <div className='grid grid-cols-4
                bg-customBlue hover:bg-blue-300 
                h-[100px] w-[396px] rounded-[20px] text-white' >  
                  <div className='flex justify-center items-center '>
                    <PreviewIcon/>
                  </div>                        
                  <div className='col-span-2 flex justify-self-start items-center text-sm font-semibold' >
                    View Student Records
                  </div>
                </div> 
              </Button>
              <Button onClick={() => setSearchParams({ type: 'monthly' })}>
                <div className='grid grid-cols-4
                  bg-customBlue hover:bg-blue-300 
                  h-[100px] w-[396px] rounded-[20px] text-white' >  
                    <div className='flex justify-center items-center '>
                      <TodayIcon/>
                    </div>                        
                    <div className='col-span-2 flex justify-self-start items-center text-sm font-semibold' >
                      View Monthly Records 
                    </div>
                </div>
              </Button>
              <Button onClick={() => setSearchParams({ type: 'annual' })}>
                <div className='grid grid-cols-4
                  bg-customBlue hover:bg-blue-300 
                  h-[100px] w-[396px] rounded-[20px] text-white' >  
                    <div className='flex justify-center items-center '>
                      <CalendarMonthIcon/>
                    </div>                        
                    <div className='col-span-2 flex justify-self-start items-center text-sm font-semibold' >
                      View Annual Records
                    </div>
                </div>
              </Button>
            </div>
          </>
        );
    }
  };

  return <div>{renderRecordScreen(searchParams.get('type'))}</div>;
};

export default SPSORecords;

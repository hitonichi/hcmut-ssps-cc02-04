import { useSearchParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PaperSize } from '../components/Records/inputForm';
import { StartDate } from '../components/Records/inputForm';
import { EndDate } from '../components/Records/inputForm';
import { mockData } from '../components/recordConstant';
import 'dayjs/locale/en';
import PaperSizeFilter from '../components/Records/paperSizeFilter';
import RecordTable from '../components/Records/recordTable';
import { StudentID } from '../components/Records/inputForm';
const SPSORecords = () => {
  const location = useLocation();
  const searchParamss = new URLSearchParams(location.search);
  const defaultPaperSize = searchParamss.get('paperSize');
  const defaultStartDate = searchParamss.get('startDate');
  const defaultEndDate = searchParamss.get('endDate');
  const defaultStudentID = searchParamss.get('StudentID');

  const handleClick = () => {
    console.log('Size: ', defaultPaperSize);
    console.log('Start Date:', defaultStartDate);
    console.log('End date: ', defaultEndDate);
    console.log('StudentID: ', defaultStudentID);
  };
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

  const renderRecordScreen = (type) => {
    switch (type) {
      case 'general':
        return (
          <div
            style={{ width: widthValue }}
            className="flex h-screen flex-col gap-[30px] overflow-hidden bg-primaryContainer py-[50px] pl-[40px] pr-[60px]"
          >
            <div className="flex h-[60px] w-full flex-row justify-between">
              <h2 className="roboto ml-8 w-[270px] text-5xl font-bold text-black">
                Lịch sử in{' '}
              </h2>
              <div className="flex w-[800px] flex-row justify-end ">
                <StudentID />
                <PaperSize />
                <StartDate />
                <EndDate />
                <button
                  onClick={handleClick}
                  className="work h-[56px]  w-[120px] bg-customBlue px-5 py-2 text-sm font-bold uppercase  text-white"
                >
                  tìm kiếm
                </button>
              </div>
            </div>
            <PaperSizeFilter
              totalCountA3={totalCountA3}
              totalCountA4={totalCountA4}
              totalCountA5={totalCountA5}
            />
            <RecordTable mockData={mockData} />
          </div>
        );
      case 'monthly':
        return <div>Viewing Monthly Records</div>;
      case 'annual':
        return <div>Viewing Annual Records</div>;
      default:
        return (
          <>
            <Button onClick={() => setSearchParams({ type: 'general' })}>
              View Student Records
            </Button>
            <Button onClick={() => setSearchParams({ type: 'monthly' })}>
              View Monthly Records
            </Button>
            <Button onClick={() => setSearchParams({ type: 'annual' })}>
              View Annual Records
            </Button>
          </>
        );
    }
  };

  return <div>{renderRecordScreen(searchParams.get('type'))}</div>;
};

export default SPSORecords;

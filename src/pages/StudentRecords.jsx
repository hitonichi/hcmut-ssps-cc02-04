import { mockData } from '../components/recordConstant';
import 'dayjs/locale/en';
import PaperSizeFilter from '../components/Records/paperSizeFilter';
import RecordTable from '../components/Records/recordTable';
import { PaperSize } from '../components/Records/inputForm';
import { StartDate } from '../components/Records/inputForm';
import { EndDate } from '../components/Records/inputForm';
import { useLocation } from 'react-router-dom';
const StudentRecords = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const defaultPaperSize = searchParams.get('paperSize');
  const defaultStartDate = searchParams.get('startDate');
  const defaultEndDate = searchParams.get('endDate');
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
};

export default StudentRecords;

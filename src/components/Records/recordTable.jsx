/* eslint-disable */ 
import { useState, useEffect } from 'react';
import { getRecords } from '../../services/records.service';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'; // Import UTC plugin for handling UTC dates
dayjs.extend(utc);
const recordTable = ({ paperSize, startDate, endDate }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getRecords().then((resData) => setData(resData));
  }, []);

  const filteredData = data.filter((row) => {
    const formatedStartDate = dayjs(startDate).startOf('day').utc(); // Assuming startDate is available
    const formatedEndDate = dayjs(endDate).endOf('day').utc();     // Assuming endDate is available
  
    const rowDate = dayjs(row.date).utc();
  
    const startDateCheck = rowDate.isAfter(formatedStartDate) || rowDate.isSame(formatedStartDate) || startDate === null;
    const endDateCheck = rowDate.isBefore(formatedEndDate) || rowDate.isSame(formatedEndDate) || endDate === null;
  
    const paperSizeCheck =
      paperSize === null || paperSize === 'all' || row.paperSize === paperSize;
  
    return paperSizeCheck && startDateCheck && endDateCheck;
  });

  console.log("dasddata",filteredData);
  return (
    <div className="scroll h-[625px] w-auto overflow-y-scroll rounded-lg bg-secondaryContainer text-base tracking-wide">
      <table className="w-full whitespace-nowrap">
        <thead className="sticky top-0">
          <tr className="roboto border-b bg-customBlue text-left font-bold text-white">
            <th className="px-4 py-3">Ngày in</th>
            <th className="px-4 py-3">Thời gian in</th>
            <th className="px-4 py-3">MSSV</th>
            <th className="px-4 py-3">In tại</th>
            <th className="px-4 py-3">Tên tài liệu</th>
            <th className="px-4 py-3">Khổ giấy</th>
            <th className="px-4 py-3">Số bản in</th>
            <th className="px-4 py-3">Số trang</th>
          </tr>
        </thead>
        <tbody className="roboto h-auto divide-y">
          {filteredData.map((row, index) => (
            <tr
              key={index}
              className="bg-white font-bold text-black hover:bg-primaryContainer"
            >
              <td className="px-4 py-3 ">{row.date}</td>
              <td className="px-4 py-3 ">dasdasd</td>
              <td className="px-4 py-3">{row.author}</td>
              <td className="px-4 py-3">{row.printer.location.building}</td>
              <td className="px-4 py-3">{row.fileName}</td>
              <td className="px-4 py-3">{row.paperSize}</td>
              <td className="px-4 py-3">{row.printCount}</td>
              <td className="px-4 py-3">{row.pageCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default recordTable;

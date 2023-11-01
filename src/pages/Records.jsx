import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormatSizeIcon from '@mui/icons-material/FormatSize'; // Example icon, import the icon you want to use
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { mockData } from '../components/recordConstant';
import dayjs from 'dayjs';
import 'dayjs/locale/en';
const Records = () => {
  const [paperSize, setPaperSize] = React.useState(null);
  const [startDate, setStartDate] = React.useState(dayjs());
  const [endDate, setEndDate] = React.useState(dayjs());
  const handleChange = (event) => {
    setPaperSize(event.target.value);
  };
  const startdate = startDate.format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
  const enddate = endDate.format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
  const handleClick = () => {
    console.log('Size: ', paperSize);
    console.log('Start Date:', startdate);
    console.log('End date: ', enddate);
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
      className="flex h-screen flex-col gap-[30px] overflow-hidden bg-primaryContainer py-[50px] pl-[40px] pr-[150px]"
    >
      <div className="flex h-[60px] w-full flex-row justify-between">
        <h2 className="roboto ml-8 w-[270px] text-5xl font-bold text-black">
          Lịch sử in{' '}
        </h2>
        <div className="flex w-[800px] flex-row justify-end ">
          <div className="h-full w-[200px]">
            <FormControl fullWidth>
              <InputLabel
                id="demo-simple-select-label"
                style={{ fontFamily: 'Work Sans, sans-serif' }}
              >
                Khổ giấy
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Khổ giấy"
                inputProps={{
                  startAdornment: <FormatSizeIcon />,
                }}
                value={paperSize}
                onChange={handleChange}
              >
                <MenuItem value={'A5'}>A5</MenuItem>
                <MenuItem value={'A4'}>A4</MenuItem>
                <MenuItem value={'A3'}>A3</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="h-full  w-[200px] -translate-y-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  label={<span className="work">Ngày bắt đầu</span>}
                  slotProps={{
                    textField: {
                      helperText: 'MM/DD/YYYY',
                    },
                  }}
                  value={startDate}
                  onChange={(newValue) => setStartDate(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="h-full  w-[200px] -translate-y-2">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  label={<span className="work">Ngày kết thúc</span>}
                  slotProps={{
                    textField: {
                      helperText: 'MM/DD/YYYY',
                    },
                  }}
                  value={endDate}
                  onChange={(newValue) => setEndDate(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <button
            className="work h-[56px]  w-[120px] bg-customBlue px-5 py-2 text-sm font-bold uppercase  text-white"
            onClick={handleClick}
          >
            tìm kiếm
          </button>
        </div>
      </div>
      <div className="roboto mx-4 flex h-[85px] w-[500px] flex-col bg-secondaryContainer">
        <div className="flex h-1/2 w-full flex-row bg-customBlue text-base font-bold text-white">
          <div className="flex w-[200px] items-center justify-start py-2 pl-4  ">
            Khổ giấy
          </div>
          <div className="flex h-full w-[100px] items-center justify-center ">
            A3
          </div>
          <div className="flex h-full w-[100px] items-center justify-center">
            A4
          </div>
          <div className="flex h-full w-[100px] items-center justify-center ">
            A5
          </div>
        </div>
        <div className="flex h-1/2 w-full flex-row text-base font-bold text-customBlue">
          {' '}
          <div className="flex w-[200px] items-center justify-start py-2 pl-4  ">
            Tổng số trang đã in{' '}
          </div>
          <div className=" flex h-full w-[100px] items-center justify-center  ">
            {totalCountA3}
          </div>
          <div className="flex h-full w-[100px] items-center justify-center ">
            {totalCountA4}
          </div>
          <div className="flex h-full w-[100px] items-center justify-center  ">
            {totalCountA5}
          </div>
        </div>
      </div>
      <div className="mx-4 h-[625px] w-full overflow-y-auto bg-secondaryContainer text-base tracking-wide">
        <table className="w-full whitespace-nowrap">
          <thead className="sticky top-0">
            <tr className="roboto border-b bg-customBlue text-left font-bold text-white">
              <th className="px-4 py-3">Ngày in</th>
              <th className="px-4 py-3">Thời gian in</th>
              <th className="px-4 py-3">MSSV</th>
              <th className="px-4 py-3">Máy in</th>
              <th className="px-4 py-3">Tên file</th>
              <th className="px-4 py-3">Khổ giấy</th>
              <th className="px-4 py-3">Số bản in</th>
              <th className="px-4 py-3">Số trang</th>
            </tr>
          </thead>
          <tbody className="roboto h-auto divide-y">
            {mockData.map((row, index) => (
              <tr key={index} className="text-customBlue">
                <td className="px-4 py-3 font-bold">{row.date}</td>
                <td className="px-4 py-3 font-bold">{row.time}</td>
                <td className="px-4 py-3">{row.studentID}</td>
                <td className="px-4 py-3">{row.printer}</td>
                <td className="px-4 py-3">{row.fileName}</td>
                <td className="px-4 py-3">{row.paperSize}</td>
                <td className="px-4 py-3">{row.printCount}</td>
                <td className="px-4 py-3">{row.pageCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Records;

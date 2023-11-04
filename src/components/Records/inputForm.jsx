import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormatSizeIcon from '@mui/icons-material/FormatSize'; // Example icon, import the icon you want to use
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import 'dayjs/locale/en';

export const PaperSize = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialPaperSize = searchParams.get('paperSize') || 'A3';
  const [paperSize, setPaperSize] = useState(initialPaperSize);

  const handleChange = (event) => {
    const newSize = event.target.value;
    setPaperSize(newSize);

    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set('paperSize', newSize);
    window.history.replaceState(null, '', `?${newSearchParams.toString()}`);
    window.dispatchEvent(new Event('popstate'));
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const initialPaperSize = searchParams.get('paperSize') || 'A3';
    setPaperSize(initialPaperSize);
  }, []);

  return (
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
  );
};

export const PaperMonth = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialPaperSize = searchParams.get('month') || 'Tháng Một';
  const [month, setPaperSize] = useState(initialPaperSize);

  const handleChange = (event) => {
    const newSize = event.target.value;
    setPaperSize(newSize);

    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set('month', newSize);
    window.history.replaceState(null, '', `?${newSearchParams.toString()}`);
    window.dispatchEvent(new Event('popstate'));
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const initialPaperSize = searchParams.get('month') || 'Tháng Một';
    setPaperSize(initialPaperSize);
  }, []);

  return (
    <div className="h-full w-[200px]">
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          style={{ fontFamily: 'Work Sans, sans-serif' }}
        >
          Chọn tháng
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Chọn tháng"
          inputProps={{
            startAdornment: <FormatSizeIcon />,
          }}
          value={month}
          onChange={handleChange}
        >
          <MenuItem value={'Tháng Một'}>Tháng Một</MenuItem>
          <MenuItem value={'Tháng Hai'}>Tháng Hai</MenuItem>
          <MenuItem value={'Tháng Ba'}>Tháng Ba</MenuItem>
          <MenuItem value={'Tháng Tư'}>Tháng Tư</MenuItem>
          <MenuItem value={'Tháng Năm'}>Tháng Năm</MenuItem>
          <MenuItem value={'Tháng Sáu'}>Tháng Sáu</MenuItem>
          <MenuItem value={'Tháng Bảy'}>Tháng Bảy</MenuItem>
          <MenuItem value={'Tháng Tám'}>Tháng Tám</MenuItem>
          <MenuItem value={'Tháng Chín'}>Tháng Chín</MenuItem>
          <MenuItem value={'Tháng Mười'}>Tháng Mười</MenuItem>
          <MenuItem value={'Tháng Mười Một'}>Tháng Mười Một</MenuItem>
          <MenuItem value={'Tháng Mười Hai'}>Tháng Mười Hai</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export const PaperYear = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialPaperSize = searchParams.get('year') || '2023';
  const [year, setPaperSize] = useState(initialPaperSize);

  const handleChange = (event) => {
    const newSize = event.target.value;
    setPaperSize(newSize);

    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set('year', newSize);
    window.history.replaceState(null, '', `?${newSearchParams.toString()}`);
    window.dispatchEvent(new Event('popstate'));
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const initialPaperSize = searchParams.get('year') || '2023';
    setPaperSize(initialPaperSize);
  }, []);

  return (
    <div className="h-full w-[200px]">
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          style={{ fontFamily: 'Work Sans, sans-serif' }}
        >
          Chọn năm
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Chọn năm"
          inputProps={{
            startAdornment: <FormatSizeIcon />,
          }}
          value={year}
          onChange={handleChange}
        >
          <MenuItem value={'2023'}>2023</MenuItem>
          <MenuItem value={'2022'}>2022</MenuItem>
          <MenuItem value={'2021'}>2021</MenuItem>
          <MenuItem value={'2020'}>2020</MenuItem>
          <MenuItem value={'2019'}>2019</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};
export const StartDate = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialStartDate =
    searchParams.get('startDate') || dayjs().format('YYYY-MM-DD');
  const [startDate, setStartDate] = useState(dayjs(initialStartDate));

  const handleChange = (newValue) => {
    setStartDate(newValue);

    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set('startDate', newValue.format('YYYY-MM-DD'));
    window.history.replaceState(null, '', `?${newSearchParams.toString()}`);
    window.dispatchEvent(new Event('popstate'));
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const initialStartDate =
      searchParams.get('startDate') || dayjs().format('YYYY-MM-DD');
    setStartDate(dayjs(initialStartDate));
  }, []);
  return (
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
            onChange={handleChange}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};
export const EndDate = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialStartDate =
    searchParams.get('endDate') || dayjs().format('YYYY-MM-DD');
  const [endDate, setEndDate] = useState(dayjs(initialStartDate));

  const handleChange = (newValue) => {
    setEndDate(newValue);

    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set('endDate', newValue.format('YYYY-MM-DD'));
    window.history.replaceState(null, '', `?${newSearchParams.toString()}`);
    window.dispatchEvent(new Event('popstate'));
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const initialEndDate =
      searchParams.get('endDate') || dayjs().format('YYYY-MM-DD');
    setEndDate(dayjs(initialEndDate));
  }, []);
  return (
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
            onChange={handleChange}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};
export const StudentID = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const initialStudentID = searchParams.get('StudentID');
  const [StudentID, setStudentID] = useState(initialStudentID);

  const handleChange = (event) => {
    const newStudentID = event.target.value;
    setStudentID(StudentID);

    const newSearchParams = new URLSearchParams(window.location.search);
    newSearchParams.set('StudentID', newStudentID);
    window.history.replaceState(null, '', `?${newSearchParams.toString()}`);
    window.dispatchEvent(new Event('popstate'));
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const initialStudentID = searchParams.get('StudentID');
    setStudentID(initialStudentID);
  }, []);

  return (
    <div className="h-full w-[200px]">
      <TextField
        id="outlined-basic"
        label="MSSV"
        variant="outlined"
        value={StudentID}
        onChange={handleChange}
      />
    </div>
  );
};

import { useEffect } from 'react';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormatSizeIcon from '@mui/icons-material/FormatSize';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

import 'dayjs/locale/en';

export const PaperSize = ({ resetCounter,setResetState }) => {
  const [paperSize, setPaperSize] = useState(null);
  useEffect(() => {
    setPaperSize('');
    setTimeout(() => {
      setPaperSize(null);
    }, 0);
  }, [resetCounter]);
  useEffect(() => {
    if (paperSize !== null && paperSize !== '') {
    setResetState(true);
  }
  else setResetState(false);
}, [paperSize, setResetState]); 

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
  PaperSize.propTypes = {
    resetCounter: PropTypes.bool.isRequired,
    setResetState: PropTypes.bool.isRequired,
  };
  

  return (
    <div className="w-[200px]">
      <FormControl fullWidth>
        <InputLabel
          id="demo-simple-select-label"
          style={{
            fontFamily: 'Work Sans, sans-serif',
          }}
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
          size="small"
        >
          <MenuItem value={null}>None</MenuItem>
          <MenuItem value={'A5'}>A5</MenuItem>
          <MenuItem value={'A4'}>A4</MenuItem>
          <MenuItem value={'A3'}>A3</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export const PaperMonth = ({ resetCounter,setResetState }) => {
  const [month, setPaperSize] = useState(null);
  useEffect(() => {
    setPaperSize('');
    setTimeout(() => {
      setPaperSize(null);
    }, 0);
  }, [resetCounter]);
  useEffect(() => {
    if (month !== null && month !== '') {
    setResetState(true);
  }
  else setResetState(false);
}, [month, setResetState]); 

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
  PaperMonth.propTypes = {
    resetCounter: PropTypes.bool.isRequired, 
    setResetState: PropTypes.bool.isRequired,
  };

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
          size="small"
        >
          <MenuItem value={null}>None</MenuItem>
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
export const PaperYear = ({ resetCounter,setResetState }) => {
  const [year, setPaperSize] = useState(null);
  useEffect(() => {
    setPaperSize('');
    setTimeout(() => {
      setPaperSize(null);
    }, 0);
  }, [resetCounter]);
  useEffect(() => {
    if (year !== null && year !== '') {
    setResetState(true);
  }
  else setResetState(false);
}, [year, setResetState]); 

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
  PaperYear.propTypes = {
    resetCounter: PropTypes.bool.isRequired, 
    setResetState: PropTypes.bool.isRequired,
  };

  return (
    <div className="h-[44px] w-[200px]">
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
          size="small"
        >
          <MenuItem value={null}>None</MenuItem>
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
export const StartDate = ({ resetCounter,setResetState }) => {
  const [startDate, setStartDate] = useState(null);
  useEffect(() => {
    setStartDate('');
    setTimeout(() => {
      setStartDate(null);
    }, 0);
  }, [resetCounter]);
  useEffect(() => {
    if (startDate !== null && startDate !== '') {
    setResetState(true);
  }
  else setResetState(false);
}, [startDate, setResetState]); 

  const handleChange = (newValue) => {
    setStartDate(newValue);

    const newSearchParams = new URLSearchParams(window.location.search);
    if (newValue) {
      newSearchParams.set('startDate', newValue.format('YYYY-MM-DD'));
    } else {
      newSearchParams.delete('startDate');
    }

    window.history.replaceState(null, '', `?${newSearchParams.toString()}`);
    window.dispatchEvent(new Event('popstate'));
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const initialStartDate = searchParams.get('startDate') || null;
    setStartDate(initialStartDate ? dayjs(initialStartDate) : null);
  }, []);
  StartDate.propTypes = {
    resetCounter: PropTypes.bool.isRequired,
    setResetState: PropTypes.bool.isRequired, // Add this prop type validation
  };
  return (
    <div className="h-[44px] w-[200px] ">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            label={<span className="work">Ngày bắt đầu</span>}
            value={startDate}
            onChange={handleChange}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};

export const EndDate = ({ resetCounter,setResetState }) => {
  const [endDate, setEndDate] = useState(null);
  useEffect(() => {
    setEndDate('');
    setTimeout(() => {
      setEndDate(null);
    }, 0);
  }, [resetCounter]);
  useEffect(() => {
    if (endDate !== null && endDate !== '') {
    setResetState(true);
    }
    else setResetState(false);
}, [endDate, setResetState]); 

  const handleChange = (newValue) => {
    setEndDate(newValue);

    const newSearchParams = new URLSearchParams(window.location.search);
    if (newValue) {
      newSearchParams.set('endDate', newValue.format('YYYY-MM-DD'));
    } else {
      newSearchParams.delete('endDate');
    }

    window.history.replaceState(null, '', `?${newSearchParams.toString()}`);
    window.dispatchEvent(new Event('popstate'));
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const initialEndDate = searchParams.get('endDate') || null;
    setEndDate(initialEndDate ? dayjs(initialEndDate) : null);
  }, []);
  EndDate.propTypes = {
    resetCounter: PropTypes.bool.isRequired,
    setResetState: PropTypes.bool.isRequired,
  };

  return (
    <div className="h-[44px] w-[200px] ">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker
            label={<span className="work">Ngày kết thúc</span>}
            value={endDate}
            onChange={handleChange}
            size="small"
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
};

export const StudentID = ({ resetCounter,setResetState }) => {
  const initialStudentID = null;
  const [studentID, setStudentID] = useState(initialStudentID);

  useEffect(() => {
    setStudentID('');
    setTimeout(() => {
      setStudentID(null);
    }, 0);
  }, [resetCounter]);
  useEffect(() => {
      if (studentID !== null && studentID !== '') {
      setResetState(true);
    }
    else setResetState(false);
  }, [studentID, setResetState]); 

  const handleChange = (event) => {
    const newStudentID = event.target.value;
    setStudentID(newStudentID);

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
  StudentID.propTypes = {
    resetCounter: PropTypes.bool.isRequired,
    setResetState: PropTypes.bool.isRequired,
  };

  return (
    <div className="w-[200px]">
      <TextField
        id="justatee"
        label="MSSV"
        variant="outlined"
        value={studentID}
        onChange={handleChange}
        size="small"
      />
    </div>
  );
};

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
const Records = () => {
  const [paperSize, setPaperSize] = React.useState(null);
  const [startDate, setStartDate] = React.useState(null);
  const [endDate, setEndDate] = React.useState(null);
  const handleChange = (event) => {
    setPaperSize(event.target.value);
  };
  return (
    <div className="flex h-screen w-screen flex-col gap-[40px] overflow-hidden bg-green-200 pl-[40px] pr-[150px] py-[50px]">
      <div className="flex h-[80px] w-full flex-row justify-between">
        <h2 className="text-bold roboto ml-8 w-[200px] text-3xl text-black">
          Lịch sử in{' '}
        </h2>
        <div className="flex w-[800px] flex-row justify-end gap-3">
          <div className="h-full w-[200px]">
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Khổ giấy</InputLabel>
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
                  label="Ngày bắt đầu"
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
                  label="Ngày kết thúc"
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
        </div>
      </div>
      <div className="h-[80px] w-[500px]"></div>
      <div className="h-full w-full bg-blue-200 mx-4"></div>
    </div>
  );
};

export default Records;

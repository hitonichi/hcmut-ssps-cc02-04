// import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
// import { current } from '@reduxjs/toolkit';
import { useState } from 'react';
// import handle

const mockData = [
  { name: 'pdf', permitted: true },
  { name: 'doc', permitted: false },
  { name: 'docx', permitted: false },
  { name: 'xls', permitted: true },
  { name: 'ttf', permitted: false },
  { name: 'md', permitted: true },
  { name: 'html', permitted: false },
];

const AllowedFormatForm = () => {
  const [formData, setFormData] = useState(mockData);

  const handleSave = () => {
    console.log(formData);
  }

  const handleCheckboxChange = (name) => (event) => {
    const updatedFormData = formData.map((data) => {
      if (data.name === name) {
        return { ...data, permitted: event.target.checked };
      }
      return data;
    });
    setFormData(updatedFormData);
  }

  return (
    <>
      <div className="ml-[10%] flex h-full flex-col">
        {formData.map((data) => (
          <FormControlLabel
            key={data.name}
            control={
              <Checkbox
                checked={data.permitted}
                onChange={handleCheckboxChange(data.name)}
                name={data.name}
                color="primary"
              />
            }
            label={data.name}
          />
        ))}
      </div>
      <Button
        variant="contained"
        onClick={handleSave}
        sx={{
          borderRadius: 20,
          backgroundcolor: '#4061A3',
          width: 100,
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontWeight: 'bold', color: 'white', textTransform: 'none' }}
        >
          Lưu
        </Typography>
      </Button>
    </>
  );
};

export default AllowedFormatForm;

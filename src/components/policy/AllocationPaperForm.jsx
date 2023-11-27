import { useState } from 'react';
// import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';
import { Button } from '@mui/material';
import NumberInput from '../Input/NumberInputBasic';
const AllocationPageForm = () => {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState('');

  const handleSave = () => {
    if (value >= 1 && value <= 100) {
      setIsValid(true);
      setTimeout(() => {
        setMessage('Cập nhật thành công');
      }, 10);
      setTimeout(() => {
        setMessage('');
      }, 2000);
    } else {
      setIsValid(false);
      setMessage('Có lỗi xảy ra.');
    }
  };

  return (
    <>
      {/* <div>Modifying default allocated paper</div> */}
      <div>
        <div className="ml-10 mr-10 mt-10 flex flex-col items-center justify-center">
          <NumberInput
            aria-label="Number input"
            placeholder="Nhập số trang"
            value={value}
            min={1}
            // max={100}
            onChange={(event, val) => setValue(val)}
          />
          {message && (
            <p className={`mb-2 ${isValid ? 'text-blue-800' : 'text-red-500'}`}>
              {message}
            </p>
          )}
        </div>
        <div className="mt-10 flex flex-col items-center justify-center">
          <p className={`mb-2 text-yellow-500`}>Số trang hiện tại là</p>
          <Button
            variant="contained"
            onClick={handleSave}
            sx={{
              borderRadius: 20,
              backgroundcolor: '#4061A3',
              width: 100,
            }}
          >
            {' '}
            Lưu{' '}
          </Button>
        </div>
      </div>
    </>
  );
};

export default AllocationPageForm;

import * as React from 'react';

import Modal from '@mui/material/Modal';


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className='w-[132px] h-[56px] font-bold rounded-lg text-white bg-green-700 flex justify-center items-center px-4 py-2 cursor-pointer' onClick={handleOpen}>Thêm máy in</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='w-[900px] h-[733px] bg-white border-black border-2 absolute -translate-x-[50%] -translate-y-[50%] top-1/2 left-1/2'></div>
       
      </Modal>
    </div>
  );
}
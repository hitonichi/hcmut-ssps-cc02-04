import * as React from 'react';

import Modal from '@mui/material/Modal';
import { PrinterName,PrinterBuilding } from '../Records/inputForm';
export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div
        className="flex h-[56px] w-[132px] cursor-pointer items-center justify-center rounded-lg bg-green-700 px-4 py-2 font-bold text-white"
        onClick={handleOpen}
      >
        Thêm máy in
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute rounded-t-[26px] left-1/2 top-1/2 flex h-[733px] w-[900px] -translate-x-[50%] -translate-y-[50%] flex-col bg-white">
<div className='w-full h-[72px] rounded-t-[26px] flex justify-center items-center bg-customBlue '>
  <h1 className='text-3xl text-white w-auto h-auto font-bold' >Thêm máy in</h1>
   </div>
   <div className='w-full h-[590px] pt-10 pl-10 gap-7  flex flex-col'>
<h2 className='w-auto h-auto text-start text-black text-2xl font-bold' >Thông số máy in  </h2>
<div className='w-full pr-[100px] flex flex-row justify-between'>
  <h2 className='w-auto h-auto text-xl text-black'>Tên</h2>
  <PrinterName />
  
</div>
<div className='w-full pr-[100px] flex flex-row justify-between'>
  <h2 className='w-auto h-auto text-xl text-black'>Cơ sở</h2>
  <PrinterBuilding />
</div>


   </div>











        </div>
      </Modal>
    </div>
  );
}

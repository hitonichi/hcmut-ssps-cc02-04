import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  PrinterName,
  PrinterBuilding,
  BranchPrinter,
  PrintingType,
  PrintingStatus,
  MaxSizeFormat,
} from '../Records/inputForm';
import { addPrinter } from '../../services';
export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const defaultStatus = searchParams.get('PrintingStatus');
  const defaultBuilding = searchParams.get('PrinterBuilding') || '';
  const maxSizeFormat = searchParams.get('MaxSizeFormat');
  const defaultBranch = searchParams.get('BranchPrinter');
  const defaultPrintingType = searchParams.get('PrintingType');
  const defaultPrinterName = searchParams.get('PrinterName') || '';

  console.log('name', defaultPrinterName);
  console.log('branch', defaultBranch);
  console.log('build', defaultBuilding);
  console.log('size', maxSizeFormat);
  console.log('enable', defaultStatus);
  console.log('onesided', defaultPrintingType);
  const handleOpen = () => {
    setOpen(true);
    searchParams.set('BranchPrinter', defaultBranch);
    searchParams.set('PrintingStatus', defaultStatus);
    searchParams.set('PrinterBuilding', defaultBuilding);
    searchParams.set('PrinterName', defaultPrinterName);
    searchParams.set('MaxSizeFormat', maxSizeFormat);
    searchParams.set('PrintingType', defaultPrintingType);
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  const handleClose = () => {
    setOpen(false);
    searchParams.delete('BranchPrinter');
    searchParams.delete('PrintingStatus');
    searchParams.delete('PrinterBuilding');
    searchParams.delete('PrinterName');
    searchParams.delete('MaxSizeFormat');
    searchParams.delete('PrintingType');
    navigate(`${location.pathname}`);
  };

  const newData = {
    name: defaultPrinterName,
    location: {
      branch: defaultBranch,
      building: defaultBuilding,
    },
    maxSize: maxSizeFormat,
    enabled: defaultStatus == 'Được kích hoạt' ? true : false,
    oneSided: defaultPrintingType == 'Một mặt' ? true : false,
  };
  const handlePublish = (newData) => {
    addPrinter(newData);
  };

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
        <div className="absolute left-1/2 top-1/2 flex h-[733px] w-[900px] -translate-x-[50%] -translate-y-[50%] flex-col rounded-[26px] bg-white">
          <div className="flex h-[72px] w-full items-center justify-center rounded-t-[26px] bg-customBlue ">
            <h1 className="h-auto w-auto text-3xl font-bold text-white">
              Thêm máy in
            </h1>
          </div>
          <div className="flex h-[590px] w-full flex-col gap-7  pl-10 pt-10">
            <h2 className="h-auto w-auto text-start text-2xl font-bold text-black">
              Thông số máy in{' '}
            </h2>
            <div className="flex w-full flex-row justify-between pr-[200px]">
              <h2 className="h-auto w-auto text-xl text-black">Tên</h2>
              <PrinterName />
            </div>
            <div className="flex w-full flex-row justify-between pr-[255px]">
              <h2 className="h-auto w-auto text-xl text-black">Cơ sở</h2>
              <BranchPrinter />
            </div>
            <div className="flex w-full flex-row justify-between pr-[200px]">
              <h2 className="h-auto w-auto text-xl text-black">Tòa nhà</h2>
              <PrinterBuilding />
            </div>
            <div className="flex w-full flex-row justify-between pr-[195px]">
              <h2 className="h-auto w-auto text-xl text-black">Kiểu in</h2>
              <PrintingType />
            </div>
            <div className="flex w-full flex-row justify-between pr-[205px]">
              <h2 className="h-auto w-auto text-xl text-black">Kiểu in</h2>
              <MaxSizeFormat />
            </div>
            <div className="flex w-full flex-row justify-between pr-[118px]">
              <h2 className="h-auto w-auto text-xl text-black">Trạng thái</h2>
              <PrintingStatus />
            </div>
          </div>
          <div className="flex h-[72px] w-full flex-row items-center justify-end gap-[20px] border-t-2 border-customBlue pr-[30px]">
            <div
              className="flex h-[40px] w-[120px] cursor-pointer items-center justify-center rounded-3xl border-2 border-customBlue bg-white px-3 py-2 text-center text-lg font-semibold text-customBlue hover:border-none hover:bg-customBlue hover:text-white"
              onClick={() => {
                handleClose();
              }}
            >
              Quay lại
            </div>
            <div
              onClick={() => {
                handlePublish(newData);
              }}
              className="flex h-[40px] w-[120px] cursor-pointer items-center justify-center rounded-3xl bg-customBlue px-3 py-2 text-center text-lg font-semibold text-white hover:border-2 hover:border-customBlue hover:bg-white hover:text-customBlue"
            >
              Tiếp tục
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

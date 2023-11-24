import { useParams } from 'react-router';
import { printerData } from '../components/recordConstant';
import { useEffect, useState } from 'react';
import printer from '../assets/icon/printer.png';
const PrinterInformation = () => {
  const { printerId } = useParams();
  const [selectedPrinter, setSelectedPrinter] = useState(null);

  useEffect(() => {
    // Find the printer with the matching ID
    const foundPrinter = printerData.find(
      (printer) => printer.printerID === printerId,
    );

    // Update the state with the selected printer
    setSelectedPrinter(foundPrinter);
  }, [printerId]);

  if (!selectedPrinter) return null;


  return (
    <div className="flex h-screen flex-col gap-[30px] overflow-hidden bg-primaryContainer py-[50px] pl-[40px] pr-[60px]">
      <div className="flex h-[60px] w-auto flex-row items-center justify-start">
        <div className="h-[30px] w-[30px]">
          <img className="object-contain"></img>
        </div>
        <h2 className="roboto w-auto text-5xl font-bold text-black">
          Thông tin chi tiết{' '}
        </h2>
      </div>
      <div className="flex-col flex h-[232px] w-[475px] bg-white rounded-lg">
        <div className="flex h-[176px] w-full flex-row justify-center items-center gap-4 px-5 pt-4">
          <div className="aspect-square h-auto w-[144px]">
            <img className="h-full w-full object-contain" src={printer}></img>
          </div>
          <div className="flex h-full flex-col w-full items-center justify-start gap-2">
            <h1 className="font-extrabold w-full text-2xl text-black">
              {selectedPrinter.printer}
            </h1>
            <div className="flex w-full flex-row justify-between">
              <h2 className='text-xl text-black font-semibold'>Vị trí:</h2>
              <h2 className='text-xl text-black font-normal'>{selectedPrinter.location}</h2>
            </div>
            <div className="flex w-full flex-row justify-between">
              <h2 className='text-xl text-black font-semibold'>Kích thước cho phép:</h2>
              <h2 className='text-xl text-black font-normal'>{selectedPrinter.allowedFormat}</h2>
            </div>
            <div className="flex w-full flex-row justify-between">
              <h2 className='text-xl text-black font-semibold'>Trạng thái:</h2>
              <h2 className='text-xl text-black font-normal'>{selectedPrinter.status}</h2>
            </div>
            
          </div>
        </div>
        <div className='w-full h-[56px] border-black flex justify-end items-center border-t-[1px] px-2 py-1'>
          <div className='w-[178px] h-[40px] p-2 bg-customBlue cursor-pointer rounded-lg flex justify-center items-center text-center '>
            <h3 className='w-auto text-white font-bold text-base  '>Vô hiệu hóa máy in</h3>

          </div>

        </div>
      </div>
      This is Printer Info Page: Printer ID: {printerId}
    </div>
  );
};

export default PrinterInformation;

import { useParams } from 'react-router';
import { printerData } from '../components/recordConstant';
import RecordTable from '../components/Records/recordTable';
import { useEffect, useState } from 'react';
import printer from '../assets/icon/printer.png';
import { mockData } from '../components/recordConstant';
const PrinterInformation = () => {
  const { printerId } = useParams();
  const [selectedPrinter, setSelectedPrinter] = useState(null);
  const [active, setActive] = useState(false);
  const handleButton = () => {
    setActive(!active);
  };
  useEffect(() => {
    const foundPrinter = printerData.find(
      (printer) => printer.printerID === printerId,
    );
    setSelectedPrinter(foundPrinter);
    setActive(foundPrinter?.status === 'enabled');
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
      <div className="flex h-[232px] w-[475px] flex-col rounded-lg bg-white">
        <div className="flex h-[176px] w-full flex-row items-center justify-center gap-4 px-5 pt-4 mb-2">
          <div className="aspect-square h-auto w-[144px]">
            <img className="h-full w-full object-contain" src={printer}></img>
          </div>
          <div className="flex h-full w-full flex-col items-center justify-start gap-2">
            <h1 className="w-full text-2xl font-extrabold text-black">
              {selectedPrinter.printer}
            </h1>
            <div className="flex w-full flex-row justify-between">
              <h2 className="text-xl font-semibold text-black">Vị trí:</h2>
              <h2 className="text-xl font-normal text-black">
                {selectedPrinter.location}
              </h2>
            </div>
            <div className="flex w-full flex-row justify-between">
              <h2 className="text-xl font-semibold text-black">
                Kích thước cho phép:
              </h2>
              <h2 className="text-xl font-normal text-black">
                {selectedPrinter.allowedFormat}
              </h2>
            </div>
            <div className="flex w-full flex-row justify-between">
              <h2 className="text-xl font-semibold text-black">Trạng thái:</h2>
              <h2
                className={`flex w-auto  items-center justify-center rounded-2xl px-3 py-1 text-base  font-normal text-white ${
                  active ? 'bg-green-700' : 'bg-red-700'
                }`}
              >
                {active ? 'Khả dụng' : 'Không khả dụng'}
              </h2>
            </div>
          </div>
        </div>
        <div className="flex h-[56px] w-full items-center justify-end border-t-[1px] border-black px-2 py-1">
          <div className="flex h-[40px] w-auto cursor-pointer items-center justify-center rounded-lg bg-customBlue p-2 text-center ">
            <h3
              className="w-auto text-base font-bold text-white"
              onClick={handleButton}
            >
              {active ? 'Vô hiệu hóa máy in' : 'Kích hoạt máy in'}
            </h3>
          </div>
        </div>
      </div>
      <RecordTable mockData={mockData} />
    </div>
  );
};

export default PrinterInformation;
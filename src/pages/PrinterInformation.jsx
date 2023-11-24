import { useParams } from 'react-router';
import { printerData } from '../components/recordConstant';
import { useEffect, useState } from 'react';
import logoutIcon from '../../assets/icon/logout.png';
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

  return (
    <div className="flex h-screen flex-col gap-[30px] overflow-hidden bg-primaryContainer py-[50px] pl-[40px] pr-[60px]">
      <div className="flex h-[60px] w-auto flex-row items-center justify-start">
        <div className='w-[30px] h-[30px]'>
          <img className='object-cover' src={logoutIcon}></img>
        </div>
        <h2 className="roboto w-auto text-5xl font-bold text-black">
          Thông tin chi tiết{' '}
        </h2>
      </div>
      <div className="flex-cols flex h-[200px] w-[475px] bg-white">
        <div className="text-2xl text-white">{selectedPrinter.printer}</div>
      </div>
      This is Printer Info Page: Printer ID: {printerId}
    </div>
  );
};

export default PrinterInformation;

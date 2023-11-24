import { useParams } from 'react-router';

const PrinterInformation = (printer) => {
  const { printerId } = useParams();
  if (!printer || printer.length === 0) {
    return null;
  }
  const printerr = printer[printerId];

  return (
    <div className="h-[100vh] bg-slate-300">
      <div className="flex h-[60px] w-full flex-row justify-between ">
        <h2 className="roboto ml-8 w-auto text-5xl font-bold text-black">
          Thông tin chi tiết{' '}
        </h2>
      </div>
      <div className="flex h-[200px] w-[400px] flex-cols bg-black">
        <div className="text-white text-2xl">{printerr.location}</div>




      </div>
      


      This is Printer Info Page: Printer ID: {printerId}
    </div>
  );
};

export default PrinterInformation;

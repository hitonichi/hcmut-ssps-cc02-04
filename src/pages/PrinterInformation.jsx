import { useParams } from 'react-router';

const PrinterInformation = () => {
  const { printerId } = useParams();

  return (
    <div className="h-[100vh] bg-slate-300">
      {/* TODO: implemnt printer list here */}
      This is Printer Info Page: Printer ID: {printerId}
    </div>
  );
};

export default PrinterInformation;

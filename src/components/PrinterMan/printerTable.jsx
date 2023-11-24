import { HashLink } from 'react-router-hash-link';

const printerTable = ({ mockData }) => {
  return (
    <div className="scroll h-[625px] w-auto overflow-y-scroll rounded-lg bg-secondaryContainer text-base tracking-wide">
      <table className="w-full whitespace-nowrap">
        <thead className="sticky top-0">
          <tr className="roboto border-b bg-customBlue text-left font-bold text-white">
            <th className="px-4 py-3">ID</th>
            <th className="px-4 py-3">Vị trí</th>
            <th className="px-4 py-3">Máy in</th>
            <th className="px-4 py-3">Lần in cuối cùng</th>
            <th className="px-4 py-3">Khổ giấy cho phép</th>
            <th className="px-4 py-3">Trạng thái</th>
          </tr>
        </thead>
        <tbody className="roboto h-auto divide-y">
          {mockData.map((row, index) => (
            <HashLink
              key={index}
              to={`${row.printerID}`}
              className="tr bg-white font-bold text-black hover:bg-primaryContainer"
            >
              <td className="px-4 py-3">{row.printerID}</td>
              <td className="px-4 py-3">{row.location}</td>
              <td className="px-4 py-3">{row.printer}</td>
              <td className="px-4 py-3">{row.lastPrintTime}</td>
              <td className="px-4 py-3">{row.allowedFormat}</td>
              <td className="px-4 py-3  max-w-[200px]">
                <h2
                  className={`flex   items-center justify-center rounded-2xl px-3 py-1 text-base  font-normal text-white ${
                    row.status == 'enabled' ? 'bg-green-700 w-[92px]' : 'bg-red-700 w-[141px]'
                  }`}
                >
                  {row.status === 'enabled' ? 'Khả dụng' : 'Không khả dụng'}
                </h2>
              </td>
            </HashLink>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default printerTable;

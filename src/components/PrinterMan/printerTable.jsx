import { HashLink } from 'react-router-hash-link';
import { getPrinter } from '../../services';
import { useState, useEffect } from 'react';

const printerTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPrinter().then((resData) => setData(resData));
  }, []);
  console.log('data ', data);
  console.log('type ', typeof data);

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
          {data.map((row, index) => (
            <HashLink
              key={index}
              to={`${row._id}`}
              className="tr bg-white font-bold text-black hover:bg-primaryContainer"
            >
              <td className="px-4 py-3">{row._id}</td>
              <td className="px-4 py-3">{row.location.branch}</td>
              <td className="px-4 py-3">{row.name}</td>
              <td className="px-4 py-3">{row.lastUsed}</td>
              <td className="px-4 py-3">{row.maxSize}</td>
             
              <td className="max-w-[200px] px-4  py-3">
                <h2
                  className={`px-3s   flex items-center justify-center rounded-2xl py-1 text-base  font-normal text-white ${
                    row.enabled
                      ? 'w-[112px] bg-green-700'
                      : 'w-[161px] bg-red-700'
                  }`}
                >
                  {row.enabled ? 'Khả dụng' : 'Không khả dụng'}
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

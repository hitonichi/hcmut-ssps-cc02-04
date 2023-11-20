const recordTable = ({ mockData }) => {
  return (
    <div className="scroll h-[625px] w-auto overflow-y-scroll rounded-lg bg-secondaryContainer text-base tracking-wide">
      <table className="w-full whitespace-nowrap">
        <thead className="sticky top-0">
          <tr className="roboto border-b bg-customBlue text-left font-bold text-white">
            <th className="px-4 py-3">Ngày in</th>
            <th className="px-4 py-3">Thời gian in</th>
            <th className="px-4 py-3">MSSV</th>
            <th className="px-4 py-3">In tại</th>
            <th className="px-4 py-3">Tên tài liệu</th>
            <th className="px-4 py-3">Khổ giấy</th>
            <th className="px-4 py-3">Số bản in</th>
            <th className="px-4 py-3">Số trang</th>
          </tr>
        </thead>
        <tbody className="roboto h-auto divide-y">
          {mockData.map((row, index) => (
            <tr
              key={index}
              className="bg-white font-bold text-black hover:bg-primaryContainer"
            >
              <td className="px-4 py-3 ">{row.date}</td>
              <td className="px-4 py-3 ">{row.time}</td>
              <td className="px-4 py-3">{row.studentID}</td>
              <td className="px-4 py-3">{row.printer.location}</td>
              <td className="px-4 py-3">{row.fileName}</td>
              <td className="px-4 py-3">{row.paperSize}</td>
              <td className="px-4 py-3">{row.printCount}</td>
              <td className="px-4 py-3">{row.pageCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default recordTable;

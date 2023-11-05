
const recordTable = ({mockData}) => {
  return (
    <div className="mx-4 h-[625px] w-full overflow-y-scroll bg-secondaryContainer text-base tracking-wide rounded-lg scroll">
        <table className="w-full whitespace-nowrap">
          <thead className="sticky top-0">
            <tr className="roboto border-b bg-customBlue text-left font-bold text-white">
              <th className="px-4 py-3">Ngày in</th>
              <th className="px-4 py-3">Thời gian in</th>
              <th className="px-4 py-3">MSSV</th>
              <th className="px-4 py-3">Máy in</th>
              <th className="px-4 py-3">Tên file</th>
              <th className="px-4 py-3">Khổ giấy</th>
              <th className="px-4 py-3">Số bản in</th>
              <th className="px-4 py-3">Số trang</th>
            </tr>
          </thead>
          <tbody className="roboto h-auto divide-y">
            {mockData.map((row, index) => (
              <tr key={index} className="text-customBlue hover:bg-customBlue hover:text-white" >
                <td className="px-4 py-3 font-bold">{row.date}</td>
                <td className="px-4 py-3 font-bold">{row.time}</td>
                <td className="px-4 py-3">{row.studentID}</td>
                <td className="px-4 py-3">{row.printer}</td>
                <td className="px-4 py-3">{row.fileName}</td>
                <td className="px-4 py-3">{row.paperSize}</td>
                <td className="px-4 py-3">{row.printCount}</td>
                <td className="px-4 py-3">{row.pageCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}

export default recordTable
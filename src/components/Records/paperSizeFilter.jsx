

const paperSizeFilter = ({totalCountA3,totalCountA4,totalCountA5}) => {
  return (
    <div className="roboto mx-4 flex h-[85px] w-[500px] flex-col bg-secondaryContainer">
        <div className="flex h-1/2 w-full flex-row bg-customBlue text-base font-bold text-white">
          <div className="flex w-[200px] items-center justify-start py-2 pl-4  ">
            Khổ giấy
          </div>
          <div className="flex h-full w-[100px] items-center justify-center ">
            A3
          </div>
          <div className="flex h-full w-[100px] items-center justify-center">
            A4
          </div>
          <div className="flex h-full w-[100px] items-center justify-center ">
            A5
          </div>
        </div>
        <div className="flex h-1/2 w-full flex-row text-base font-bold text-customBlue">
          {' '}
          <div className="flex w-[200px] items-center justify-start py-2 pl-4  ">
            Tổng số trang đã in{' '}
          </div>
          <div className=" flex h-full w-[100px] items-center justify-center  ">
            {totalCountA3}
          </div>
          <div className="flex h-full w-[100px] items-center justify-center ">
            {totalCountA4}
          </div>
          <div className="flex h-full w-[100px] items-center justify-center  ">
            {totalCountA5}
          </div>
        </div>
      </div>
  )
}

export default paperSizeFilter
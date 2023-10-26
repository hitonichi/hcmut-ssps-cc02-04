import { useState } from 'react';
import logo from '../../assets/images/HCMUT_logo.png';
import printing from '../../assets/icon/printing.png';
import undo from '../../assets/icon/undo.png';
import settings from '../../assets/icon/settings.png';
import logout from '../../assets/icon/logout.png';

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  const sidebarData = [
    { icon: printing, title: 'In tài liệu' },
    { icon: undo, title: 'Lịch sử in' },
    { icon: settings, title: 'Thay đổi chính sách' },
  ];

  return (
    <div className="footer">
      <div
        className={`collapsed fixed z-30 flex h-screen flex-col bg-white ${
          isExpanded ? 'w-[360px]' : ' w-[80px]'
        } `}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex h-[176px] w-full flex-col justify-between p-2">
          <div
            className={`flex h-auto w-full flex-row items-center justify-center gap-4 p-2`}
          >
            <img
              className="aspect-square w-[36px] self-center object-cover"
              src={logo}
              alt=""
            />
            <h2
              className={`flex h-full w-full items-center text-start font-serif text-2xl uppercase  text-black ${
                isExpanded ? 'block' : ' hidden'
              }`}
            >
              SPSS
            </h2>
          </div>
          <div
            className={`flex h-auto w-full flex-col gap-1 py-2 ${
              isExpanded ? 'block' : ' hidden'
            }`}
          >
            <h3 className="ml-2 w-auto text-black">Sinh viên</h3>
            <h3 className="ml-2 w-auto font-bold uppercase text-black">
              NGUYEN VAN A - 2152XXX
            </h3>
          </div>
        </div>

        <div className="h-auto w-full px-4">
          <div className="flex h-full  w-full flex-col gap-4  border-y-2 border-black py-2">
            {sidebarData.map((item, index) => (
              <div
                key={index}
                className="hover:bg-primaryContainer hover:text-customBlue flex h-auto w-full cursor-pointer flex-row items-center gap-3 rounded-lg p-2 text-black"
              >
                <img
                  className="h-[24px] w-[24px] object-cover p-1"
                  alt=""
                  src={item.icon}
                />
                <h2
                  className={`h-full w-auto text-base ${
                    isExpanded ? 'block' : ' hidden'
                  }`}
                >
                  {item.title}
                </h2>
              </div>
            ))}
          </div>
        </div>

        <div className="h-auto w-full px-4">
          <div className="hover:bg-primaryContainer hover:text-customBlue mt-2 flex h-auto w-full cursor-pointer flex-row items-center gap-3 rounded-lg p-2 text-black">
            <img
              className="h-[24px] w-[24px] object-cover p-1"
              alt=""
              src={logout}
            />
            <h2
              className={`h-full w-auto text-base ${
                isExpanded ? 'block' : ' hidden'
              }`}
            >
              Đăng xuất
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

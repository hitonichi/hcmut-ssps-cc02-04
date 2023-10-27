import notfound from "../assets/images/notfound.png"
import arrow from "../assets/images/right-arrow.png"
const NotFound = () => {
  return (
    <div className="w-screen h-screen flex justify-center bg-black overflow-hidden  font-mono">
    <div className="w-[70%] h-full  flex flex-col justify-center items-center gap-4">
      <img className="w-[500px] h-[300px] object-cover" src={notfound}></img>
      <h2 className="text-white text-2xl text-center">Trang bạn yêu cầu không tồn tại</h2>
      <a className="w-[230px] py-2 px-4 h-auto  bg-white rounded-2xl flex flex-row justify-between items-center" href="/">
        <h2 className="text-black font-bold">Quay lại trang chủ</h2>
        <img className="w-[30px] h-[30px] object-cover" src={arrow}></img>
      </a>
    </div>
    </div>
  )
}

export default NotFound
// import { useLocation } from 'react-router';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import {useSearchParams } from 'react-router-dom';
import AllowedFormatForm from '../components/policy/AllowedFormatForm';
import AllocationDateForm from '../components/policy/AllocationDateForm';
import AllocationPageForm from '../components/policy/AllocationPaperForm';
import paper from '../assets/icon/paper.png';
import calender from '../assets/icon/calendar.png';
import format from '../assets/icon/format.png';

const PoliciesPage = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const renderBody = (type) => {
    switch (type) {
      case 'date':
        //  TODO: Implement the form body here
        return (<PoliciesContainer><AllocationDateForm /></PoliciesContainer>);
      case 'paper':
        //  TODO: Implement the form body here
        return (<PoliciesContainer> <AllocationPageForm /> </PoliciesContainer>);
      case 'format':
        //  TODO: Implement the form body here
        return (<PoliciesContainer>  <AllowedFormatForm /> </PoliciesContainer>);
      default:
        return (
          <>
          <div className='min-h-screen flex flex-col items-center justify-center align-center space-y-[40px] '>
            <Button onClick={() => setSearchParams({ type: 'date' })}>
              <div className='grid grid-cols-4 
              bg-blue-200 hover:bg-blue-300 
              h-[100px] w-[396px] rounded-[20px]' >
                <div className='flex justify-center items-center '>
                  <img className='h-[50px] w-[50px] ' src={calender} alt="" />
                </div>
                <div className='col-span-2 flex justify-self-start items-center text-black text-sm font-semibold' >
                  Thay đổi ngày phân bố
                </div>
              </div>
            </Button>
            <Button onClick={() => setSearchParams({ type: 'paper' })}>
              <div className='grid grid-cols-4
              bg-blue-200 hover:bg-blue-300 
              h-[100px] w-[396px] rounded-[20px]' >
                <div className='flex justify-center items-center '>
                  <img className='h-[50px] w-[50px] ' src={paper} alt="" />
                </div>
                <div className='col-span-3 flex justify-self-start items-center text-black text-sm font-semibold' >
                  Thay đổi số trang mặc định
                </div>
              </div>
            </Button>
            <Button onClick={() => setSearchParams({ type: 'format' })}>
              <div className='grid grid-cols-4 
              bg-blue-200 hover:bg-blue-300 
              h-[100px] w-[396px] rounded-[20px]' >
                <div className='flex justify-center items-center '>
                  <img className='h-[50px] w-[50px] ' src={format} alt="" />
                </div>
                <div className='col-span-3 flex justify-self-start items-center text-black text-sm font-semibold'  >
                  Thay đổi định dạng file được phép
                </div>
              </div>
            </Button>
          </div>
          </>
        );
    }
  };

  return (
    
      <>{renderBody(searchParams.get('type'))}</>
    
  );
};

const PoliciesContainer = ({ children }) => {
  // TODO: implement the layout here
  return (
    <div className="flex h-[100vh] w-full items-center justify-center white">
      <div className=" h-3/4 w-3/4 white
        border-4 border-blue-200 rounded-[60px]
        flex items-top
        ">
        <div className='
        flex items-center justify-center
        h-[90px] w-full rounded-t-[56px]
        text-[20px] font-semibold
        bg-blue-200
        '>
          {children}
        </div>
      </div>
    </div>
  );
};

PoliciesContainer.propTypes = {
  children: PropTypes.element,
};

export default PoliciesPage;

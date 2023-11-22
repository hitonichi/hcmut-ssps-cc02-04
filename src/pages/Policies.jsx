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
          <div className='min-h-screen flex flex-col items-center justify-center align-center space-y-[40px]'>
            <Button onClick={() => setSearchParams({ type: 'date' })}>
              <div className='flex items-center justify-center 
              bg-blue-200 hover:bg-blue-300 
              h-[100px] w-[320px] rounded-[20px]
              space-x-[8px]' >
                <img className='h-[50px] w-1/8' src={calender} alt="" />
                <div className='text-black text-base font-medium' >
                  Modify allocation date
                </div>
              </div>
            </Button>
            <Button onClick={() => setSearchParams({ type: 'paper' })}>
              <div className='flex items-center justify-center 
              bg-blue-200 hover:bg-blue-300 
              h-[100px] w-[320px] rounded-[20px]
              space-x-[8px]' >
                <img className='h-[50px] w-1/8' src={paper} alt="" />
                <div className='text-black text-base font-medium' >
                  Modify allocation date
                </div>
              </div>
            </Button>
            <Button onClick={() => setSearchParams({ type: 'format' })}>
              <div className='flex items-center justify-center 
              bg-blue-200 hover:bg-blue-300 
              h-[100px] w-[320px] rounded-[20px]
              space-x-[8px]' >
                <img className='h-[50px] w-1/8' src={format} alt="" />
                <div className='text-black text-base font-medium' >
                  Modify allocation date
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
    <div className="flex h-[100vh] w-full items-center justify-center bg-yellow-100">
      <div className=" bg-red-100">{children}</div>
    </div>
  );
};

PoliciesContainer.propTypes = {
  children: PropTypes.element,
};

export default PoliciesPage;

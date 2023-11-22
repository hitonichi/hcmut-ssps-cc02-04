// import { useLocation } from 'react-router';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AllowedFormatForm from '../components/policy/AllowedFormatForm';
import AllocationDateForm from '../components/policy/AllocationDateForm';
import AllocationPageForm from '../components/policy/AllocationPaperForm';

const PoliciesPage = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const renderBody = (type) => {
    switch (type) {
      case 'date':
        //  TODO: Implement the form body here
        return <AllocationDateForm />;
      case 'paper':
        //  TODO: Implement the form body here
        return <AllocationPageForm />;
      case 'format':
        //  TODO: Implement the form body here
        return <AllowedFormatForm />;
      default:
        return (
          <>
            <Button onClick={() => setSearchParams({ type: 'date' })}>
              Modify allocation date
            </Button>
            <Button onClick={() => setSearchParams({ type: 'paper' })}>
              Modify default allocated paper
            </Button>
            <Button onClick={() => setSearchParams({ type: 'format' })}>
              Modify allowed formats
            </Button>
          </>
        );
    }
  };

  return (
    <PoliciesContainer>
      {renderBody(searchParams.get('type'))}
    </PoliciesContainer>
  );
};

const PoliciesContainer = ({ children }) => {
  // TODO: implement the layout here
  return (
    <div className="flex h-[100vh] w-full items-center justify-center bg-yellow-100">
      <div className=" bg-red-100">{children}hehe</div>
    </div>
  );
};

PoliciesContainer.propTypes = {
  children: PropTypes.element,
};

export default PoliciesPage;

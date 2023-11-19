// import { useLocation } from 'react-router';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { useNavigate, useSearchParams } from 'react-router-dom';

const PoliciesPage = () => {
  // const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const renderBody = (type) => {
    switch (type) {
      case 'date':
        //  TODO: Implement the form body here
        return (
          <>
            <Button onClick={() => navigate(-1)}>Back</Button>
            <div>Modifying allocation date</div>;
          </>
        );
      case 'paper':
        //  TODO: Implement the form body here
        return (
          <>
            <Button onClick={() => navigate(-1)}>Back</Button>
            <div>Modifying default allocated paper</div>
          </>
        );
      case 'format':
        //  TODO: Implement the form body here
        return (
          <>
            <Button onClick={() => navigate(-1)}>Back</Button>
            <div>Modifying allowed formats</div>
          </>
        );
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
  return <div className="h-[100vh] bg-yellow-100">{children}</div>;
};

PoliciesContainer.propTypes = {
  children: PropTypes.element,
};

export default PoliciesPage;

import { useSearchParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { useEffect } from 'react';

const SPSORecords = () => {
  // const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log('updage search params', searchParams, searchParams.get('type'));
  }, [searchParams]);

  const renderRecordScreen = (type) => {
    switch (type) {
      case 'general':
        return <div>Viewing Students Records</div>;
      case 'monthly':
        return <div>Viewing Monthly Records</div>;
      case 'annual':
        return <div>Viewing Annual Records</div>;
      default:
        return (
          <>
            <Button onClick={() => setSearchParams({ type: 'general' })}>
              View Student Records
            </Button>
            <Button onClick={() => setSearchParams({ type: 'monthly' })}>
              View Monthly Records
            </Button>
            <Button onClick={() => setSearchParams({ type: 'annual' })}>
              View Annual Records
            </Button>
          </>
        );
    }
  };

  return <div>{renderRecordScreen(searchParams.get('type'))}</div>;
};

export default SPSORecords;

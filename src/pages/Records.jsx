import 'dayjs/locale/en';
import { useAuth } from '../hooks/auth';
import StudentRecords from './StudentRecords';
import SPSORecords from './SPSORecords';

const Records = () => {
  const { user } = useAuth();

  const renderRecordScreen = (role) => {
    switch (role) {
      case 'student':
        return <StudentRecords />;
      default:
        return <SPSORecords />;
    }
  };

  return <>{renderRecordScreen(user.role)}</>;
};

export default Records;

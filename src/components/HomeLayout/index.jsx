import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import NavBar from '../NavBar';

const HomeLayout = () => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/dashboard/profile" />;
  }

  return (
    <div>
      <NavBar
        pages={[
          { label: 'Home', path: '/' },
          { label: 'Sign In', path: '/login' },
        ]}
      />
      <Outlet />
    </div>
  );
};

export default HomeLayout;

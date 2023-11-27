import { Navigate, Outlet } from 'react-router-dom';
import NavBar from '../NavBar';
import { useSelector } from 'react-redux';

const HomeLayout = () => {
  const { user } = useSelector((state) => state.auth);

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

import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
// import NavBar from '../NavBar';
import SideBar from '../SideBar';

const ProtectedLayout = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <SideBar />
      {/* <NavBar
        pages={[
          { label: 'Profile', path: '/dashboard/profile' },
          { label: 'Printing', path: '/dashboard/printing' },
          { label: 'Management', path: '/dashboard/management' },
        ]}
      /> */}
      {/* <nav>
        // <Link to="/dashboard/profile">Profile</Link>
        // <Link to="/dashboard/settings">Setting</Link>
        //{' '}
      </nav> */}
      <div className="pl-[80px]">
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedLayout;

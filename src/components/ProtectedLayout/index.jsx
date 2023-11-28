import { Link, Outlet } from 'react-router-dom';
import SideBar from '../SideBar';
import { useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

const ProtectedLayout = () => {
  const { user, loading } = useSelector((state) => state.auth);

  if (loading) {
    return (
      <div className="flex h-[100vh] flex-col items-center justify-center">
        <Typography variant="h6">Authenticating.</Typography>
        <CircularProgress />
      </div>
    );
  }

  if (!user) {
    return (
      <>
        Unauthenticated
        <Link to="/login">
          <Button>To Login</Button>
        </Link>
      </>
    );
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

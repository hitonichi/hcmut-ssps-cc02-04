import { Link } from '@mui/material';

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center gap-2 p-4">
      <Link
        className="w-[50%]"
        href={`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/google`}
      >
        <button className="w-full rounded-md bg-customBlue p-2 text-white hover:bg-primaryContainer">
          Sign In with SSO
        </button>
      </Link>
    </div>
  );
};

export default LoginPage;

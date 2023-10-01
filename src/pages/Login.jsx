import { useAuth } from '../hooks/auth';

const LoginPage = () => {
  const { login } = useAuth();
  return (
    <div>
      <h1>This is the Login Page</h1>
      <button onClick={() => login('hehe')}>Sign In</button>
    </div>
  );
};

export default LoginPage;

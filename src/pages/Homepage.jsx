import { useAuth } from '../hooks/auth';
import { ToastService } from '../services/ToastService';

const LoginPage = () => {
  const { login } = useAuth();
  return (
    <div>
      <h1>This is the Login Page</h1>
      <button
        onClick={async () => {
          console.log(login);
          await login('hehe');
          ToastService.createToast({ title: 'login toast' });
        }}
      >
        Sign In
      </button>
    </div>
  );
};

export default LoginPage;

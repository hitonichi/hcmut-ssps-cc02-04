import { useAuth } from '../hooks/auth';
import { ToastService } from '../services/ToastService';

const LoginPage = () => {
  const { login } = useAuth();
  return (
    <div className="flex flex-col gap-2">
      <h1>This is the Login Page</h1>
      <button
        className="w-[50%] rounded-md bg-slate-200 p-2 hover:bg-slate-400"
        onClick={async () => {
          console.log(login);
          await login({
            role: 'student',
            uid: '1234567',
            name: 'Nguyễn Văn A',
          });
          ToastService.createToast({ title: 'login toast' });
        }}
      >
        Sign In As Student
      </button>
      <button
        className="w-[50%] rounded-md bg-slate-200 p-2 hover:bg-slate-400"
        onClick={async () => {
          console.log(login);
          await login({ role: 'spso', uid: '7654321', name: 'Trần Văn B' });
          ToastService.createToast({ title: 'login toast' });
        }}
      >
        Sign In As SPSO
      </button>
    </div>
  );
};

export default LoginPage;
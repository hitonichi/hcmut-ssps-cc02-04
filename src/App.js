import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/Login';
import Homepage from './pages/Homepage';
import ProtectedLayout from './components/ProtectedLayout';
import HomeLayout from './components/HomeLayout';

function App() {
  return (
    <div>
      <Routes>
        {/* TODO: implement a not-found page */}
        <Route path="*" element={<div>Not found</div>} />

        {/* routes when not logged in */}
        <Route element={<HomeLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* routes after login */}
        <Route path="/dashboard" element={<ProtectedLayout />}>
          <Route path="profile" element={<div>This is Profile Page</div>} />
          <Route
            path="printing"
            element={<div>This is Printing Management Page</div>}
          />
          <Route
            path="management"
            element={<div>This is Management Page</div>}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

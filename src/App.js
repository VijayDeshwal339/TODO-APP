import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'; 
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';

const App = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  return (
    <>
    <Toaster  />
     <Header/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        {/* Optional: Redirect other routes to /login */}
        <Route path="*" element={<Navigate to="/login" />} />
        
      </Routes>
      </>
  );
};

export default App;

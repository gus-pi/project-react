import Devbar from '@/components/Devbar/Devbar';
import { Outlet } from 'react-router-dom';
import Navbar from './components/NavBar';
import { useAuth } from './components/AuthProvider';

const App = () => {
  const { token } = useAuth();
  return (
    <>
      {/* <div className='fixed bottom-0 left-0 top-0'> <Devbar /> </div> */}
      <div className='flex items-center'>
        {token && <Navbar />}
        <Outlet />
      </div>
    </>
  );
};

export default App;

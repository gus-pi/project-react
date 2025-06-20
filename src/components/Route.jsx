import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import { useEffect } from 'react';
import { Spinner } from './ui';

const Route = ({ children, isProtected }) => {
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    if (isProtected && token === null) {
      navigate('/signin', { replace: true });
    }
  }, [isProtected, navigate, token]);
  return token === undefined ? (
    <div className='absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center'>
      <Spinner />
    </div>
  ) : (
    children
  );
};
export default Route;

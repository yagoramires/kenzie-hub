import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';
import { toast } from 'react-toastify';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      const res = await api.post('/sessions', formData);
      localStorage.setItem('@TOKEN', res.data.token);
      localStorage.setItem('@USERID', res.data.user.id);

      setUser(res.data.user);

      navigate('/home');
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };

  const handleRegister = async (formData) => {
    try {
      await api.post('/users', formData);
      toast.success('Usuário cadastrado com sucesso.');
      navigate('/login');
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('@TOKEN');
    localStorage.removeItem('@USERID');
    navigate('/login');
  };

  const handleMountPage = async () => {
    try {
      const token = localStorage.getItem('@TOKEN');

      if (!token) {
        navigate('/login');
        return;
      } else {
        const res = await api.get('/profile', {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        });

        if (res.status === 200) {
          localStorage.setItem('@USERID', res.data.id);
          setUser(res.data);
          navigate('/home');
        }
      }
    } catch (e) {
      localStorage.removeItem('@TOKEN');
      localStorage.removeItem('@USERID');
      navigate('/login');
    }
  };

  useEffect(() => {
    handleMountPage();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, handleLogin, handleRegister, handleLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};

import { createContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { toast } from 'react-toastify';

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techs, setTechs] = useState([]);

  const addTechOnApi = async (formData) => {
    try {
      const token = localStorage.getItem('@TOKEN');

      await api.post('/users/techs', formData, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      getTechsData();
    } catch (e) {
      toast.error(e.message);
      console.log(e);
    }
  };

  const updateTechStatus = async (techId, formData) => {
    try {
      const token = localStorage.getItem('@TOKEN');
      await api.put(`/users/techs/${techId}`, formData, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      getTechsData();
    } catch (e) {
      console.log(e);
    }
  };

  const deleteTech = async (techId) => {
    try {
      const token = localStorage.getItem('@TOKEN');
      await api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      });
      getTechsData();
    } catch (e) {
      toast.error(e.message);
      console.log(e);
    }
  };

  const getTechsData = async () => {
    try {
      const userId = localStorage.getItem('@USERID');
      const res = await api.get(`/users/${userId}`);

      setTechs(res.data.techs);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <TechContext.Provider
      value={{
        techs,
        addTechOnApi,
        updateTechStatus,
        deleteTech,
        getTechsData,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

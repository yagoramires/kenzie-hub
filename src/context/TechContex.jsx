import { createContext } from 'react';

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const handleAddTech = (formData) => {
    console.log(formData);
  };

  return (
    <TechContext.Provider value={{ handleAddTech }}>
      {children}
    </TechContext.Provider>
  );
};

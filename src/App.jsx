import { GlobalStyle } from './styles/GlobalStyle';
import Routes from './Routes';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import Loading from './components/Loading';

const App = () => {
  const { loading } = useContext(UserContext);

  if (loading)
    return (
      <div className='App'>
        <Loading />
        <GlobalStyle />
      </div>
    );

  return (
    <div className='App'>
      <Routes />
      <GlobalStyle />
      <ToastContainer
        theme='dark'
        autoClose={2000}
        position={toast.POSITION.TOP_RIGHT}
      />
    </div>
  );
};

export default App;

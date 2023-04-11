import { GlobalStyle } from './styles/GlobalStyle';
import Routes from './Routes';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
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

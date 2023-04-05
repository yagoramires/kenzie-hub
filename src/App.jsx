import { useState } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import Routes from './Routes';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className='App'>
      <Routes user={user} setUser={setUser} />
      <GlobalStyle />
      <ToastContainer
        theme='dark'
        autoClose={2000}
        position={toast.POSITION.TOP_RIGHT}
      />
    </div>
  );
}

export default App;

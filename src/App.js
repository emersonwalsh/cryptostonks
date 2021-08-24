import React, { useState, useEffect, useRef } from 'react';
import logo from './logo-black.png';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import NftContainer from './components/NftContainer';


function App() {
  const containerEle = useRef(null);
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const { REACT_APP_PASSWORD } = process.env;

  useEffect(()=> {
    if (show) {
      containerEle.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, [show]);

  const enter = () => {
    if (password === REACT_APP_PASSWORD) {
      setShow(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <div className="enter-container">
          <TextField 
            classes={{ root: 'input-root' }} 
            id="password" 
            label="Password" 
            variant="outlined" 
            size="small"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <div className="enter-button">
            <Button variant="contained" onClick={enter} size="medium" color="primary">Explore</Button>
          </div>
        </div>
        
      </header>
      <div ref={containerEle}>
        {show && 
          <NftContainer />
        }
      </div>

    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import './App.css';

function App () {  
  const [loggedIn, setLoggedIn] = useState(false);
  const toggleLoggedIn = () => setLoggedIn(!loggedIn);
  return (
    <div>
      <Header loggedIn={loggedIn} handleLoggedInClick={toggleLoggedIn} />
      <Content loggedIn={loggedIn} text='My life' />
    </div>  
  );
}


export default App;

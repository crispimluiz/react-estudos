import React from 'react';
import { Router } from 'react-router-dom';

import history from './services/history'
import GlobalStyled from './Styled/GobalStyled';
import Header from './components/Header'
import Route from './router'

function App() {
  return (
    <Router history={history}>

      <Header />
      <Route />
      <GlobalStyled />

    </Router>
  );
}

export default App;

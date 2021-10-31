import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';

import Student from './Student';
import Professor from './Professor';

function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="content">
          <BrowserRouter>
             <Header/>
             <Route path='/' exact={true} component={Student}/>
             <Route path='/private' exact={true} component={Professor}/>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
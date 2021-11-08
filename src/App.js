import React, { useState } from 'react';
import './index.css';
import Header from './Header';
import Student from './Student';
import Professor from './Professor';
import SurveyComponent from './SurveyComponent';
import { BrowserRouter, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <div className="page">
        <div className="content">
          <BrowserRouter>
             <Header/>
             <Route path='/' exact={true} component={Student}/>
             <Route path='/professor' exact={true} component={Professor}/>
             <Route path='/quiz' exact={true} component={SurveyComponent}/>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
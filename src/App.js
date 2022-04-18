import React from 'react';
import { BrowserRouter} from "react-router-dom"

import { Navbar } from './components'
import Router from './router'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Router/>
    </BrowserRouter>
  );
}

export default App;

import React from 'react'
import RoutesConfig from './routers'
import { BrowserRouter  as Router } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <RoutesConfig />
      </Router>
    </div>
  );
}

export default App;

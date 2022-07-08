import React, { Suspense } from 'react'
import RoutesConfig from './routers'
import { BrowserRouter  as Router } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Suspense fallback={<div>loading...</div>}>
        <Router>
          <RoutesConfig />
        </Router>
      </Suspense>
    </div>
  );
}

export default App;

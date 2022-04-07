import React from 'react';
import {BrowserRouter as BR,  Routes ,Route} from 'react-router-dom';
import Asteroid from './component/Asteroid';
import AsteroidDetail from './component/AsteroidDetail';
 
function App() {
  return (
    <BR>
    <Routes>
      <Route path="/" element={<Asteroid/>}></Route >
      <Route path="/asteroiddetails" element={<AsteroidDetail/>}></Route >
    </Routes>
    </BR>
  );
}

export default App;
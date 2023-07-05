import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginScreen />} />
          <Route path='/home' element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

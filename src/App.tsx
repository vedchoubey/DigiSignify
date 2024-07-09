import React from 'react';
import { Draw } from './components/SignaturePad';
import { Type } from './components/TypedSign';
import { Header } from './components/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Landing } from './Pages/LandingPage';

export const App: React.FC = () => {
  const location = useLocation();

  const shouldDisplayHeader = () => {
    return location.pathname !== "/login" ;
  };
  return (
    <>
     {shouldDisplayHeader() && <Header />}
      <Routes>

        <Route path='/draw' element={<Draw/>}/>
        <Route path='/type' element={<Type/>} />
        <Route path='/' element={<Landing/>} />

      </Routes>
    </>

  );
};




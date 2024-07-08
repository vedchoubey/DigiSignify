import React from 'react';
import { SignaturePad } from './components/SignaturePad';
import { TypedSign } from './components/TypedSign';
import { Header } from './components/Header';
import { Route, Routes } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path='/signature' element={<SignaturePad/>}/>
        <Route path='/header' element={<Header/>}/>
        <Route path='/typedsign' element={<TypedSign/>} />
      </Routes>
    </>

  );
};




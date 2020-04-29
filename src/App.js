import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {AuthProvider} from './context/AuthContext';
import Articles from './components/Articles';
function App() {
  return (
    <AuthProvider>
      <Articles />

    </AuthProvider>
  );
}

export default App;

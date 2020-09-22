import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import './style.css'
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
function App() {
  return (
    <div className="App">
     <Header/>
     <Main/>
     <Footer/>
    </div>
  );
}

export default App;

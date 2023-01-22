import React from 'react';
import Footer from './components/footer'
import Header from './components/header'
import Main from './components/main'
import './App.scss';

function App() {

  return (
    <div className="wrapper">
      {/* header */}
      <Header />
      {/* main */}
      <Main />
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;

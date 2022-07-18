import React from 'react';
import NavBar from 'Components/NavBar/NavBar';
import GlobalStyle from './App.style';

/**
 * @description creates root compnenet
 *
 * @returns react APP
 */
function App() {
  return (
    <>
      <GlobalStyle />
      <NavBar />
    </>
  );
}
export default App;

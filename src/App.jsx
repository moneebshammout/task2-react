import { React } from 'reuse/Packages';
import NavBar from 'Components/NavBar/NavBar';
import Body from 'Components/Body/Body';
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
      <Body />
    </>
  );
}
export default App;

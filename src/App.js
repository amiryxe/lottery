import 'sahel-font/dist/font-face.css';
import './assets/style/main.scss';
import Main from './containers/Main';
import MainState from './context/MainState';
import { ChakraProvider } from '@chakra-ui/react';
import chakraOptions from './chakraOptions';

function App() {
  return (
    <MainState>
      <div className="App">
        <ChakraProvider theme={chakraOptions}>
          <Main />
        </ChakraProvider>
      </div>
    </MainState>
  );
}

export default App;

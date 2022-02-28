import 'sahel-font/dist/font-face.css';
import './assets/style/main.scss';
import Main from './containers/Main';
import MainState from './context/MainState';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

const themeOptions = {
  colors: {
    brand: {
      900: '#1a365d',
      800: '#153e75',
      700: '#2a69ac',
    },
  },
  config: {
    initialColorMode: "dark"
  }
}

const theme = extendTheme(themeOptions)

console.log(theme)

function App() {
  return (
    <MainState>
      <div className="App">
        <ChakraProvider theme={theme}>
          <Main />
        </ChakraProvider>
      </div>
    </MainState>
  );
}

export default App;

import 'sahel-font/dist/font-face.css';
import './assets/style/main.scss';
import Main from './containers/Main';
import MainState from './context/MainState';
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

function App() {
  return (
    <MainState>
      <div className="App" theme={theme}>
        <ChakraProvider>
          <Main />
        </ChakraProvider>
      </div>
    </MainState>
  );
}

export default App;

import 'sahel-font/dist/font-face.css';
import './assets/style/main.scss';
import Main from './containers/Main';
import MainState from './context/MainState';

function App() {
  return (
    <MainState>
      <div className="App">
        <Main />
      </div>
    </MainState>
  );
}

export default App;

import './assets/style/main.scss';
import Sphere from './components/Sphere';

function App() {
  return (
    <div className="App">
      <Sphere />

      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>
    </div>
  );
}

export default App;

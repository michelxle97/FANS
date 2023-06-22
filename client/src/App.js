import logo from './logo.svg';
import './App.css';
import GuessPokemon from './components/GuessPokemon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png"} className="App-logo mask brightness" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <GuessPokemon/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

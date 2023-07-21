
import './App.css';
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Hello world</h1>
        <Weather />
      <footer>
        This project was coded by{" "}
        <a
          href="https://snazzy-alfajores-066529.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Boocie{" "}
        </a>{" "}
        and is open-sourced on <a href=''GitHub and hosted on Netlify
      </footer>
      </div>
    </div>
  );
}

export default App;

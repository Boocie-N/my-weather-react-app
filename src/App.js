import "./App.css";
import Weather from "./Weather";

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
          and is open-sourced on{" "}
          <a
            href="https://github.com/Boocie-N/my-weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://magnificent-moxie-bf1bae.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

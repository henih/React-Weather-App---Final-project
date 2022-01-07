import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Budapest" />
        <footer>
          This application was coded by Henriett Horvath and is{" "}
          <a
            href="https://github.com/henih/React-Weather-App---Final-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}

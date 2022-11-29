import logo from './logo.svg';
import './App.css';
import JSsoup from 'jssoup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          var soup = new JSSoup

          const html = (await (await fetch("https://www.realmeye.com/wiki/set-tier-items")).text()); // html as text
          const doc = new DOMParser().parseFromString(html, 'text/html');
          doc.title; doc.body;

        </a>
      </header>
    </div>
  );
}

export default App;

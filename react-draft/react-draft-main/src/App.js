import logo from './logo.svg';
import './App.css';
import TextEditor from './components/TextEditor'
import save from './components/TextEditor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React editor
        </p>

      </header>
      <div className='editor'>
      <TextEditor/> 
      
      </div>
    </div>
  );
}

export default App;

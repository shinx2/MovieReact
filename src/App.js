import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';

function App() {

  return (
    <div className="App">
    {/* history={createBrowserHistory()} */}
      <Router routes={Routes}>
        {/* context for movielist in main page */}
        <Routes/>
      </Router> 
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import MainNav from './component/MainNav';
import {MovieContextProvider} from './context/MovieContext';

function App() {

  return (
    <div className="App">
      <MovieContextProvider>
        <Router routes={Routes}>
          {/* context for movielist in main page */}
          <MainNav />
          <Routes/>
        </Router> 
      </MovieContextProvider>
    </div>
  );
}

export default App;

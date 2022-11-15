import NavBar from './NavBar'
import Home from './Home'
import JobForm from './JobForm';
import { Route, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/JobForm" element={<JobForm />} />
      </Routes>
    </div>
  );
}

export default App;

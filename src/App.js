import NavBar from './NavBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/JobForm" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

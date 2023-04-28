import './App.css';
import { Routes, Route } from 'react-router-dom';
import CreateComponent from './components/CreateComponent';
import ShowComponent from './components/ShowComponent';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<CreateComponent />} />
        <Route path='/show' element={<ShowComponent />} />
      </Routes>
    </div>
  );
}

export default App;

import './App.css';
import Main from './comp/Main'
import Cafe from './comp/Cafe'
import BadamAnser from './comp/BadamAnser';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/cafe' element={<Cafe/>} />
      <Route path='/badamanser' element={<BadamAnser/>} />
    </Routes>
    </div>
  );
}

export default App;

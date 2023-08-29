import MainDiv from './components/maindiv/MainDiv';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Movies from './components/movies/Movies';
import Signup from './components/signup/Signup';
function App() {
  return (
      <>
      <Routes>
        <Route path='/' element={  <MainDiv />} />
        <Route path='/Movies' element={  <Movies />} />
        <Route path='/Signup' element={  <Signup />} />
      </Routes>
     
      </>
  
  );
}

export default App;

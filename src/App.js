import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { Route,Routes } from 'react-router-dom';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import About from './Component/About';

function App() {
  return (
    <div className="">
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/singleproduct/:id' element={<SingleProduct/>} />
      <Route path='/about' element={<About/>} />
      
      </Routes>
    </div>
  );
}

export default App;

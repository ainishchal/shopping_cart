import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';


function App() {
  return (
      <BrowserRouter>
      <Header />
      <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
   );
}

export default App;

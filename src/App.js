import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home';
import Menu from './menu';
import SingelMenu from './singleMenu';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/menu" element={<Menu />} />
    <Route path="/singelMenu/:id" element={<SingelMenu />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

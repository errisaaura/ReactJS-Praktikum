import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css';
import NavbarComponents from './components/NavbarComponents';
import Home from './pages/Home'
import Bmi from './pages/Bmi'
import CicilanBank from './pages/CicilanBank';
import Biner from './pages/toBiner'
import Decimal from './pages/toDecimal'
import Oktal from './pages/toOktal'
import Hexadecimal from './pages/toHexadecimal'
import HargaAkhir from './pages/HargaAkhir';

function App() {
  return (
    <div className="">
      <NavbarComponents />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Bmi" element={<Bmi />}></Route>
          <Route path="/Bank" element={<CicilanBank />}></Route>
          <Route path="/HargaAkhir" element={<HargaAkhir />}></Route>
          <Route path="/toBiner" element={<Biner />}></Route>
          <Route path="/toDecimal" element={<Decimal />}></Route>
          <Route path="/toOktal" element={<Oktal />}></Route>
          <Route path="/toHexadecimal" element={<Hexadecimal />}></Route>
        </Routes>
      
      </BrowserRouter>


    </div>
  );
}

export default App;

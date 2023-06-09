import Navbar from '../src/components/Navbar'
import Cart from '../src/pages/Cart'
import Home from '../src/pages/Home'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      
      <div className='bg-slate-900'>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>

    </div>
  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { About } from './pages/about/About';
import { Product } from './pages/products/Product';
import { Header } from './components/header/Header';
import { ProductDetail } from './pages/productDetail/ProductDetail';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/about' element = {<About/>}/>
          <Route path='/products' element = {<Product/>}/>
          <Route path='/product/:id' element = {<ProductDetail/>}/>
        </Routes>
    </div>
  );
}

export default App;

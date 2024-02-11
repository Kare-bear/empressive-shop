import './App.css';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Navbar} from "./components/navbar";
import {Cart} from "./pages/cart/cart";
import {Shop} from "./pages/shop/shop";
import {Checkout} from "./pages/checkout/checkout"
import { ShopContextProvider } from './context/shop-context';
import { ProductPage } from './pages/shop/product-page';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/product-page' element={<ProductPage/>}/>
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Page from "./components/Page";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/CheckOut/Checkout";
import { CartProvider } from "./context/CartContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/marca/:marca" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="*" element={ <Page title="404 NOT FOUND"></Page>}/>
        </Routes>
        <Footer/>
      </CartProvider>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;

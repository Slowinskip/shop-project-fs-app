import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Order from './components/features/Order/Order';
import ProductPage from './components/features/ProductPage/ProductPage';
import Footer from './components/layout/Footer/Footer';
import Home from './components/layout/Home/Home';
import Navbar from './components/layout/Navbar/Navbar';
import Cart from './components/views/cart/Cart';
import InProgress from './components/views/InProgress/InProgress';
import Login from './components/views/Login/Login';
import Logout from './components/views/Logout/Logout';
import NotFound from './components/views/NotFound/NotFound';
import Register from './components/views/Register/Register';
import Summary from './components/views/Summary/Summary';
import { addCart } from './redux/cartRedux';

function App() {
  const [cartData, setcartData] = useState(
    JSON.parse(localStorage.getItem('cart')) || 0,
  );
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user')) || 0,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (cartData.length > 0) {
      cartData.map((i) => {
        dispatch(addCart(i));
      });
    }
  }, [cartData]);

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/loginUser" element={<Login />} />
        <Route path="/registerUser" element={<Register />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/logoutUser" element={<Logout />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;

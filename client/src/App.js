import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import ProductPage from './components/features/ProductPage/ProductPage';
import Footer from './components/layout/Footer/Footer';
import Home from './components/layout/Home/Home';
import Navbar from './components/layout/Navbar/Navbar';
import InProgress from './components/views/InProgress/InProgress';
import Login from './components/views/Login/Login';
import NotFound from './components/views/NotFound/NotFound';
import Register from './components/views/Register/Register';
import { addCart, getCartById } from './redux/cartRedux';

function App() {
  const [cartData, setcartData] = useState(
    JSON.parse(localStorage.getItem('cart')),
  );
  const dispatch = useDispatch();

  useEffect(() => {
    cartData.map((i) => {
      console.log(i);
      dispatch(addCart(i));
    });
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
        <Route path="/cart" element={<InProgress />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;

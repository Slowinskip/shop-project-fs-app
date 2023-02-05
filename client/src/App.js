import { Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer/Footer';
import Home from './components/layout/Home/Home';
import Navbar from './components/layout/Navbar/Navbar';
import InProgress from './components/views/InProgress/InProgress';
import NotFound from './components/views/NotFound/NotFound';

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<InProgress />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;

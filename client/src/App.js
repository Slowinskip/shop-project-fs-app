import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer/Footer';
import Home from './components/layout/Home/Home';
import Navbar from './components/layout/Navbar/Navbar';
import InProgress from './components/views/InProgress/InProgress';
import NotFound from './components/views/NotFound/NotFound';

function App() {
  return (
    <main>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Container>
    </main>
  );
}

export default App;

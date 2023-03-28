import { BrowserRouter,Routes,Route } from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contato from "./pages/Contato";
import ListaProdutos from "./pages/Produtos";

import './styles.css';

function App() {
  return(
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' exact element={<Home />} index />
        <Route path="/produtos" element={<ListaProdutos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
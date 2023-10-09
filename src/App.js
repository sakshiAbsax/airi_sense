import logo from './logo.svg';
import './App.css';
import { Header } from './component/Header';
import { Home } from './component/Home';
import { Route, Routes } from 'react-router-dom';
import { HomeAbout } from './component/HomeAbout';
import { About } from './page/About';
import { Customer } from './page/Customer';
import { PageNotFound } from './page/PageNotFound';
import { Industries } from './page/Industries';
import { Contact } from './page/Contact';
import { Solutions } from './page/Solutions';
import  Blogs  from './page/Blogs';
import { Product } from './page/Product';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      
      <Header />
      <Routes >
          <Route path='/' element={<Home />} />
          <Route path="/homeabout" element={<HomeAbout />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/customer" element={<Customer />}> </Route>
        <Route path="/industries" element={<Industries />}> </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/product" element={<Product />} />                             
        <Route path="/*" element={<PageNotFound />}> </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

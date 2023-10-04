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

function App() {
  return (
    <div>
      
      <Header />
      <Routes >
          <Route path='/' element={<Home />} />
          <Route path="/homeabout" element={<HomeAbout />} />
        <Route path="/aboutpage" element={<About />}></Route>
        <Route path="/customer" element={<Customer />}> </Route>
        <Route path="/industries" element={<Industries />}> </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<PageNotFound />}> </Route>
      </Routes>
      
    </div>
  );
}

export default App;

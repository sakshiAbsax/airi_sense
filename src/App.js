import logo from './logo.svg';
import './App.css';
import { Header } from './component/Header';
import { Home } from './component/Home';
import { Route, Routes } from 'react-router-dom';
import { HomeAbout } from './component/HomeAbout';
import { About } from './page/About';

function App() {
  return (
    <div>
      
      <Header />
      <Routes >
          <Route path='/' element={<Home />} />
          <Route path="/homeabout" element={<HomeAbout />} />
        <Route path="/aboutpage" element={<About />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;

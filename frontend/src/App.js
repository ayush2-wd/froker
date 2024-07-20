import './styles/custom.css';

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blogs from './components/Blogs';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Home from './components/Home';
import Discover from './components/Discover';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={Home}/>
      <Route path='/blogs' element={Blogs}/>
      <Route path='/blog/:id' element={Blog}/>
      <Route path='/froker' element={Discover}/>
    </Routes>
    <div className="App">
      
      <Blog/>
      
    </div>
    <Footer/>
</BrowserRouter>
  );
}

export default App;

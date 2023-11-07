import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import PageNotFound from './pages/404/PageNotFound';
import Detail from './pages/detail/Detail';
import Home from './pages/home/homepage/Home';

function App() {
  return (
    <div>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

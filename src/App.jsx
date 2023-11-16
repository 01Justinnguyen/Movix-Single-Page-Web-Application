import { Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { AuthProvider } from './context/auth-context'
import PageNotFound from './pages/404/PageNotFound'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import Detail from './pages/detail/Detail'
import Explore from './pages/explore/explore'
import Home from './pages/home/homepage/Home'
import SearchResult from './pages/searchResult/searchResult'

function App() {
  return (
    <div className="Movix-App">
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  )
}

export default App
